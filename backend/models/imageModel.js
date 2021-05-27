import mongoose from "mongoose"
  
const imageSchema =  mongoose.Schema({  
    img: String,
    text:String,
    date: {type: Date, default: Date.now()}
    
    // default: "http://res.cloudinary.com/dcq6f8bln/image/upload/v1614296936/efjvvu9j7rcbkgivopft.jpg"
}); 
  
export default mongoose.model('Image', imageSchema)
