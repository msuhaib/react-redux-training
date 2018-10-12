import {
    GET_API_MODULE
   } from './types'


export const getApiModule=(searchParam)=>dispatch=>{
   const url='http://192.168.0.110:8000/api/recSearch?param='+encodeURIComponent(JSON.stringify(searchParam))
   fetch(url,{method:'POST'})
   .then(res=>res.json())
   .then(res=>{
       dispatch({
           type:GET_API_MODULE,
           payload:res.results
        })
   })

}