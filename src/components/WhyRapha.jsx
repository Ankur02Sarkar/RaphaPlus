import PropTypes from "prop-types";
import "./WhyRapha.css";

const WhyRapha = ({ className = "" }) => {
  return (
    <section className={`why-rapha ${className}`}>
      <div className="why-rapha-content">
        <div className="why-rapha-header">
          <div className="why-rapha-title">
            <h1 className="why-choose-rapha-container">
              <span className="why-choose-rapha-container1">
                Why Choose Rapha
                <sup>+</sup> Digital Clinic
              </span>
            </h1>
            <img
              className="why-rapha-title-child"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className="redefining-container">
          <div className="rectangle-parent">
            <div className="frame-inner" />
            <img
              className="rectangle-icon"
              loading="lazy"
              alt=""
              src="/rectangle-17575@2x.png"
            />
          </div>
          <div className="redefining-content">
            <div className="redefining-header">
              <h1 className="redefining-corporate-healthcar">
                Redefining Corporate Healthcare
              </h1>
              <div className="redefining-description">
                <h2 className="rapha-digital-clinic-container">
                  <span>
                    <b>Rapha</b>
                    <sup>
                      <b>+</b>
                    </sup>
                    <span className="digital-clinic-offers">
                      {" "}
                      Digital Clinic offers a transformative approach to
                      corporate healthcare management. By integrating advanced
                      technology with comprehensive healthcare solutions, we
                      empower companies to enhance employee well-being, optimize
                      operational efficiency, and reduce healthcare costs. Our
                      platform supports immediate medical needs through in-house
                      clinics and emergency services while fostering a proactive
                      approach to employee health through data-driven insights
                      and personalized wellness programs. Choose RaphaPlus
                      Digital Clinic to elevate your corporate healthcare
                      strategy and create a healthier, more productive workplace
                      environment.
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyRapha.propTypes = {
  className: PropTypes.string,
};

export default WhyRapha;
