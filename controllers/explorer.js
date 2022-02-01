const web3 = require('../utils/web3');

const getTransactionReceipt = async (txHash) => {
    try {
        const receipt = await web3.getTransactionReceipt(txHash);
        console.log({ receipt });
        return receipt;
    } catch (error) {
        console.log({ error: error.message });
    }
}

const getBlock = async (block) => {
    try {
        const count = await web3.getBlock(block);
        console.log({ count });
        return count;
    } catch (error) {
        console.log({ error: error.message });
    }
}



module.exports = {
    getTransactionReceipt,
    getBlock
}