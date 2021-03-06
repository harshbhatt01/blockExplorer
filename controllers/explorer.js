const web3 = require('../utils/web3');
const axios = require('../utils/axios');



const getTransactionReceipt = async (txHash) => {
    try {
        const receipt = await web3.getTransactionReceipt(txHash);
        console.log({ receipt });
        return receipt;
    } catch (error) {
        console.log({ error: error.message });
    }
}


const getAddress = async (address) => {
    try {
        const result = await axios.getBlock(
            `https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.ETHERSCAN_API}`
        );
        return result;
    } catch (error) {
        console.log({ error: error.message });
    }
}


const getBlock = async (block) => {
    try {
        const result = await axios.getBlock(
            `https://api-rinkeby.etherscan.io/api?module=block&action=getblockreward&blockno=${block}&apikey=${process.env.ETHERSCAN_API}`
        );
    return result;
    } catch (error) {
        console.log({ error: error.message });
    }
}

/*
const getContractAddress = async (address) => {
    try {
        const result = await axios.getData(
            `https://api-rinkeby.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${address}&apikey=${process.env.ETHERSCAN_API}`
        );
    return result;
    } catch (error) {
        console.log({ error: error.message });
    }
}*/


const getBalance = async (balance) => {
    try {
        const result = await web3.getBalance(balance);
        return result;
    } catch (error) {
        console.log({ error: error.message });
    }
}


module.exports = {
    getTransactionReceipt,
    getBlock,
    getAddress,
    getBalance
}