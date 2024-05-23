import { ReactTyped } from "react-typed";
import Dock from "./Dock";

function Intro(props) {
    const name = props.name;
    const titles = props.titles;
    const greeting = props.greeting;
    return (
        <div className='gitfolio-intro'>
            <div className="gitfolio-welcome">
                <div className="gitfolio-greeting">
                    <h4 style={{color: "#ffa500"}}>I'm</h4>
                    <h1>{name}</h1>
                </div>
                <div className='gitfolio-titles'><h3>   
                    <ReactTyped strings={titles} typeSpeed={100} backSpeed={100} loop />
                </h3></div>
                <Dock />
            </div>
            <div className="gitfolio-intro-img">
                <img src={process.env.PUBLIC_URL + '/assets/img/dev.png'} alt="" />
            </div>
        </div>
    );
}

export default Intro;
