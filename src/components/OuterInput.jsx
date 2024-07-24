import PropTypes from "prop-types";
import "./OuterInput.css";

const OuterInput = ({ className = "", formControl, emailPlaceholder }) => {
  return (
    <div className={`outer-input ${className}`}>
      <div className="inner-input">
        <div className="form-control">{formControl}</div>
      </div>
      <div className="inputform-control">
        <input className="email" placeholder={emailPlaceholder} type="text" />
      </div>
    </div>
  );
};

OuterInput.propTypes = {
  className: PropTypes.string,
  formControl: PropTypes.string,
  emailPlaceholder: PropTypes.string,
};

export default OuterInput;
