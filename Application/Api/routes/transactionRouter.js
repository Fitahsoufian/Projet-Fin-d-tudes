const express = require('express');
const router = express.Router();
const {createTransaction , findTransaction, updateTransaction, deleteTransaction} = require("../controllers/transactionController");


router.post('/createTransaction', createTransaction);
router.get('/getTransactions', findTransaction);
router.put('/updateTransaction/:id',updateTransaction);
router.delete('/deleteTransaction/:id',deleteTransaction);




module.exports = router;