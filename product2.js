const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/App', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open")
    })
    .catch((err) => {
        console.log("Error", err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price must be positive ya dodo" ]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    catagories: [String],
    qty: {
        online: {
            type:Number,
            default:0
        },
        inStore: {
            type:Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }

});

productSchema.methods.greet = function(){
    console.log("Hellohihello");
}

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
   const foundProduct = await Product.findOne({name: "bike helmet"})
   foundProduct.greet();
}
   
findProduct()

