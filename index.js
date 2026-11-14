import express from 'express'
import mongoose from 'mongoose';
//import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use("/api/products", productRoute)


app.listen(4000, () => {
    console.log(`Server is running on port 4000`)
});

app.get('/', async (req, res) => {
    res.send("hello from node API server......")

})


mongoose.connect("mongodb+srv://gihangreshan2_db_user:OV21p3hQYJTkJqMv@backenddb.uamxnho.mongodb.net/")
    .then(() => {
        console.log("Connected to databse")
    })
    .catch(() => {
        console.log("Connection failed")

    }) 