const cloudinary = require("../configs/cloudinayConfig");
const uploadToCloudinary = async (path)=>{
    try {
        // Upload the file to Cloudinary "./"  const imagePath = "./"+ blogDetails.imagePath;

        const result = await cloudinary.uploader.upload(path);
        console.log("image uploaded to cloudinay ",result.secure_url);
        return result.secure_url;
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
}
const removeFromCloudinary = async (path)=>{
    try {
        const publicId = path.split('/').pop().split('.')[0];
        cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
        console.error('Error deleting image:', error);
        } else {
        console.log('Image deleted successfully:', result);
        }});
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
}
module.exports={
    uploadToCloudinary,
    removeFromCloudinary
}