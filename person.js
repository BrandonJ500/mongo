const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/App', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open")
    })
    .catch((err) => {
        console.log("Error", err);
    })


    const personSchema = mongoose.Schema({
        first:String,
        last:String
    })

    personSchema.virtual("fullName").get(function(){
        return `${this.first} ${this.last}`
    })

    const Person = mongoose.model("Person", personSchema);

    