const express = require('express')
const router = express.Router()

//loggin/landing page
router.get('/', (req, res) => {
    res.render('login')
})


//dashboard get/dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


module.exports = router