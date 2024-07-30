import {product} from "../model/model.product.js"


export const createproduct = async (req, res, next) => {
    const product = req.body

    // await product.create(product)
    
    try {
        res.json({
            message: "products created ",
        },
        )
    } catch (error) {
     console.log(error);
    }
}
export const getallproducts = (req, res, next) => {
    res.json({
        message: "getallproducts"

    },
    )
}
export const getproductbyid = (req, res, next) => {
    res.json({
        message: "getproductbyid"

    },
    )
}
export const updateproduct = (req, res, next) => {
    res.json({
        message: "updateproduct"

    },
    )
}
export const deleteproduct = (req, res, next) => {
    res.json({
        message: "deleteproduct"

    },
    )
}
