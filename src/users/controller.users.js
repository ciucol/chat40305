const { Router } = require('express')

const router = Router()

const users = []

router.get('/', (req, res) => {
  res.render('users.handlebars', { users })
})

module.exports = router