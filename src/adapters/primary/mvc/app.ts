import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import { get404 } from './controllers/errors'

import adminRoutes from './routes/admin'
import shopRoutes from './routes/shop'

const app = express()

app.set('view engine', 'ejs')
const viewPath = path.join(__dirname, 'views')
console.log(viewPath)
app.set('views', viewPath)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(get404)

app.listen(3000)
