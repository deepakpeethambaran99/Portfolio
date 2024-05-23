import Intro from "./Intro";
import Navigation from "./Navigation";

function Home(props) {
    return (
        <>
            <div id="home-gitfolio">
                <Navigation />
                <Intro name="Deepak K Pitmbaran" titles={[
                    'a Python Django Developer @ Exotel',
                    'an Software Engineer'
                ]} />
                <div> 
                    <span className="scroll-btn">
                        <button onClick={props.scrollFun}>
                            <span className="mouse">
                                <span>
                                </span>
                            </span>
                        </button>
                        {/* <p>scroll me</p> */}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;
