import axios from "axios"
const base_url = "https://fakestoreapi.com" ;

const getProducts = async(cat) => {
    if (cat == null)
    {
        const response = await (axios.get(`${base_url}/products`));
        //console.log(response.data);
        return (response.data)
    }
    else{
        const response = await (axios.get(`https://fakestoreapi.com/products/category/${cat}`))
        //console.log(response.data);
        return (response.data)
    }

};
export default getProducts;