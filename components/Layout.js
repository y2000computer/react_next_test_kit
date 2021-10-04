import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => (
  
  <div>
    <Header />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>


);

export default Layout;

