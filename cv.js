import React,{ Component } from 'react';
import './style/cv.css';
    class cv extends Component {
    render(){
     return(
         <div className="cv">
             <div className="header">
             <img src='https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/91040874_1725583844281074_5015541213449682944_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=skcd0ShPXugAX8Vnb1y&_nc_ht=scontent.fktm7-1.fna&oh=5576c66e236c9e2b853894fec1fa5c02&oe=5FB6D86C' alt="me" />
            <h3>Nabin Karki <span>(Web Deploper)</span></h3>
            
            <div className="links">
               
               <a href="#" rel="noopener noreferrer" target="-blank">
                       <i className="fa fa-linkedin-square" aria-hidden="true" />
                   </a>
   
                   <a href="https://github.com/Nabin0433" rel="noopener noreferrer" target="-blank">
                       <i className="fab fa-github-square" aria-hidden="true" />
                   </a>
   
                   <a href="https://www.instagram.com/nabin0433/?hl=en" rel="noopener noreferrer" target="-blank">
                       <i className="fa fa-instagram" aria-hidden="true" />
                   </a>
   
                   <a href="https://www.facebook.com/nabin.nabin.1232/" rel="noopener noreferrer" target="-blank">
                       <i className="fab fa-facebook-square" aria-hidden="true" />
                   </a>
               </div>
               <h5><a style={{color:"wheat"}} href="Mailto:Nabin0433@gmail.com"> Mail:Nabin0433@gmail.com</a></h5>
               <p>Full Stack Deloper from NEPAL  & No any exprience yet .<br/>
                Always Interest in learing new things & teach people's to solve problems. and <wbr />
                create awsome products.<br />
                Recently build simple-game , potfolio,anime web page ,chat app.
               </p>
            </div>
            <h3 className="headerSkill">Skill's</h3>
            <hr />
            <div className="skill">
                
                <div className="leftSide"><h5>Font-End</h5><hr />
                <h6>-HTML,Jade</h6>
                <h6>-CSS,Less,Scss</h6>
                <h6>-Java Script,PHP,Python,</h6>
                <h6>-ReactJS,Redux,Webpack,basic(Vue,Angular)</h6>
                <h6>-MongoDB,Firebase,MY SQL</h6>

                </div>
                <div className="rightSide"><h5>Server-Side <hr /></h5>
                <h6>-Node.JS</h6>
                <h6>-Express.JS</h6>
                <h6>-PHP</h6>
                </div>
             

            </div>
            <hr />
            <div className="desine">
            <div className="leftSide"><h5>UI-desine <hr /></h5>
            <h6>-PS</h6>
            <h6>-Illustrator</h6>
            <h6>-Sketch</h6>
            </div>
            <div className="rightSide"><h5>Language <hr /></h5>
            <h6>-English</h6>
            <h6>-Nepali</h6>
            </div>
            </div>
            <hr />


         </div>
      );

    }

}

export default cv;