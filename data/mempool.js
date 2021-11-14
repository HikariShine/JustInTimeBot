import Web3 from "web3";
import abiDecoder from "abi-decoder";
import { abi } from "../abi/uniswapV3Factory.js";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();


var web3 = new Web3(process.env.WSS_ENDPOINT);

var subscription;


const store = async (node) => {
    await axios.post("http://localhost:3000/upload", {
        _node: node,
    }).then(res => {
        }
    ).catch(error => {
        console.log(error)
    })
}

export const start = async () => {
    abiDecoder.addABI(abi);
    subscription = web3.eth.subscribe('pendingTransactions', function (error, result) {
    })
        .on("data", function (transactionHash) {
            web3.eth.getTransaction(transactionHash)
                .then(function (transaction) {
                    if (transaction) {
                        if (transaction.to == '0xE592427A0AEce92De3Edee1F18E0157C05861564') {
                        var node = {
                            from: transaction.from, to: transaction.to, hash: transaction.hash, params: abiDecoder.decodeMethod(transaction.input)}
                        if (node.params.name == "exactInputSingle") {
                        store(node)
                        }
                        }

                    }
                });
        })
    }


start()

