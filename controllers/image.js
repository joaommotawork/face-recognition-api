const Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: 'be1bec0c8fbd4b3eb3f9de7b463abc3f'
})

const handleApiCall = () => (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => res.status(400).json('Unable to Work With API'))
}

const handleImage = (db) => (req, res) => {
    const { id } = req.body
    db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then((entries) => {
            res.json(entries[0])
        })
        .catch((err) => res.status(400).json('Unable to Get Entries!'))
}

module.exports = {
    handleImage,
    handleApiCall
}
