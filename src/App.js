// import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App(){

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function clickBtnGood (){
    setGood(good+1);
  }

  function clickBtnNeutral(){
    setNeutral(neutral+1);
  };

  function clickBtnBad() {
    setBad(bad+1);
  };

  function countTotalFeedback() {
        let total = good + neutral + bad;
        return total;
      };

  function countPositiveFeedbackPercentage () {
            let posPercent = Math.ceil((good / (good + neutral + bad)) * 100);
            return posPercent || 0;
          };

  return (
          <div className="App">
            <Section title="Please leave feedback">
              <FeedbackOptions
                onClickGood={clickBtnGood}
                onClickNeutral={clickBtnNeutral}
                onClickBad={clickBtnBad}
              />
            </Section>
            <Section title="Statistics">
              {countTotalFeedback() > 0 ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback()}
                  percentage={countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="No feedback given" />
              )}
            </Section>
          </div>
        );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   clickBtnGood = () => {
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   };

//   clickBtnNeutral = () => {
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   };

//   clickBtnBad = () => {
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     let posPercent = Math.ceil((good / (good + neutral + bad)) * 100);
//     return posPercent || 0;
//   };

//   render() {
//     return (
//       <div className="App">
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onClickGood={this.clickBtnGood}
//             onClickNeutral={this.clickBtnNeutral}
//             onClickBad={this.clickBtnBad}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               percentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
