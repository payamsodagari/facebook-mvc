const { Feed } = require('../models/Feed')

const getHomepage = (req, res) => {
    Feed.find()
        .then(result => {
            console.log(result)
            res.render('index', { result })} 
            )
        .catch( err => console.log(err))
}

const postNewFeed = (req, res) => {
    if(req.method === 'GET') {
        res.render('feed',{ err:false})
    }
    if (req.method === 'POST') { 

        const feed = new Feed(req.body)
        feed.save()
            .then( result =>  res.redirect('/feed'))
            .catch( err => {
                console.log(err.errors)
                res.render('feed', { err :err.errors })})
        //add new post
    }
}

const showOneFeed = (req, res) => {
    Feed.findById({_id: req.params.id })
    .then(result => {
        console.log(result)
        res.render('showOne', { result })}
     )
    .catch( err => console.log(err))
}


const updateOneFeed = (req, res) => {
    if(req.method === 'GET') {
    Feed.findById({_id: req.params.id })
    .then(result => {
        console.log(result)
        res.render('editFeed', { result })}
     )
    .catch( err => console.log(err))

    }
    if (req.method === 'POST') {
        Feed.findByIdAndUpdate({_id: req.params.id })
        .then(result => {
            result.name = req.body.name
            result.message = req.body.message
            result.save()
            .then(() => 
                res.redirect('/feed'))
            .catch( err => console.log(err))
            }
        )
        .catch( err => console.log(err))

    }

}

const deleteOneFeed = (req, res) => {
    Feed.findByIdAndDelete({ _id: req.params.id })
        .then(result => res.redirect('/feed'))
        .catch( err => console.log(err))
}


module.exports = {
    getHomepage,
    postNewFeed,
    showOneFeed,
    updateOneFeed,
    deleteOneFeed
}