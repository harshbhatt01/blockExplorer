const axios = require('axios');

const getData = async (url) => {
    try {
        const result = await axios.get(url);
        console.log({ result: result.data.result[0] });
        return result.data.result[0];
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {
    getData
}