import PropTypes from "prop-types";
import css from './Task.module.css';

export default function Task({ title, children }) {
  return (
   <>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
    </>  
  );
}

Task.prototype = {
  title: PropTypes.string,
};