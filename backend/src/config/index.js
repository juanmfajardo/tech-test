export default {
    PORT: process.env.PORT || 2005,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
    MONGO_DB: process.env.MONGO_DB || 'tech_test',
    MONGO_TEST_DB: process.env.MONGO_TEST_DB || 'test',
    NODE_ENV: process.env.NODE_ENV || 'dev',
};
