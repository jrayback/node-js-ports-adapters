import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import { get404 } from './controllers/errors'

import adminRoutes from './routes/admin'
import shopRoutes from './routes/shop'

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(get404)

app.listen(3000)
