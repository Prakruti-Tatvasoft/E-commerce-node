import Product from "../model/product.model";

const getProducts = async (req, res) => {
    let filter = {}
    const { title, category } = req.query
    if (title) {
        filter = {
            ...filter,
            title: {
                $regex: title,
                $options: 'i'
            }
        }
    }
    if(category) {
        filter = {
            ...filter,
            category
        }
    }
    const productList = await Product.find(filter)
    res.json(productList)
}

const getProductDetail = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    res.json(product)
}


export {
    getProducts,
    getProductDetail
}