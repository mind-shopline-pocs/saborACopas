import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

export const ProductCard = ({props, buttonState}) => {

  const navigate = useNavigate()

  const navigateToProduct = (id) => {
   
    navigate(`/product/${props.id}`,{
        replace: true,
        relativeTo: true
    });
    // window.location.reload(true);
}

  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={props.image.src} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <Card
    bg="white"
    key="primary"
    text= "white"
    //style={{ width: '18rem' }}
    className="mb-2 border border-warning  mr-2"
  >
    
    <Card.Body>
    <Card.Text className='d-flex justify-content-center'>
      {/* <Link to={`/product/${props.id}`}> */}
        <img variant="top" bg="white" className='' src={props.image.src}
          
          style={{
            maxWidth: "350px",
            maxHeight: "350px"
          }}

        onClick={() => navigateToProduct(props.id)}
        
        ></img>
      {/* </Link> */}
      </Card.Text>

      <Card.Title className='text-center' style={
        {
          color:"#800000"
        }
      }> {props.title} </Card.Title>
      <Card.Text className='text-center text-dark fw-light'style={
        {
          color:"#DEB887"
        }
      }>
        ${props.variants[0].price} MXN
      </Card.Text>

      <Card.Text className='mb-2'>
        <Link to={`/product/${props.id}`} className="d-block rounded p-2  text-white text-center "
        style={{
          textDecoration: 'none',
          backgroundColor: '#DAA520'
        }} ><b>Comprar</b></Link>
      </Card.Text>
      
     
     
    
      
    </Card.Body>
  </Card>

  )
}
