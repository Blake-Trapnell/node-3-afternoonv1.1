module.exports = {
    createProduct: (req,res) => {
        const db = req.app.get('db')
        const {name, description, price, img_url} = req.body
        db.create_product([name,description,price,img_url])
        .then(results=> {
            res.status(200).send(results)
        })
    },
    readProducts: async (req,res) => {
        // console.log('hit')
        const db = req.app.get('db')
        const productList = await db.read_products()
        res.status(200).send(productList)
    },
    readProduct: async (req,res) => {
        const db = req.app.get('db')
        const product = await db.read_product([req.params.id])
        res.status(200).send(product)
    },
    updateProduct: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name,description,price,img_url} = req.body
        const update = await db.update_product([description,price,img_url,name,id])
        res.status(200).send(update)
    },
    deleteProduct: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const eradicate = await db.delete_product([id])
        res.status(200).send(eradicate)
    }

}