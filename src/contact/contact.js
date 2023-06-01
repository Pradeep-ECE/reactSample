import './contact.css';
import Navbar from '../navbar/navbar';
function Contact(){

    return(
      <div className='body'>
      <Navbar/>
  <div className="container">
    <h1>Contact Us</h1>
    <form action="#" method="post">
      <div className="form-group">
        <html for="name">Name</html>
        <input type="text" id="name" name="name" required></input>
      </div>
      
      <div className="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required></input>
      </div>
      
      <div className="form-group">
        <html for="message">Message</html>
        <textarea id="message" name="message" required></textarea>
      </div>
      
      {/* <input type="submit" value="Submit"></input> */}
      <button>Submit</button>
    </form>
  </div>

</div>
    )
}

export default Contact;