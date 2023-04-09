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
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    catagories: [String],

});


const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Mountain Bike", price: 19.50, color:"red", catagories: [] });

bike.save()
    .then((data) => {
        console.log("It worked");
        console.log(data);
    })
    .catch((err) => {
        console.log("Failed")
        console.log(err)
    })

