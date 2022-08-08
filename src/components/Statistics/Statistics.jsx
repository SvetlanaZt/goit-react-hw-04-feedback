import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
      <ul className={css.statistics} key={nanoid()}>
      <li className={css.item}>Good:{good}</li>
      <li className={css.item}>Neutral:{neutral}</li>
      <li className={css.item}>Bad:{bad}</li>
      <li className={css.item}>Total:{total}</li>
      <li className={css.item}>
        Positive feedback:{positivePercentage}%
      </li></ul>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,

};