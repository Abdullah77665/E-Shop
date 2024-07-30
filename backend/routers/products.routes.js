import express from 'express'
const router = express.Router()
import { createproduct,
    getallproducts,
    getproductbyid,
    updateproduct,
    deleteproduct

} from "../controllers/products.controller.js"


router.route('/products/new').post(createproduct)
router.route('/products/update').put(updateproduct)
router.route('/products/all').get(getallproducts)
router.route('/products/single').get(getproductbyid)
router.route('/products/delete').delete(deleteproduct)




export default router