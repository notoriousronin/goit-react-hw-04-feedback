import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const handleGood = () => {
    setGood(prevState => prevState + 1);
  };

  const [neutral, setNeutral] = useState(0);
  const handleNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const [bad, setBad] = useState(0);
  const handleBad = () => {
    setBad(prevState => prevState + 1);
  };

  return (
    <div>
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback yet'} />
        )}
      </Section>
    </div>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

// handleGoodClick = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };
// handleNeutralClick = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// };
// handleBadClick = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = Math.floor((good / total) * 100);
//     return positivePercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title={'Please, leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title={'Statistics'}>
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message={'There is no feedback yet'} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
