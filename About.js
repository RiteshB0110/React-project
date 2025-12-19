import './about.css';

function About() {
    return (

        <>


     
        
            <div id="about">
            <h2 className='au'>About Us</h2>
            <p >
                Samyak Computer Institute is a leading training and skill-development organization
                offering professional courses in IT, programming, designing, and vocational fields.
                We provide hands-on learning, certifications, and career-focused training to help
                students build strong technical foundations.
            </p>

            <h2 className='au'>Our Courses</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <pre className="hfive">   <b>Full Stack Development:</b></pre>
                            <p className="card-text">
                                 Full Stack developers build complete web applications, managing both front-end and back-end development
                                   A full stack developer handles everything from the user interface to server logic and database management..
                                
                               
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <pre className="hfive" >   <b>DATA ANYLITICS:</b></pre>
                            <p className="card-text">
                                 Data Analytics involves collecting, processing, and analyzing data to uncover patterns raw data from various.
                                It involves collecting insights, identify patterns,and support decision-making.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <pre className="hfive">   AI/ML:</pre>
                            <p className="card-text">
                                 AI and Machine Learning specialists design algorithms and models to enable systems to learn and make predictions.
                                They use Python frameworks like TensorFlow .
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <pre className="hfive">   C++:</pre>
                            <p className="card-text">
                                C++ programmers write high-performance and efficient code for software, simulations, and computational tasks.
                                They focus on memory management, speed, and complex problem-solving applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br>



        </div>
    
      
        </>
    );
}

export default About;