import './services.css';
import Navbar from '../navbar/navbar';
function Services(){

    return(
      <div className='body'>
      <Navbar/>
       
        <div className="container">
          <h1>Our Services</h1>
          
          <div className="service">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus.</p>
          </div>
          
          <div className="service">
            <h2>Graphic Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus.</p>
          </div>
          
          <div className="service">
            <h2>Digital Marketing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus.</p>
          </div>
        </div>
      </div>
    )
}

export default Services;