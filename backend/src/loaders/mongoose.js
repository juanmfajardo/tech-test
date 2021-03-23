import mongoose from 'mongoose';

import config from '../config/index.js';

const mongooseLoader = async () => {
    try {
        await mongoose.connect(config.MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        mongoose.set('debug', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('toJSON', { virtuals: true });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default mongooseLoader;
