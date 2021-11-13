Currently, JITbot only has the capabilities of scanning the pending mempool using an Infura node, and then querying for uniswap v3 router transactions. It also has the capabilities of decoding the transaction input using the contract ABI. Next steps will be to store the recorded transactions in some sort of database for future research purposes, and in addition further query the transactions to locate specific coin pairs that are being traded. This will quickly transition to the ability to locate a specific transaction, and dispatch it to flashbots bundled with another transaction that deposits liquidity into the specific pool being traded. 






// Here is the ultimate strategy for the bot.


// Recieve information from the mempool on upcoming transactions

This requires hooking up to a GETH light node. We pull down the mempool transactions and do some data cleaning to see what's going on in the mempool.

What to look for?

- UniSwap v3 transactions
- In token pairs that have an ideal amount of liquidity (what is ideal here?)
- A large enough trade to meet profit conditions across the bot (est. profit over a time period + hedging - Impermanent Loss on position - gas to miner)

- Get the price that the trade plans to purchase from this liquidity pool at

// find a vulnerable transaction on uniswap v3

- Now we need to locate the pool on uniswap v3 and prepare a transaction to dump our sweet liquidity into it.

// provide the liquidity to the contract and simultaneously create a hedged position on a CEX - This will be a position (or several ) against the tokens where liquidity is being provided to compensate for impermanent loss
 
 - We bundle our transaction with the prey transaction
 - first our transaction executes, and the uniswap pool recieves our liquidity
 - Then a large trade happens, we have provided banded liquidity around this price's transaction

// submit to flashbots endpoint to be included atomically in that exact order within one block


// ideally this bot also has some sort of profit locking strategy that exits our liquidity positions, unhedges profitably, and then re-enters another unsuspecting pool.

// atomicly fails if either: gas + auction is more expensive than fees, i.e. no profit
// or: not all transactions were included in the same block (this probably has to be the case, could be experimented with.)
// fees - gas to miners = successful MEV