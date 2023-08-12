import Card from "../components/Card.jsx"
import fisihetauHorses from "../assets/fisihetauHorses.jpg"


export default function Projects(){

    return (
        

  


        <div className="page projects-container">
                <Card 
                    title="Fisihetau Horses"
                    text={
                    <div>
                        <p> Adventure Horse Riding Business Website. Main website in use for the business. Mainly used for information about the business, contact information and linking to their booking system, FareHarbor. </p>
                    </div>}
                    image={fisihetauHorses}
                    btn={"https://www.fisihetauhorses.com"}
                />

        </div>

   
            )
}