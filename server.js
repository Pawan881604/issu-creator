// const errorMiddleware = require('./middleware/error');
const app = require("./app");



app.listen(process.env.PORT,()=>console.log(`server start:${process.env.PORT}`))
// app.use(errorMiddleware)