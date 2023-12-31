import PropTypes from 'prop-types';
import randomHexColor from './randomHexColor';
import css from './Statistics.module.css'



const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statList}>
            {stats.map(({id, label, percentage}) => (
        <li className={css.statItem} key={id} style={{ backgroundColor: randomHexColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    ))}
    
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Statistics;