import React, {useEffect , useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

function Axioussection(){

    const [photos,setphotos]=useState([])


    useEffect(()=>{
        axios.get("https://api.tvmaze.com/shows/1/episodes")
        .then((res)=>{
            setphotos(res.data)
            console.log(res.data)
        })
    },[])

    return(
        <div>
               <Container className="card-container">
                  <Row className="card-row row-cols-lg-3">
                        {
                             photos.map((photos)=>(
                                <div>
                                            <Col className="card-col">
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src={photos.image.medium}/>
                                                         <Card.Body>
                                                            <Card.Title>{photos.name}</Card.Title>
                                                                <Card.Text>
                                                                     <p>Rating:{photos.rating.average}|| Season:{photos.season}</p>
                                                                    <p>Runtime:{photos.runtime}</p>
                                                                    <p>{photos.summary}</p>  
                                                              </Card.Text>
                                                            <Button variant="primary">Go somewhere</Button>
                                                         </Card.Body>
                                                </Card> 
                                            </Col>
                                    
                                     
                                </div>
                            ))
                       }
                </Row>
          </Container>
        </div>
    )
}
export default Axioussection;