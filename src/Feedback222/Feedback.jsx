import React,{Component} from "react";
 import { Box } from "./Feedback.styled";
import FeedbackButton from "./FeedbackButton";
import Statistics from "./Statistics";



class Feedback extends Component{
     state = {
        good: 0,
        neutral: 0,
        bad:0,
    }

    feedbackInc=option=> {
        console.log([option]);
        this.setState(prevState => ({
            [option]:prevState[option]+1,
        }))
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good+neutral+bad)
    }
    countPositiveFeedbackPercentage = () => {
        let positiveFeeds = 0;
        const result = this.countTotalFeedback();
        const { good } = this.state;
        positiveFeeds=Math.round(good*100/result)
        return positiveFeeds;
        
    }
   	// countPositiveFeedbackPercentage = () => {
	// 	const result = this.feedbackTotal();
	// 	const { good } = this.state;
	// 	const percentage = (good * 100) / result;
	// 	return Math.round(percentage);
	// };


   
    render() {
        const {good,neutral,bad }=this.state
        return <div>
           <h1>Please Leave feedback</h1>
           <Box>
                <FeedbackButton
            options={Object.keys(this.state)}
            onFeedbackOption={this.feedbackInc}
          />
               
           </Box>
           <h2> Statistics</h2>
            <Box>
                <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
              
           </Box>
        </div>
    }
}

export default Feedback