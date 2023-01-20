import PropTypes from 'prop-types'
import { Component } from 'react'

import StaticsButtons from '../StaticsButtons/StaticsButtons'
import StaticsInfo from "../StaticsInfo/StaticsInfo"
import NoInfo from '../NoInfo/NoInfo'


   

export class Statics extends Component {


  


state = {
  Good: 0,
  Neutral: 0,
  Bad: 0
}


   

    
    

    TotatFeedback = ""
    

    changestate = (type) => {
        
        
        this.setState(prevState => ({
            
        [type] :prevState[type] + 1
            
        })
        

        )
        
        
}
    callTotal = () => {
            this.TotatFeedback = this.state.Good + this.state.Neutral + this.state.Bad
        
    }
        
    
        
   
    
    render() {
        


       

        this.callTotal()
        
        
        return (
            

          <div>

                <section><StaticsButtons onClick={this.changestate}/></section>
                
                <section>
                    
                    
                    {this.TotatFeedback <= 0 && <NoInfo />}
                    
                    {this.TotatFeedback > 0 && <StaticsInfo state={this.state} total={this.TotatFeedback} />}
                    
                
                
                
                
                </section>
                
                
                
                

    </div>


        )
    }
}



