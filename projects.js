import React,{ Component } from 'react';
import {Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
    class project extends Component {
    render(){
     return(
         <>
         <div>
             <br />
         </div>
       <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        My Todo project Try out & have free sorce code <br />
        github:https://github.com/Nabin0433/my-work.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
   </Card>

         
         </>
      );

    }

}

export default project;