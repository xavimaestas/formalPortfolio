
export function loader(){
    return "Loading..."
}



export default function Home(){


    return (
        <>
            <div className="page home-container">
                <div className="home-title">
                    <h1>Xavier Maestas <br/><br/>Frontend Developer</h1>
                </div>

                <div className="tech-stack">
                    <i class="fa-brands fa-html5 fa-2xl"></i>
                    <i class="fa-brands fa-css3-alt  fa-2xl"></i>
                    <i class="fa-brands fa-js  fa-2xl"></i>
                    <i class="fa-brands fa-react  fa-2xl"></i>
                </div>
                
            </div>
        </>
       
    )
}