const express = require('express')
const router = express.Router()

//loggin/landing page
router.get('/', (req, res) => {
    res.send('loggin my guy')
})


//dashboard get/dashboard
router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})


module.exports = router