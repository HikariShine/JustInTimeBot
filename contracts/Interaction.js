import { web3 } from "../data/Mempool.js";
import { abi } from "../abi/uniswapV3Factory.js";
import { abi2 } from "../abi/uniswapV3NFTpositionManager.js";

// initialize connection with Uniswap v3 pools contract




const Wallet


console.log(positionContract.methods.increaseLiquidity)


//TODO: Mint a position / add liquidity to position on function call

export const IncreaseLiquidity = async (_tokenId, _amount0Desired, _amount1Desired, _amount0Min, _amount1Min, _deadline) => {
    var positionContract = new web3.eth.Contract(abi2, "0xC36442b4a4522E871399CD717aBDD847Ab11FE88")
    var tx
    await positionContract.methods.increaseLiquidity(_tokenId, _amount0Desired, _amount1Desired, _amount0Min, _amount1Min, _deadline).send({from: Wallet}).then(receipt => {
        tx = receipt
    }
    )
    return tx
    // return a transaction hash where liquidity is increased
} 

export const DescreaseLiquidity = async (_tokenId, _liquidity, _amount0Min, _amount1Min, _deadline) => {
    var positionContract = new web3.eth.Contract(abi2, "0xC36442b4a4522E871399CD717aBDD847Ab11FE88")
    var tx
    await positionContract.methods.descreaseLiquidity(_tokenId, _amount0Min, _amount1Min, _deadline).send({from: Wallet}).then(receipt => {
        tx = receipt
    }
    )
    return tx
    // return a transaction hash where liquidity has been decreased 
}