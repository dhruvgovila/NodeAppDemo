const express = require('express')
const hbs = require('hbs')
var app = express()

const port = process.env.PORT || 3000


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear()
})

app.get('/', (request, response) => {
    response.render('home.hbs',{
        titleUserName: request.query.name,
        bodyUserName: request.query.name,
        bodyEmail: request.query.email
    })
})

app.get('/about', (request, response) => {
    response.render('about.hbs',{
        pageName: "About HBS",
        pageNameParagraph: "About Para HBS"
    })
})

app.listen(port, () => {
    console.log(`Server Has Started at Port: ${port}`)
})