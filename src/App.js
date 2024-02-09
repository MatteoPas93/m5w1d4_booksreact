import './App.css';
import NavigationBar from './Components/Navbar/Nav';
import MainContainer from './Components/Main/Main';
import AppWelcome from './Components/Welcome/Welcome';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <AppWelcome/>
    <NavigationBar/>
    <MainContainer/>
    <Footer/>
   </>
  );
}

export default App;
