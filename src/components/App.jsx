import { useState } from "react";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

      const onIncrement = (evt) => {
        const nameButton = evt.target.name;
             switch (nameButton) {
                case 'good':
                    setGood((prevState => prevState + 1));
                    break;
            
                 case 'neutral':
                    setNeutral((prevState => prevState + 1));
                break;
          
               case 'bad':
                    setBad((prevState => prevState + 1));
                break;
          
            default: return;
           }
      }
  
  const counterTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((good * 100) / counterTotalFeedback()).toFixed(0);
  };

  const value = ({ good, neutral, bad });
  console.log(value)
  const options = Object.keys(value);
  
    return (
      <>
     <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onIncrement} />
          } />
        {counterTotalFeedback() > 0 ? (<Section
        title="Statistics"
        children={
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={counterTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />}
        />) : <Notification message="There is no feedback"></Notification>}
        
        </>
    );
}