import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  formControl,
  dropdownPlaceholder,
}) => {
  return (
    <div className={`email-input-inner ${className}`}>
      <div className="option-item-parent">
        <div className="option-item">
          <div className="form-control1">{formControl}</div>
        </div>
        <div className="option10">
          <input
            className="dropdown"
            placeholder={dropdownPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  formControl: PropTypes.string,
  dropdownPlaceholder: PropTypes.string,
};

export default FrameComponent2;
