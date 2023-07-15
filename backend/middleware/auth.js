const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
    try{
        let temp = req.header('Authorization')
        const token = temp ?  temp.slice(7,temp.length) : ''
        if(!token) return res.status(400).json({message: 'Invalid token'});

        jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
            if(err){
                 return res.status(400).json({message: 'Invalid token'});
            }
            req.user = user
            next()
        })
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

module.exports = authUser