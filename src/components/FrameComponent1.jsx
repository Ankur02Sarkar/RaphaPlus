import OuterInput from "./OuterInput";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`hero-content-wrapper ${className}`}>
      <div className="hero-content">
        <div className="hero-slogan">
          <div className="frame-parent">
            <div className="digital-clinic-parent">
              <h1 className="digital-clinic1">Digital Clinic</h1>
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
            </div>
            <h1 className="transforming-workplace-health">
              Transforming Workplace Health
            </h1>
            <h3 className="streamline-corporate-wellness">
              Streamline Corporate Wellness
            </h3>
          </div>
        </div>
        <form className="form-container">
          <div className="form-container-child" />
          <div className="form">
            <div className="email-input">
              <OuterInput
                formControl="Company Name: *"
                emailPlaceholder="Your company name"
              />
              <OuterInput
                formControl="Contact Person: *"
                emailPlaceholder="contact person"
              />
              <FrameComponent2
                formControl="Email id *"
                dropdownPlaceholder="your email"
              />
            </div>
            <div className="email-input1">
              <div className="frame-group">
                <div className="form-control-wrapper">
                  <div className="form-control2">Mobile number *</div>
                </div>
                <div className="inputform-control1">
                  <div className="email1">{`Enter your mobile number * `}</div>
                </div>
                <div className="form-control-container">
                  <div className="form-control3">Company Address: *</div>
                </div>
              </div>
              <div className="inputform-control2">
                <input
                  className="email2"
                  placeholder="Company Address"
                  type="text"
                />
              </div>
              <FrameComponent2
                formControl="Number of Employees: *"
                dropdownPlaceholder="Number of Employees"
              />
            </div>
          </div>
          <div className="disclaimer-container">
            <div className="disclaimer">
              <div className="disclaimer-background-wrapper">
                <div className="disclaimer-background" />
              </div>
              <div className="by-sending-this-container">
                <span className="by-sending-this">{`By sending this form I confirm that I have read and accept the `}</span>
                <b className="privacy-policy">{`Privacy Policy `}</b>
                <span className="span">{` `}</span>
              </div>
            </div>
          </div>
          <div className="demo-button-container">
            <button className="request-a-demo">
              <b className="btn-text">Request for demo</b>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
