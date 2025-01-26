const fs = require('fs');
const deleteImage = (imagePath )=>{
    // Relative path from the current working directory (server/)
fs.unlink(imagePath, (err) => {
if (err) {
    console.error('Error deleting file:', err);
    throw new Error(err);
}
console.log('File deleted successfully');
});
}
module.exports={
    deleteImage
}