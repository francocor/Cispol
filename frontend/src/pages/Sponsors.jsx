import Footer from "../components/Footer"
import Header from "../components/header"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import jpa from '../assets/jpa.jpg'

const Sponsors = () => {
  return (
    <div>
        <Header/>
        <br />
        <h1>Sponsors</h1>
        <h3>Agradecemos a nuestros sponsors oficiales por confiar en nosotros.</h3>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={jpa} style={ {width:'250px'}} />
      <Card.Body>
        <Card.Title>Juventud Peronista Alderetes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <a href={'https://www.instagram.com/juventud.peronista.alderetes/'} target="_blank" rel="noopener noreferrer">
      <Button variant="primary">Instagram</Button>
    </a>
      </Card.Body>
    </Card>
        <Footer/>
    </div>
  )
}

export default Sponsors