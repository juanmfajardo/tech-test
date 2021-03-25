import mongoose from 'mongoose';

import config from '../config/index.js';
import { isTestEnvironment } from '../utils/index.js';

const mongooseLoader = async () => {
    try {
        const mongoDb = isTestEnvironment() ? config.MONGO_TEST_DB : config.MONGO_TEST_DB;
        await mongoose.connect(`${config.MONGO_URL}${mongoDb}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        mongoose.set('debug', !isTestEnvironment());
        mongoose.set('useFindAndModify', false);
        mongoose.set('toJSON', { virtuals: true });
    } catch (error) {
        console.log(`Mongoose Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default mongooseLoader;
