import React, { Component } from 'react';

import Button from '../Button/Button';
import css from './Reviews.module.css';

export default class Reviews extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    };

    handleLeaveFeedback = (e) => {
        const feedback = e.target;
        console.log(feedback);
        // this.setState(prevState => ({
        //     good: prevState.good + 1,
        // }));
    };


    render() {
        const feedbackOptions = Object.keys(this.state);
        console.log(feedbackOptions);
        return (
            <div>
                <ul className={css.feedback}>Please leave feedback
                    {feedbackOptions.map((feedbackOption) =>
                        <li key={feedbackOption}>
                            <Button feedbackOption={feedbackOption} />
                        </li>
                        // <button key={feedbackOption}>{feedbackOption}</button>)
                    )}
                </ul>

                <ul>Statistics
                    <li>Good</li>
                    <li>Neutral</li>
                    <li>Bad</li>
                </ul>
            </div>
        );
    }


}


