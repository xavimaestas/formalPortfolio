import streetlight from "../assets/streetlight.jpg"


export default function About(){
    return (

        <div className="page about-container">
            <div>
            <h2>WORK</h2>
            <p>Since 2011 (when I was a Junior in Highschool), I’ve worked for a company that sells street lighting products, typically lights, poles and other manufactured equipment to Cities, Utilities, DOT’s and Municipalities. 
            <br/>
            <br/>
            <img className="about-img" src={streetlight}/>
            <br/>
            <br/>
            I started out doing AutoCad work for them after school and over the years and through college, moved up through order processing, inside sales, outside sales and then finally managing outside and inside sales and maintaining key relationships with our larger City and Utility customers. 
            <br/>
            <br/>
            I graduated from the University of Utah in 2016 with a Bachelor of Arts in Communication, while still working full time. 
            </p>
            </div>

            <div className="about-fun">
            <h2>FUN</h2>
            </div>

            <div>
            <h2>MORE FUN</h2>
            </div>
           
            
        </div>
    )
}