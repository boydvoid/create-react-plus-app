 create-react-plus-app
=========

This package will install and layout a full react, redux, react-router-dom, firebase/firestore, bootstrap 4 project. I created this module because I wanted to automate my process when I create a react project. 

## Installation

  `npm install -g create-react-plus-app`

## How-To

Simply `create-react-plus-app myapp`, just like create-react-app. This will setup a full create-react-app project but with the other dependencies included, and a new file structure. 


## MAKE SURE YOU 

Right after install in Firebase.js make sure you add your firebase config. Or else the app won't run.

## The New File Structure

++--src<br />
-----|<br />
-----|--Actions---------------<br />
-----|---------Types.js---authenticateAction.js<br />
-----|---Components<br />
-----|--------Pages<br />
-----|----------- Home<br />
-----|----------------Home.js<br />
-----|---Firebase<br />
-----|------- Firebase.js<br />
-----|---Reducers-----------------<br />
-----|------AuthReducer.js----Root.js<br />
-----|---App.js<br />
-----|---index.css<br />
-----|---index.js<br />
-----|---registerServiceWorker.js<br />
-----|--store.js<br />

You can find out what the new files contain below.
     


## What This Does Step By Step

1. Installs create-react-app for you
2. Deletes unnecessary files App.css, App.test.js, Logo.svg
3. Creates new folders
4. Installs packages
5. Adds new files

## The new folders and files

You can obviously edit or delete these to your liking. 

    Actions Folder: A place to hold your redux actions. 

    Types.js: I separate the action types into a Types.js file. 

    authenticateAction.js: This is the firebase authenticate action. If a user is logged in, it updates authenticate to true. 
________________________________________________________________________________________________________________________________
    Components: Where I put the um...components. 

    Pages: I organize components by their "page". For example, if there was a component that only goes on the homepage it would go in the Home folder. 
    
    Home.js: This is the base component for the homepage. 
________________________________________________________________________________________________________________________________

    Firebase: This is where the Firebase config is. 

    Firebase.js: Firebase config, make sure you add your apps config here. 
________________________________________________________________________________________________________________________________

    Reducers: the redux reducers.

    AuthReducer.js: the AuthReducer

    Root.js: Where the combineReducers lives. Sets the initial state.
________________________________________________________________________________________________________________________________

    App.js: Deleted the content and on componentWillMount() I checked to see if there was a user. Set up Routes.

    Index.css: Unchanged from create-react-app.

    Index.js: Wrapped the <App /> component in a <Provider store={store}>

    registerServiceWorker.js: Yup.

    store.js: Created the store.
________________________________________________________________________________________________________________________________






