const {Transaction} = require("../Config//migrations");


exports.createTransaction = async (req, res) => {
    try {
      
        const transactions = await Transaction.create({
          journal: req.body.journal,
          entitled : req.body.entitled,
          debit: req.body.debit,
          credit: req.body.credit,
          UserId:req.user.id ,
        });
        console.log("done");
    
        res.status(201).json({
          transactions: transactions,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findTransaction = async (req, res) => {
    try {
    
        const transactions = await Transaction.findAll(
          {where : {UserId: req.user.id}}
        );
    
        if (!transactions) {
          res.status(401).json({
            message: "transactions not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            transactions:transactions
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updateTransaction = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const transactions = await Transaction.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'transaction updated successfully',
            transactions:transactions
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deleteTransaction = async (req,res)=>{
    try {
        const id = req.params.id

        const transactions = await Transaction.destroy({where: {id: id}})

        res.status(200).json({
            message: 'transaction deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}