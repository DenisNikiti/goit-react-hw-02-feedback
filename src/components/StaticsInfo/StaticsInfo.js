import PropTypes from 'prop-types';
import { List } from '../StaticsInfo/StaticsInfo.styled';








  


function StaticsInfo(props) {
    return (

      
        <List>
        
        <li><p>Good: {props.state.Good}</p></li>
        <li><p>Neutral: {props.state.Neutral}</p></li>
        <li><p>Bad: {props.state.Bad}</p></li>
        <li><p>Total: {props.total}</p></li>
        <li><p>Positive feedback: {props.total / 100 * props.state.Good}%</p></li>
      
      </List>
       
      
      
     
      

    )
}

export default StaticsInfo