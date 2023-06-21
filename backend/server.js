import express from 'express';
import 'dotenv/config'

const app = express(); // creating express app

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.get('/', (req, res) => {
 res.json({mssg:'Welcome to the app'})
})

app.listen(process.env.PORT, () => { // listen for request
  console.log(`listening on port:${process.env.PORT}`);
})