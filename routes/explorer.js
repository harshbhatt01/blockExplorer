const { Router } = require('express');
const router = Router();
const { getTransactionReceipt, getBlock } = require('../controllers/explorer');

router.get('/fetch/:TxHash', async (req, res) => {
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

router.get('/fetch/:block', async (req, res) => {
    try {
        console.log('here');
        const { block } = req.params;
        console.log({ block });
        const result = await getBlock(block);
        console.log({ result });
        return res.status(200).json({ result });
    } catch (error) {
        console.log({ error: error.message });
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
