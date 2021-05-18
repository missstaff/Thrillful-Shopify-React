import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
      rating: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

const productsSchema = new mongoose.Schema({
    p_id: { type: String, required: true },
    p_name: { type: String, required: true },
    reviews: [reviewSchema]
    
},
    {
        timestamps: true
    }
);

const Products = mongoose.model('Products', productsSchema);

export default Products;