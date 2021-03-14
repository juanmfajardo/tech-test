import mongoose from 'mongoose';

import config from '../config/index.js';

const mongooseLoader = async () => {
    await mongoose.connect(config.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }).catch(console.log);

    mongoose.set('debug', true);
};

export default mongooseLoader;
