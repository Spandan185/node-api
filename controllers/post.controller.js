const models = require('../models')
function save(req,res){
    const post ={
        title: req.body.title,
        content: req.body.content,
        Imageurl: req.body.Image_url,
        categoryId:req.body.category_Id,
        userId: 1
    }
    models.post.create(post).then(result => {
res.status(201).json({
    message: "post created successfully",
    post:result
});
    }).catch(error => {
        res.status(500).json({
    message: "something went wrong",
    post:result
});


    });
}


module.exports ={
    save:save
    
}