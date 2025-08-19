const Imagekit = require("imagekit")

const imagekit = new Imagekit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey :  process.env.IMAGEKIT_PRIVET_KEY,
    urlEndpoint :  process.env.IMAGEKIT_URL_ENDPOINT,
});


async function uploadFile(file, fileName) {

const response = await imagekit.upload({
  file: file.toString('base64'),  // convert buffer to base64
  fileName: fileName,
  folder: "social-media",
});
        
        return response
        
    }
module.exports = uploadFile; 