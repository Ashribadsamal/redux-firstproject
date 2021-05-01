import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import CakeShop from './component/CakeShop';
import store from './component/redux/cakes/Store';
import HooksRedux from './component/HooksRedux';
import IceCreamShop from './component/IceCreamShop';
import NewCakecontainer from './component/NewCakecontainer';
import Itemcontainer from './component/redux/Itemcontainer';

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop/>
        <IceCreamShop/>
        <HooksRedux/>
        <NewCakecontainer/>
        <Itemcontainer/>
        <Itemcontainer cake/>
      </div>
    </Provider>
  );
}

export default App;
