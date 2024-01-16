import '../CSS/Notfound.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import error from '../assets/eror-404.jpg';

const Notfound = () => {
  return (
    <div>
        <Header />
        <div className="background-container">
          <img
            src={error}
            alt="error"
            className="background-image"
          />
        </div>
        <Footer />
    </div>
  )
}

export default Notfound;