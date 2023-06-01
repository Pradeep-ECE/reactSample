import './about.css';
import Navbar from '../navbar/navbar';
function About(){

    return(
        <div><Navbar/>
  <div className="container">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus. Duis quis rhoncus tellus. Mauris vehicula neque mauris, nec aliquam dui lobortis eu. Proin id est sit amet libero finibus dapibus.</p>
    
    <div className="author">
      <h3>John Doe</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus.</p>
    </div>
    
    <div className="author">
      <h3>Jane Smith</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur ipsum. Mauris vel odio nec urna gravida vestibulum a quis tellus.</p>
    </div>
  </div>
  </div>

    )
}

export default About;
