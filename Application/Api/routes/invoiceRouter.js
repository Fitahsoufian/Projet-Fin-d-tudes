const express = require('express');
const router = express.Router();
const {createInvoice , findInvoice, updateInvoice, deleteInvoice} = require("../controllers/InvoiceController");
const path = require('path');


router.post('/createInvoice', createInvoice);
router.get('/getInvoices', findInvoice);
router.put('/updateInvoice/:id',updateInvoice);
router.delete('/deleteInvoice/:id',deleteInvoice);




module.exports = router;