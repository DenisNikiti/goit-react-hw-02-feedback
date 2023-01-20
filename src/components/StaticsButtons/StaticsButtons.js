import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './statics.styled';
import { List } from './statics.styled';




function StaticsButtons(props) {

    const Click = event => {
        

        props.onClick(event.currentTarget.textContent)
        
    }
    return (

        

    


 
           
            <List>
                

            <li><Button onClick={Click}>Good</Button></li>
            <li><Button onClick={Click}>Neutral</Button></li>
            <li><Button onClick={Click}>Bad</Button></li>
            </List>

           
            
            
        
            
         
       


        
             
 
           
        
        
        
        
        




    )
   


}
 



export default StaticsButtons