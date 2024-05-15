import React from 'react';
import Container from './Components/Container';
import "././css/App.css"
import { Provider } from 'react-redux';
import store from './redux/store';
function App(){

  return (
    <Provider store={store}>
    <BrowserRouter>
  <Routes>
  <Route path="/dashboard" element={ <Container />}/>
  </Routes>
  </BrowserRouter>
 </Provider>
  )
}

export default App;
