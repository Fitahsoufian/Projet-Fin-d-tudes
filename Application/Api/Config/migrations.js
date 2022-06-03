const sequelize = require("./Dbconfig");
const User = require("../models/User");
const Invoice = require("../models/Invoice");
const Post = require("../models/Post")
const Transaction = require("../models/Transaction")





Invoice.belongsTo(User);
User.hasMany(Invoice);
Transaction.belongsTo(User);
User.hasMany(Transaction);
Post.belongsTo(User);
User.hasMany(Post);


sequelize.sync({force : true},() =>{console.log('connected');}).then(()=>{
    console.log("Migration Succeed");
}).catch((err)=>{
    console.log(err);
})

module.exports = {
    Invoice,
    User,
    Transaction,
    Post,   
}