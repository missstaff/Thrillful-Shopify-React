import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Products from '../models/userProduct.js';
import { isAuth } from '../utils.js';


const productRouter = express.Router();

/* don't thik we need*/
// productRouter.get('/seed',
//    //not sure we need a seed
// );

productRouter.post('/products',
   //posts product Id and name to database
   //derive id and name from shop context?
  );

  productRouter.post('/reviews',
   //posts product Id and name to database
  //link id and name with review here
  );

productRouter.get(
    '/:id',
   //get one review
  );


productRouter.get(
   //get all reviews
  );

productRouter.delete(
    '/:id',
    //delete a review
    
  );
productRouter.put(
    '/:id',
    //update pr edit a review
  );

export default productRouter