import PropTypes from 'prop-types';
import { List } from '../StaticsInfo/StaticsInfo.styled';
 const state = {
  good: 2,
  neutral: 5,
  bad: 3
}

function countTotalFeedback() {
 return state.good + state.neutral + state.bad

}

  function countPositiveFeedbackPercentage() {
    return countTotalFeedback() / 100 * state.good *100
  }


function StaticsInfo() {
    return (

      <section>
        <List>
        
        <li><p>Good: {state.good}</p></li>
        <li><p>Neutral: {state.neutral}</p></li>
        <li><p>Bad: {state.bad}</p></li>
        <li><p>Total: {countTotalFeedback()}</p></li>
        <li><p>Positive feedback: {countPositiveFeedbackPercentage()}%</p></li>
      
      </List>
       
      
      </section>
     
      

    )
}

export default StaticsInfo