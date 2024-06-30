
import React from 'react'
import MainNavigator from './navigation/MainNavigator.js'
import { UseDispatch,Provider} from "react-redux"
import { myStore } from './redux/mystore.js'

const App = () => {
  return (
   <Provider store={myStore}>
     <MainNavigator/>

   </Provider>
     

    
   
  )
}

export default App