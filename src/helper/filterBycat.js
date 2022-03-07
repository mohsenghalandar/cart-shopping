import getProducts from "../services/getproducts";

const bycategory = async(str)=>{
    const dd = await(getProducts());
    const resualt = dd.filter(item => item.category === str)
    return resualt ;
}

export default bycategory