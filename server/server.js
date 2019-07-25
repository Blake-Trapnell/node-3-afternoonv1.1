require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')
const {PORT, CONNECTION_STRING} = process.env


app.use(express.json())

app.get('/api/products', ctrl.readProducts)
app.get('/api/products/:id', ctrl.readProduct)
app.put('/api/products/:id', ctrl.updateProduct)
app.delete('/api/products/:id',ctrl.deleteProduct)
app.post('/api/products', ctrl.createProduct)


massive(CONNECTION_STRING)
.then(db=> {
    app.set('db',db)
    app.listen(PORT, ()=> console.log(`living it up on ${PORT}`))
}
).catch(err=> {alert(err)})