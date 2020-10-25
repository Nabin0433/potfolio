import React,{ Component } from 'react';
import {Grid,Cell} from 'react-mdl';
    class page extends Component {
    render(){
     return(
         <div style = {{width:'100%',margin:'auto'}}>
             <Grid className="landing-grid">

                 <Cell col={12}>



         <img className="avatar-img" 
         src='https://scontent.fktm7-1.fna.fbcdn.net/v/t1.0-9/87018024_1550074038475367_6942745910212296704_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=fNe7m_3crHwAX-THZwx&_nc_ht=scontent.fktm7-1.fna&oh=3fe1e843cdc31c5bb4e9fc6f39e07ca5&oe=5FB5776A'
          alt="my pic" />
          <div className="wc" style={{float:'right',marginRight:'20px'}}>
              <h4>   WELLCOME   </h4>
          </div>
          <br />
          <div className="banner">
            <h2> Full stack WEB Developer </h2>
            <hr />

            <p>HTML | CSS | Java Script | React | <wbr /> Express | NodeJS | Bootstrap | Redux <br />
            <wbr />Metarial UI | SQL & No SQL | Fire Base | MangoDB | My SQL| ETC..|
            </p>
            <div className="socialLinks">
               
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
            <br /><h4 style={{textAlign:'center',color:'white'}}>Thank you</h4><br />

          </div>

          
          </Cell>
             </Grid>
         </div>
      );

    }

}

export default page;