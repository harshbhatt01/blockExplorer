const axios = require('axios');


// getting the logs from address => working
const getData = async (url) => {
    try {
        const result = await axios.get(url);
        console.log({ result: result.data.result[0] });
        return result.data.result[0];
    } catch (error) {
        console.log({ error: error.message });
    }
}


// getting the logs from block number => not working
const getBlock = async (url) => {
    try {
        const result = await axios.get(url);
        console.log({ result: result.data.result });
        return result.data.result;
    } catch (error) {
        console.log({ error: error.message });
    }
}

/* getting the logs from block number => not working
const getContractAddress = async (url) => {
    try {
        const result = await axios.get(url);
        console.log({ result: result.data.result });
        return result.data.result;
    } catch (error) {
        console.log({ error: error.message });
    }
}
*/

module.exports = {
    getData, getBlock
}