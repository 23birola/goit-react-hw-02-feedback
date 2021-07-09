// import React, { Component } from 'react';
import Button from '../Button/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbackOptions }) => {
    return (
        <ul className={css.feedback}>Please leave feedback
            {feedbackOptions.map((feedbackOption) =>
                <li key={feedbackOption}>
                    <Button feedbackOption={feedbackOption} />
                </li>
            )}
        </ul>
    );
};

export default FeedbackOptions;