module.exports = {
    MONGODB: process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost/merng",
    SECRET_KEY: "MerngSecret"
}
