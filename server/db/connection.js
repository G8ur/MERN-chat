const mongoose = require('mongoose')

const url = `mongodb+srv://dharmendragaur1970:noob@cluster0.3ju3mot.mongodb.net/ChatApp?retryWrites=true&w=majority`;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifieTopology: true
}).then(() =>console.log("Connected to db")).catch((e) =>console.log("err",e))
