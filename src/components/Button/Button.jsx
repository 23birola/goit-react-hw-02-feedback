import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ feedbackOption }) => <button className={css.feedbackOption}>{feedbackOption}</button>;

Button.propTypes = {
    feedbackOption: PropTypes.string.isRequired
}

export default Button;

