import expressLoader from './express.js';

const loaders = async (app) => {
    await expressLoader(app);
};

export default loaders;