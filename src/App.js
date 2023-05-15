// import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Bollywood from './Bollywood';
// import Routerp from './Routerp';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegisterForm />
      <Bollywood />

      <Routes>
     
        <Route exact path="/" component={Bollywood} />

      </Routes>

    </div>
  );
}

export default App;
