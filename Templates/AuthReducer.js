module.exports = `//import the types you want to use 
import { YES_AUTH } from '../Actions/Types'

//set the initial auth state of the app
const initialState = {
    authenticated: false
}

//the reducer, it set the state from the action when it is called
export default function(state = initialState, action) {
    switch(action.type) { 
        case YES_AUTH: 
            return {
                ...state,
                authenticated: action.payload
            }
        default: 
            return state;
    }
}`