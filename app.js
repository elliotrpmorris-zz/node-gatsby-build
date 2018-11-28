var shell = require('shelljs');
const express = require('express')
const app = express()
    app.get('/webhooks', function (req, res) {
    res.send('OK')
    shell.cd('/Users/elliotm/Dev-Local/Projects/gatsby-wordpress-site')
    shell.exec('gatsby build')
})
app.listen(3000, function () {
    console.log('Listening for webhooks on port 3000')
})   