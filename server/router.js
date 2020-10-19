const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.send('Server is UP and running.')
})

module.exports = router