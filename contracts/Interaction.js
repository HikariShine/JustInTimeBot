import { web3 } from "../data/Mempool.js";
import { abi } from "../abi/uniswapV3Factory.js";

// initialize connection with Uniswap v3 pools contract
var contract = new web3.eth.Contract()

console.log(contract)


//TODO: Mint a position / add liquidity to position on function call