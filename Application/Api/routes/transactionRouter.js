const express = require('express');
const router = express.Router();
const {checkComptableRole , verifyLogin} = require('../middlewares/RoleMiddleware');
const {createTransaction , findTransaction, updateTransaction, deleteTransaction} = require("../controllers/transactionController");


router.post('/createTransaction',verifyLogin ,createTransaction);
router.get('/getTransactions',verifyLogin, findTransaction);
router.put('/updateTransaction/:id',updateTransaction);
router.delete('/deleteTransaction/:id',deleteTransaction);




module.exports = router;