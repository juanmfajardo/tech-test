import express from 'express';

import config from './src/config/index.js';
import loaders from './src/loaders/index.js';

const startServer = async () => {
    const app = express();
    await loaders(app);

    app.listen(config.PORT, () => { 
        console.log(`Backend running on port ${config.PORT} 🚀`);
    })

    app.on('error', (err) => {
        console.log(err);
        process.exit(1);
    });
}

startServer();
