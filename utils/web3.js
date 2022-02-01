const Web3 = require('web3');
const ethers = require('ethers');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/a4360310c20543d8b59806a0d3054d21'));

const getTransactionReceipt = async (txHash) => {
    try {
        const receipt = await web3.eth.getTransactionReceipt(txHash);
        return receipt;
    } catch (error) {
        console.log({ error: error.message });
    }
}
const getBlock = async (block) => {
     try {
         const count = await web3.eth.getBlock(block);
         return count;
     } catch (error) {
         console.log({ error: error.message });
         
     }
}

const getAddress = async () => {
    try {
        const result = await web3.eth.getAddress(address);
        console.log({ result });
        return result;
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {
    getTransactionReceipt, 
    getBlock,
    getAddress
}