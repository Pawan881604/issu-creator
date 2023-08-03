const issuModle = require("../module/issuModle");
const projec = require('../module/projectModle')


// print data
exports.project = async (req, res, next) => {
    try {
        const Issu = await issuModle.findById(req.params.id);
        const { id } = req.params;
       

        const Project = await projec.find();
        // filter item in project  modale
        const IssuProject = Project.filter((item) => {
            return item.issu.toString() === id;
        });

        res.render('project', { Issu, IssuProject });
    }
    catch (err) {
        console.log(err)
    }
}

// create project
exports.createProject = async (req, res, next) => {
    try {

        const Project = await projec.create(req.body)
        const id =Project.issu.toString()
       res.redirect(`/project/${id}`)
    }
    catch (err) {
        console.log(err)
    }
}

// get update form print data

exports.UpdateForm = async (req,res)=>{
    try{
        //find and print
        const Project = await projec.findById(req.params.id)
      res.render('assets/projectUpdateForm',{Project})
    }
    catch(err){
        console.log(err)
    }
}

// update form data

exports.UpdateFormProject = async (req,res)=>{
    try{
        const {id} = req.body
        //find and update data
        const Project = await projec.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true,
        });
      res.redirect(`/project/${req.body.issu}`)
    }
    catch(err){
        console.log(err)
    }
}

// project delete 
exports.projectDelete= async (req,res)=>{
    try{
        // find by id and delete
        const Project = await projec.findByIdAndDelete(req.params.id)
        res.redirect(`/project/${Project.issu}`)
    }
    catch(err){
        console.log(err)
    }
}

