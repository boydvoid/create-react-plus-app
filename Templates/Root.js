module.exports = `import { combineReducers } from 'redux'

//import your reducers
import authReducer from './AuthReducer'

export default combineReducers({
    //to add a new state, add it here plus its reducer
    //combine your reducers here EX. auth: authReducer
    authentication: authReducer
});`