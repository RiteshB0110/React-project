import './info.css';


function Contact(){
    return(
     <>


               <div id='contact'>
        <br></br><br></br>
       <div id='form'>
        <h2 className='htwo'>Contact Form</h2>

    <form>
        <label>Name:</label>
      <input type="text" placeholder="Your Name"  /><br></br><br></br>
      <label>Email:</label>
      <input type="email" placeholder="Your Email"  /><br></br><br></br>
      <button type="submit">Submit</button>
      
    </form>
      
        </div>
        </div>
   
   

      </>
    );
}
export default Contact;