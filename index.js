import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { start } from './data/Mempool.js'
import Transaction from './models/transaction.js'
import getPool from './data/Graph.js';

dotenv.config();


const app = express()
  
const port = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan('common'));
app.use(cors());


// var connected = false

// mongoose.connect(
//   process.env.MONGO_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//   },
//   () => {
//     console.log("mongodb connected!");
//     connected = true
//   },
// )

// Post route to handle form submission 
// logic and add data to the database


let pools

await getPool().then(res => {
  pools = res.data.pools
})

console.log(pools)


app.post('/upload', async (req, res) => {
  const { _node } = req.body
  const {from, to, hash, params} = _node

  console.log("hash: ", hash)
  console.log(
    "params: ", JSON.stringify(params))

  console.log("\n\n\n")
  res.send("recieved data")
})
  // if (connected) {
//   const addedRecord = await Transaction.create({
//     from: from,
//     to: to,
//     hash: hash,
//     input: params
//   })

//   addedRecord.save().then(res => {
//     console.log(res)
//   })
// }
 
  
//   res.send("Information added to the"
//          + " database successfully.")
// })
  
app.listen(port, () => {
  console.log(`Server start on port ${port}`)
})


start()