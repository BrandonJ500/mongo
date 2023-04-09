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


const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Cycling Jersey", price: 28.50, color:"red", catagories: ["cycling"], size: "XS"});

bike.save()
    .then((data) => {
        console.log("It worked");
        console.log(data);
    })
    .catch((err) => {
        console.log("Failed")
        console.log(err)
    })

// Product.findOneAndUpdate({name: "Tire Pump"}, {price: -19.99}, {new: true, runValidators: true})
// .then(data=>{
//     console.log("it worked");
//     console.log(data);
// })
// .catch(err=> {
//     console.log("didn't work");
//     console.log(err)
// })