const { Router } = require('express');
const router = Router();
const { getTransactionReceipt, getBlock, getAddress, getCode, getContractAddress } = require('../controllers/explorer');
const { getBalance } = require('../utils/web3');


router.get('/txn/:TxHash', async (req, res) => {
    try {
        const { TxHash } = req.params;
        const result = await getTransactionReceipt(TxHash);
        console.log({ result });
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

router.get('/block/:block', async (req, res) => {
    try {
        const { block } = req.params;
        const result = await getBlock(block);
        console.log({ result});
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

router.get('/address/:address', async (req, res) => {
    try {
        const { address } = req.params;
        const result = await getAddress(address);
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

/*router.get('/contractaddress/:contractaddress', async (req, res) => {
    try {
        const { address } = req.params;
        const result = await getContractAddress(address);
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});*/

router.get('/balance/:balance', async (req, res) => {
    try {
        const { balance } = req.params;
        const result = await getBalance(balance);
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
