import mongoose from "mongoose";

const URI = 'mongodb+srv://volosatovdaniil:0959150528@cluster0.bzu4cqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(e);
});
