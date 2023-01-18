module.exports = function(value=[]){
    return (req,res,next) => {
        try {
            console.log(req.user.role)
            const newToken = value.includes(req.user.role)
            if (newToken) {
                next()
            } else {
                res.status(401).json({
                    message: 'You are not authorized to perform this action'
                })
            }

            
        } catch (error) {
            res.status(400).json({
                message: error.message,
                error 
            })
            
        }

    }
}