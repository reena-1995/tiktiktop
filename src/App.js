import './App.css';
import Router from './Router';
import {Layout} from '../src/Context/ThemeContext';

function App() {
  return (
    <div>
      <Layout>
       <Router/>
      </Layout>
     
    </div>
  );
}

export default App;
