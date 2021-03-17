import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

const loaders = async (app) => {
    expressLoader(app);
    await mongooseLoader();
};

export default loaders;
