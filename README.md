# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


e-cart
------
1.npm create vite@latest e-cart -- --template react
2.links to style
3.package install bootstrap
4.components
5.setting the path--react router dom
   app component in to browser route 
   routes
   route tag for component
   setting path and element
         <!-- <Route path='/view/:id' element={<View/>}/> -->
    {/* path param to open single product and to identify that specific product */}

      <Route path='/*' element={<Navigate to={'/'}/>}/>
    {/* for not valid url */}
 6.redux and tool kit install

 only one Api call to display product on home page.
   Api call on Home page
   Array of products from object
   Taking the product key
  
 7.craeting store file on redux folder
    import configure store
     -configure store is from redux Toolkit.
     -used to create reduxStore

    reducer key:to store multiple reducer --first it is empty

    exporting the store  

 8.providing(<provider>) the app component by store key with stor name to access all components:cartstore  
    in the store we can only do update the state using reducer thus we need a slice file

9.creating slices 
the data to the slices will get from the Api.the action doesnt work asynchronous.action is synchronous

CraeteAsyncThunk.
a function that accept redux action type string and a callback function that should return a promise. 
async await only do in function swhich return promise.
success response is in data key

extra reducer used to get the asncthunk o/p
there is a builder key

3 types of response

fullfilled
reject
loading

creating slice by craeteslice method
 const product slice=craeteslice(){
   name:""
   initialstate:{  object
      allproducts:[]
      loading:flase
      error:''
   }

   reducers:{

   }
 }
   
10.creating an asyn function const fetchproducts=asyncthunk(products/fetchproducts,async()=> {  second arguiment will return a promise
  const response=await axios.get(api url)--api call

  response.data.product
})

10.creating extrareducer
extrreducer:(builder)=>{
    builder.addcase(asyncthunk function name.pending,(state)=>{
      no action
      state.loading=true
    }),
     builder.addcase(asyncthunk function name.fullfilled,(state,actio)=>{
      
      state.loading=false
      state.allproducts=action.payload

     })
     builder.addcase(asyncthunk function name.rejected,(state,actio)=>{
      
      state.loading=false
      state.allproducts=[]
      state.error='oooookjg'
     })
    
}

11.export reducer

default slice.reducer

12.import product slice on store
13.update the reducer
productreducer:productslice

now product reducer key on redux dev tool

14.next on home page

allproduct,loading,error destructuring by useselector hook--state management library

selecting the state
useselector(state=>state.whichreducer is product takespalce)

15.dispatch action by use dispath()

  const dispatch=useDispatch()

16.then useeffect call the dispatch   

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  17.display products on home 

  cards

  {if there is loading
  {
    loading
  }:
  allproducts?.length>0&&allproducts.map(product,index)(


    col key={index}
  cards 
  )
  
 

  {

  }
  }
then image=>src=product?key
title=product?key
etc

18.when we click on view more button it should directed to view page which has that id

we need the details of the product which has that id
id will get from the pathparameter

19.  const {id}=useParams() -destructuring
getting the parameter by useparam

we get  id on object
find the product which has that id
