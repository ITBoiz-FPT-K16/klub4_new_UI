const fs = require('fs');
const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: 'ritikjha', 
    api_key: '993393352375233', 
    api_secret: 'oC9ZXjdWVUH8KYnQC50RXZC5ABo',
    secure: true
})
const uploadImages = async (req, res) => {
  try {
    const {path} = req.body
    let files = Object.values(req.files).flat()
    let images = []
    for(const file of files) {
        const url = await uploadToCloudinary(file,path)
        images.push(url)
        removeTmp(file.tempFilePath)
    }
    res.json(images)
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
    console.log(process.env.CLOUD_API_KEY)
  }
};
const listImages = async (req, res) =>{
    const {path,sort,max} = req.body
    cloudinary.v2.search
    .expression(`${path}`)
    // .sort("public_id",`${sort}`)
    .max_results(`${max}`)
    .execute()
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({ message: err.message });
    })
}
const uploadToCloudinary = async (file, path) => {
    return new Promise((resolve)=>{
        cloudinary.v2.uploader.upload(
            file.tempFilePath,
            {
                folder:path
            },
            (err,res)=>{
                if(err){
                    removeTmp(file.tempFilePath);
                    return
                    return res.status(400).json({ message: 'Upload Image failed' });
                }
                resolve({
                    url: res.secure_url
                })
            }
        )
    })
}

const removeTmp = (path) => {
    fs.unlink(path,(err)=>{
        if(err) throw err;
    })
}
module.exports = {uploadImages,listImages};
