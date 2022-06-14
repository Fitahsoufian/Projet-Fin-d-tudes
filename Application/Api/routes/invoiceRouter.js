const express = require('express');
const router = express.Router();
const {checkComptableRole , verifyLogin} = require('../middlewares/RoleMiddleware');
const {createInvoice , findInvoice, updateInvoice, deleteInvoice, InvoiceById} = require("../controllers/InvoiceController");
const path = require('path');


router.post('/createInvoice',checkComptableRole,verifyLogin, createInvoice);
router.get('/getInvoices' ,verifyLogin, findInvoice);
router.put('/updateInvoice/:id' ,updateInvoice);
router.delete('/deleteInvoice/:id' ,deleteInvoice);
router.get('/getInvoice/:id' ,InvoiceById);




module.exports = router;