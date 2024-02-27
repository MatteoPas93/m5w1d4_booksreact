import NavigationBar from "../Components/Navbar/Nav";
import MainContainer from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import AppWelcome from "../Components/Welcome/Welcome";

const Homepage = () => {
  return (
    <>
      <AppWelcome/>
      <NavigationBar />
      <MainContainer />
      <Footer />
    </>
  );
};


export default Homepage;