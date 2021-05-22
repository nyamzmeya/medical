import { Route, withRouter } from 'react-router';
import './App.css';
import HeaderContainer from './components/Header';
import profileContainer from './Profile/ProfileContainer';
import Menu from './components/Menu';
import ProfileContainer from './Profile/ProfileContainer';

function App() {
  return (
    <div className="app-wrapper">
    <HeaderContainer />
    <Menu />
    <ProfileContainer />
    </div>
  );
}

export default App;
