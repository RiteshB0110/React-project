import './info.css';



function Login(){
    return(

      <>

        
                  <div>
            <h2 className='htwo'>Client Info Form</h2>
         

      <form>
        
        <label>Name:</label>
        <input type="text" />

        <label>Email:</label>
        <input type="email" />

        <label>Password:</label>
        <input type="password" />

        <label>Age:</label>
        <input type="number"/>

        <label>Qualification:</label>
        <input type="text"/>

        <label>Address:</label>
        <textarea name="address" ></textarea>

        <label>Course:</label>
        <select >

          <option selected>Full Stack Python</option>
          <option>AI / ML</option>
          <option>Data Analytics</option>
          <option>C++</option>
          <option>C</option>
          <option>Java</option>
        </select><br></br><br></br>

        <button type="submit" value="submit">Submit</button>
      </form>

        </div>



        </>
    );
}
export default Login;