const mongoose= require('mongoose');
const menuItemsSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
   
  taste: {
    type: String,
  required:true,
  },
  isDrink:{
type: Boolean,
default:false
  },

num_sales:{
  type:Number,
  default:0
}
});

const menuItem = mongoose.model('menuItem',menuItemsSchema);

module.exports= menuItem;