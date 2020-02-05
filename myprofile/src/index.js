import React from 'react';
import ReactDom from 'react-dom';
import Home from './home';
import SocialMedia from './socialMedia';

const App=()=>{
    return(
       <div className="ui segment">
           <div className="ui two column very relaxed stackable grid">
               <div className="column">
                    <Home/>
               </div>
               <div className="middle aligned column" >
                    <SocialMedia/>
                    content
               </div>
           </div>
       </div>
    )
}
ReactDom.render(<App/>,
    document.querySelector('#root')
)
