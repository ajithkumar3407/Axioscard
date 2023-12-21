import Carousel from 'react-bootstrap/Carousel';

function Content(){
    return(
        <div>
               <Carousel>
                    <Carousel.Item>
                        < img src="img/dwonload.webp" className='carosel-img' />
                        <Carousel.Caption>
                        <h3>TOP 100 MOVIES</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/dwonload-1.webp" className='carosel-img'/>
                        <Carousel.Caption>
                        <h3>WEB SERIES</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        < img src="img/dwonload-2.webp" className='carosel-img' />
                        <Carousel.Caption>
                        <h3>HORROR MOVIES</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
        </div>
    )
}
export default Content;