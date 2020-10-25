import React,{ Component } from 'react';
import './style/contact.css';

    class contact extends Component {
    render(){
     return(
         <div>
         <div className='Header'>
           <div className="leftSide cont">
               <h3>Nabin karki</h3>
               <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/75220671_1445376798945092_9215788194056896512_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=PZ7Gb_nPtI4AX-cNYos&_nc_ht=scontent.fktm7-1.fna&oh=85aeaa8ad7ae9ec1f3597b10916e07aa&oe=5FB6F69F" alt="me"/>
               <p style={{color:'whitesmoke'}}>From Nepal <br />
               21 years old<br />
               Fullstack Web Deploper</p>
           </div>
           <div className="rightSide conta"> <h3>Contact Me</h3>
           <p style={{fontSize:'20px'}}>  <i className="fas fa-address-book"></i> 9824317734  </p>
           <p style={{fontSize:'20px'}}><i className="fas fa-envelope"></i> <a href="Mailto:nabin0433@gmail.com" >Gmail: Nabin </a> </p>
         
           </div>

           <div style={{position:'absolute',bottom:'50px',left:'30%'}} className="socialLinks">

               
               <a href="Mailto:nabin0433@gmail.com" rel="noopener noreferrer" target="-blank">
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
            

           </div></div>

         
          );
    }

}

export default contact;