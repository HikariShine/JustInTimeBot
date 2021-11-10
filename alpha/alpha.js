// Here is the ultimate strategy for the bot.


// Recieve information from the mempool on upcoming transactions

// find a vulnerable transaction on uniswap v3

// call a smart contract to allocate the funds via flash loan to provide immense banded liquidity 
//around the estimated price based on the mempool transaction (or do we do this via oracle?)

// provide the liquidity to the contract

// after trade, close your liquidity position

// return flash loan, recieve fees from pool

// submit to flashbots endpoint to be included atomically in that exact order within one block

// atomicly fails if either: gas + auction is more expensive than fees, i.e. no profit
// or: not all transactions were included in the same block (this probably has to be the case, could be experimented with.)
// fees - gas to miners = successful MEV