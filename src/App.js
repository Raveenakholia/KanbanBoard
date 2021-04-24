import ParentContainer from './Components/Containers/ParentContainer';
import Login from './Components/Login/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    
     <BrowserRouter>
       <Switch>
          <Route exact path="/"><Login/></Route>
          <Route  path="/Dashboard"><ParentContainer/></Route>
       </Switch>
      </BrowserRouter>
    
  );
}

export default App;
