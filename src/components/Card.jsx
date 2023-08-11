import { useState } from 'react'


export default function Card(props){
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const imageClass = props.imageStyle ? props.imageStyle : 'projects-img'


    return (

        


        <div className={
            isHovered ? "projects-card  cardEnter" : "projects-card projects-top cardLeave"} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <img className={imageClass} alt={props.alt} src={props.image}></img>

          { props.price ? <div className="projects-price-container">
                <p className="projects-price">{props.price}</p>
            </div> : null}
            

            <div className="projects-card-text" >
                <h3 className="projects-title">{props.title}</h3>
               
                <p>{props.text}</p>
                
            </div>
            <a className="projects-btn" href={props.btn} target="blank_">Visit Project</a>
        </div>
      

   
      
        
    )
}