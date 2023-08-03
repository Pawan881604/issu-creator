const issu = require("../module/issuModle")

//-- get all data and prinnt 
exports.home = async (req, res, next) => {
    try {
        // find all data and print
        const Issu = await issu.find()
       res.render('index',{Issu})
   
    }
    catch (err) {
        res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
}

//--------- Create Data
exports.createIssu =  async(req,res,next)=>{
    try{
        // create data
       const Issu = await issu.create(req.body)
       res.status(201).redirect('/')
    }
    catch(err){
        res.status(500).json({
            success: true,
            message: "internal server error"
        })
    }
}

// Update get form Data
exports.updateIssue= async(req,res,next)=>{
    try{
        const { id } = req.params;
        // find and print data
       const Issu = await issu.findById(id);
       res.render('assets/indexUpdateForm',{Issu})
    }
    catch(err){
        console.log(err)
    }
}

// Update data
exports.UpdateIssuData = async(req,res,next)=>{
    try{
        const{id} = req.body
        //find and update data
        const Issu = await issu.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true,
        })
         res.status(201).redirect('/')
    }
    catch(err){
        console.log(err)
    }
}

// Delete Issu list
exports.deleteIssu = async(req,res,next)=>{
    try{
        // find and delete
        const Issu = await issu.findByIdAndDelete(req.params.id);
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}