require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const sequelize = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');
const {User} = require('./models/models');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT ?? 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/upload', express.static(path.resolve(__dirname, 'upload')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();


        if ( !(await User.findOne({
            where: {
                login: "admin"
            }
        }))) {
            let password = await bcrypt(process.env.AP_PASSWORD, 5);
            await User.create({login: "admin", password });
        }

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

    } catch (e) {
        console.log(e);
    }
}

start();
