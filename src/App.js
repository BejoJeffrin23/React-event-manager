import {Switch,Route} from 'react-router-dom';
import Home from './container/homePageContainer';
import AddEvent from './container/addEventContainer/addEvent';
import 'antd/dist/antd.css';
function App() {
  return (
    <div>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/addEvent" component={AddEvent} />
    </Switch>
</div>
  );
}

export default App;
