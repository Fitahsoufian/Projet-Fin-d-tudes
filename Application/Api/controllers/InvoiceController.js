const {Invoice} = require("../Config//migrations");


exports.createInvoice = async (req, res) => {
    try {
      
        const invoices = await Invoice.create({
          number: req.body.number,
          customer_name : req.body.customer_name,
          amount: req.body.amount,
          Statement: req.body.Statement,
          UserId:req.user.id ,
        });
        console.log("done");
    
        res.status(201).json({
          invoices: invoices,
        });
      } catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    };


exports.findInvoice = async (req, res) => {
    try {
        const invoices = await Invoice.findAll(
    
          {where : {UserId: req.user.id}}
          );
    
        if (!invoices) {
          res.status(401).json({
            message: "invoices not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            invoices:invoices
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.InvoiceById = async (req, res) => {
  try {
      const invoice = await Invoice.findByPk(req.params.id);

      res.json(invoice);
    } catch (error) {
      res.status(400).send(error);
    }
};

exports.updateInvoice = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const invoices = await Invoice.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'invoice updated successfully',
            invoices:invoices
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deleteInvoice = async (req,res)=>{
    try {
        const id = req.params.id

        const invoices = await Invoice.destroy({where: {id: id}})

        res.status(200).json({
            message: 'invoice deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}