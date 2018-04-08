module.exports = `import * as firebase from 'firebase';

// Initialize Firebase
export  const config = {
  //set the config here 
  
  };
 
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };`