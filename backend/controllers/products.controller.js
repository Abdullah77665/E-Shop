
export const createproduct = (req, res, next) => {
    console.log(req.body);
    try {
        res.json({
            message: "create  product"

        },
        )
    } catch (error) {
        next(error)
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
