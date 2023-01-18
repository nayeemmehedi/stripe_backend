const { Student } = require("../model/bangla.model")

module.exports.BanglaPost = async (req,res,next) => {

    try {
        const value = await Student.create(req.body)
        res.status(200).json({
            status:200,
            message :value
        })
        
    } catch (error) {
        res.status(500).json({
            status:500,
            message :error
        })
        
    }

}

module.exports.BanglaGet = async (req,res,next) => {

    try {
        const value = await Student.find({})
        res.status(200).json({
            status:200,
            message :value
        })
        
    } catch (error) {
        res.status(500).json({
            status:500,
            message :error
        })
        
    }

}