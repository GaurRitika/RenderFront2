import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import { store  , peristor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <PersistGate loading = {null} persistor={peristor}>
      <App />
      </PersistGate>
    </Provider>
   
  </StrictMode>
)