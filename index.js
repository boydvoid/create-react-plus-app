#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs') //fs already comes included with node.

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`
let templates = require('./Templates/templates.js')
let firebase = require('./Templates/FirebaseTemplate.js')
let actions = require('./Templates/ActionsTemplate.js')
let home = require('./Templates/HomeTemplate.js')
let reducers = require('./Templates/ReducersTemplate.js')


const installCreateReactApp = () => {
  return new Promise(resolve=>{
    shell.exec(`npm install -g create-react-app`, () => {
      console.log("Installed create-react-app".cyan)
      resolve(true)
    })
  })
}


  const createReactApp = () => {
    return new Promise(resolve=>{
      if(appName){
        shell.exec(`create-react-app ${appName}`, () => {
          console.log("Created react app, installing other dependencies.".green)
          resolve(true)
        })
      }else{
        console.log("\nNo app name was provided.".red)
        console.log("\nProvide an app name in the following format: ")
        console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
          resolve(false)
      }
    })
  }


  const createComponentsFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Components`)
  }

  const createPagesFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Components/Pages`)
  }

  const createActionsFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Actions`)
  }

  const createFirebaseFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Firebase`)
    
  }

  const createReducersFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Reducers`)
    
  }

  const createHomeFolder = () => {
    return fs.mkdirSync(`${appDirectory}/src/Components/Pages/Home`)
  }


  const cdIntoNewApp = () => {
    return new Promise(resolve=>{
      shell.exec(`cd ${appName}`, ()=>{
        console.log("cd into newapp.".cyan)
        resolve()})
    })
  }

  const cdUpLevel = () => {
    return new Promise(resolve=>{
      shell.exec(`cd ../`, ()=>{resolve()})
    })
  }

  const installPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling redux, react-router, react-router-dom, react-redux, redux-thunk, firebase, firebase-tools, and firestore\n".cyan)
      shell.exec(`npm install --save redux react-router react-redux redux-thunk react-router-dom @firebase/firestore firebase firebase-tools`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  const updateTemplates = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(templates).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          
          fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  const addFirebaseTemplate = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(firebase).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/src/Firebase/${fileName}`, firebase[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }


  const addHomeTemplate = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(home).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/src/Components/Pages/Home/${fileName}`, home[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }


  const addActionsTemplate = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(actions).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/src/Actions/${fileName}`, actions[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }


  const addReducersTemplate = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(reducers).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/src/Reducers/${fileName}`, reducers[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  const deleteAppTest = () => {
    return fs.unlinkSync(`${appDirectory}/src/App.test.js`)
  }

  const deleteAppCSS = () => {
    return fs.unlinkSync(`${appDirectory}/src/App.css`)
  }
  const deletelogo = () => {
    return fs.unlinkSync(`${appDirectory}/src/logo.svg`)
  }
  

  const run = async () => {
    let installcra = await installCreateReactApp()
    let success = await createReactApp()
    
    
    if(!installcra){
      console.log('Could not install create-react-app'.red)
      return false
    }
    
    if(!success){
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
      return false;
    }
    await cdIntoNewApp()
    await deleteAppTest()
    await deleteAppCSS()
    await deletelogo()
    await createComponentsFolder()
    await createPagesFolder()
    await createFirebaseFolder()   
    await createReducersFolder()
    await createActionsFolder()
    await createHomeFolder()
    await installPackages()
    await updateTemplates()
    await addReducersTemplate()
    await addActionsTemplate()
    await addHomeTemplate()
    await addFirebaseTemplate()
    console.log("All done")
  }
  run() 
