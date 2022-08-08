import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (   <div>
        {options.map(item => (
          <button className={css.buttons}
            type="button"
            name={item}
            key={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
        </div>)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};