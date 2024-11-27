import { Outlet } from "react-router-dom";
import Footer from "./components/layout/footer.jsx";
import Header from "./components/layout/header.jsx";

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />  
    </>
  );
}

export default App
