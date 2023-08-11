import streetlight from "../assets/streetlight.jpg"
import me2 from "../assets/me2.jpg"
import edinburgh from "../assets/edinburgh.jpg"
import utahfb from "../assets/utahfb.jpeg"
import greatwall from "../assets/greatwall.jpg"


export default function About(){
    return (

        <div className="page about-container">

            <div>

            <h2>ME</h2>
            <img className="about-img" src={me2}/>

            </div>


            <div>
            <h2>WORK</h2>
            
                <p>
                    Since 2011 (when I was a Junior in Highschool), I’ve worked for a company that sells street lighting products, typically lights, poles and other manufactured equipment to Cities, Utilities, DOT’s and Municipalities. 
                </p>
            <img className="about-img" src={streetlight}/>
            <br/>
           
                <p>
                    I started out doing AutoCad work for them after school and over the years and through college, 
                    moved up through order processing, inside sales, outside sales and then finally managing outside and inside sales and maintaining key relationships with our larger City and Utility customers. 
                </p>
                <p>
                    I graduated from the University of Utah in 2016 with a Bachelor of Arts in Communication, while still working full time. Growing up and throughout my formal schooling I had managed my own online businesses, building my own websites and had an interest in photography and graphic design. During this time I learned Adobe Illustrator and Lightroom. 
                </p>

                <img className="about-img" src={utahfb}/>
                <p>
                    In April 2022 I began my coding journey after work and in my free time.. I began with FreeCodeCamp and earned the Responsive Web Design Certificate. I then moved on to the Scrimba Frontend Developer Path and also received their certificate. This path focused on Responsive Web Design, REST APIs, React, Mobile First Design and Generative AI. 
                </p>
            </div>

            <div className="about-fun">
            <h2>FUN</h2>

                <p>
                    When I’m not working or studying, I have plenty of hobbies to keep busy. One of my favorite things is traveling and having new experiences with family and friends. Whether it’s an away Utah football game for the weekend or a European adventure, I’m there. I have traveled to 26 countries with several more coming up! 
                </p>

                <img className="about-img" src={edinburgh}/>

                <p>
                    Playing the guitar is something that I enjoy doing, I mostly strum chords but I love to play my favorite songs. I also love to game, read, workout and do things around the house. I am a big University of Utah fan as mentioned before and am a season ticket holder with family and friends. I also support Manchester United in the Premier League and follow them closely with other friends who enjoy soccer. 
                </p>

                <img className="about-img" src={greatwall}/>
            </div>

           
            
        </div>
    )
}