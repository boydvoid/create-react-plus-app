module.exports = `//IMPORT YOUR TYPES 
import { YES_AUTH } from './Types'

//this action authenticates the app 
export const authenticate = () => dispatch =>  {
    //thunk allows us to call dispatch
    dispatch({
        type: YES_AUTH,
        payload: true 
    }) 
}`