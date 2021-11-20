import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { start } from './data/Mempool.js';
import getPool from './data/Graph.js';


dotenv.config();


const app = express()
  
const port = process.env.PORT || 3000

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan('common'));
app.use(cors());




let pools = {

}

await getPool().then(res => {
  res.data.pools.map(pool => {
    pools[pool.id] = { token0: pool.token0, token1: pool.token1, feesUSD: pool.feesUSD}
  })
})


console.log(pools)



app.post('/upload', async (req, res) => {
  const { _node } = req.body
  const {from, to, hash, params} = _node

  console.log("hash: ", hash)
  console.log(
    params.params[0],
    "tokenIn: ", params.params[0].value[0], 
    "\ntokenOut:", params.params[0].value[1],
    "\nfee: ", params.params[0].value[2],
    "\nrecepient: ", params.params[0].value[3],
    "\ndeadline: ", params.params[0].value[4],
    "\namountIn: ", params.params[0].value[5],
    
    )

  res.send("recieved data")
  console.log("\n")
})

  
app.listen(port, () => {
  console.log(`Server start on port ${port}`)
})


start()