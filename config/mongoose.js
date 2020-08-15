const mongoose = require('mongoose')

const db = 'mongodb+srv://payami:payam123@cluster0.cjpih.mongodb.net/facenode?retryWrites=true&w=majority'
mongoose.set('useFindAndModify', false);

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then ( () => console.log('connect to db'))
.catch( err => console.log(err))