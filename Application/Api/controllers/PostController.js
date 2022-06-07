const {Post} = require("../Config//migrations");


exports.createPost = async (req, res) => {
    try {
      
        const Posts = await Post.create({
          title: req.body.title,
          tescription: req.body.tescription,
        });
        console.log("done");
    
        res.status(201).json({
          Posts: Posts,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findPost = async (req, res) => {
    try {
    
        const Posts = await Post.findAll();
    
        if (!Posts) {
          res.status(401).json({
            message: "Posts not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            Posts:Posts
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updatePost = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const Posts = await Post.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'Post updated successfully',
            Posts:Posts
        })
    } catch (error) {
        res.send(error)
        
    }
}


exports.deletePost = async (req,res)=>{
    try {
        const id = req.params.id

        const Posts = await Post.destroy({where: {id: id}})

        res.status(200).json({
            message: 'Post deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}