import {
GET_API_MODULE
   } from '../actions/types'


   const initialState={
    recordList:[]
    }

export default function(state = initialState, action){
    switch(action.type){
        case GET_API_MODULE:
        return {
            ...state,
            recordList:action.payload
        }

        default:
        return state
    }
}