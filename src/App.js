import { Provider } from 'react-redux';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Navigation from './Component/Navigation';
// import {store} from "./Redux/store"
import store from './Redux2/store';


let persistor = persistStore(store)

function App() {

  return (<>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigation/>
    </PersistGate>
     
    </Provider>
  </>
   
  );
}

export default App;
