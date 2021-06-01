import Mongoose from 'mongoose';
const productSchema = Mongoose.Schema({
    identification: { type: String, required: true },
    item: { type: String,  required: true},
    reviews:[{
        text: String,
        ratings: String,
        username: String
    }],
        timestamps: {
            type: Date,
            default: Date.now
        }
}
);

export default Mongoose.model('Products', productSchema);
