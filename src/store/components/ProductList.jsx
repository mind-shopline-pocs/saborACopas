import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../ui/components/ProductCard'
import { Favorites } from '../../ui/components/Favorites';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { CervezasAndTequilas } from '../../ui/components/CervezasAndTequilas';

export const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const buttonState = "See More";
    const productsStorage = JSON.parse(localStorage.getItem('products'));
    const [searchText2, setSearchText2] = useState("")

    const navigate = useNavigate()

    const location = useLocation();
    const [searchOption, setSearchOption] = useState("");

    const {q=""} = queryString.parse(location.search);

    const [formulario, setFormulario] = useState({
        searchText2: ''
       })
       const {searchText,onInputChange , onResetForm} = useForm({
        searchText: q
      })
      

      const [dataFromStorage, setDataFromStorage] = useState();
      const [isAsc, setIsAsc] = useState(true)
      const [isAscName, setIsAscName] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://arkusnexustest.myshopline.com/admin/openapi/v20240601/products/products.json', {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJhcHBLZXkiOiI3MWNmMDJjNTE1NjRhMjJhM2IxOTJlMzZkNTg5ZmEzZTIwMzU5YjljIiwic2VsbGVySWQiOiIyMDE4NTg1NzQzIiwic3RvcmVJZCI6IjE3MDcxNzY3MTIwMjgiLCJ2ZXJzaW9uIjoiVjIiLCJkb21haW4iOiJodHRwczovL3NsLW9wZW4tdXMubXlzaG9wbGluZS5jb20iLCJ0aW1lc3RhbXAiOjE3MDcxODI2Mjk4ODIsImlzcyI6Inlzb3VsIiwiZXhwIjoxODAxNzkwNjI5fQ.Je8Z8w7yuo31XKE2X2DV7VfLCpmMvYR2ONiW5-WXCX6P9puufWbAdBx39B3Ka4uS_nWAL7_hBNWMKvsH8kfVdA',
                    },
                });
                const data = await response.json();
                setAllProducts(data.products);
                //Grabando en el local stoage para no hacer peticiones a la API

                const productsStorage = data.products.map(product => {
                    return  {
                        id : product.id,
                        title : product.title,
                        handle : product.handle,
                        image : product.image,
                        price : product.variants[0].price,
                        popularity : 2
                    }
                })
                
                if(localStorage.getItem('products') !== null) {localStorage.setItem('products', "")}
                if (localStorage.getItem('products') === null || localStorage.getItem('products') === ""){
                    localStorage.setItem('products', JSON.stringify(productsStorage));
                }
            } catch (error) {
                console.error('Error fetching products:');
            }
        };

        fetchData();
    }, []); 



    const searcher = (e) => {
        setSearchText2(e.target.value)
        console.log(e.target.value);
    }
    const orderAsc = () => {      
        setIsAsc(!isAsc)
        console.log(isAsc);
  
      }
    
    let result = []

    
    if(!searchText2){
        result = allProducts
       
    }else{
      result=allProducts?.filter((item)=>item.title.toLowerCase().includes(searchText2.toLowerCase())) 
    }
    
    if(result?.length > 0) {
      if(isAsc === true){
        result = result.sort(((a, b) => a?.variants[0]?.price - b.variants[0]?.price))
      }else if(isAsc === false){
        result = result.sort(((a, b) => a.variants[0]?.price - b.variants[0]?.price)).reverse()
      }
    }
   
    console.log(result);
      
      const orderDesc = () => {
        console.log("DESC");
        // const numbers = dataFromStorage.map((item)=>parseInt(item.price))
        // console.log(numbers);
        // result=dataFromStorage.sort(((a, b) => a.price - b.price)).reverse()
        setIsAsc(false)
        console.log(isAsc);
        
      }
      
    
  return (
    <>
    
    <CervezasAndTequilas/>

    <div className="container">
        <div className="row mt-3">
            <div className="col-10 d-flex justify-content-center">
                <input 
                 type="text"
                 placeholder="Find your product"
                 className="form-control"
                 autoComplete='off'
                 value={searchText2}
                 onChange={searcher}
               />
            </div>
            <div className="col-2 d-flex justify-content-center">
                <button
                 className="btn btn-outline-info mt-2 d-flex justify-content-center align-items-center"
                 onClick={()=> orderAsc(!isAsc)}
               >
               
                 Filter by price
               </button>
            </div>
               
               

        </div>
    </div>

    <Favorites/>

        {/* {
            (!result?.length >0) && <div className="alert alert-danger mt-3 text-center"  
            style={{
              height: '100px',
            }}
            role="alert">
                No results Found.</div>
        } */}
            
        {/* <div className='productListBackGround'>
            <h1 className='p-3 text-center title'>Collections</h1>
            <div className='container'>
                <div className='row d-flex justify-content-around'>
                {result.map(product => (
                    <ProductCard props={product} buttonState= {buttonState} key={product.id}/>                       
                ))}
                </div>
               
            </div>  
        </div> */}
    
    </>
  )
}
