import React from 'react';
import "./style.css";

const Home=()=>{
    return(
        <div className="container">
            <div className="ui medium image" style={{left:"15%",top:"20%"}}>
            <button className="ui primary button" style={{left:"10%",top:"10px"}}>
                <div className="">Hello I am Hashika</div>
            </button>
            <svg width="500" height="500">
                     <image href=""width="100%" height="100%"></image>
            </svg>
            <div className="ui">
                <button className="fluid ui inverted primary button"style={{width:"200px"}}>About</button><br/>
                <button className="fluid ui inverted primary button"style={{width:"200px"}}>Projects</button><br/>
                <button className="fluid ui inverted primary button"style={{width:"200px"}}>Contact</button>
            </div>
            </div>
            
        </div>
    )
}
export default Home;