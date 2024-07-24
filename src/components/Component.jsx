import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <section className={`component-114 ${className}`}>
      <div className="workflow-background-parent">
        <img
          className="workflow-background-icon"
          loading="lazy"
          alt=""
          src="/rectangle-17579@2x.png"
        />
        <div className="workflow-content">
          <div className="workflow-header">
            <h1 className="how-rapha-works-container">
              <span className="how-rapha-works-container1">
                How Rapha
                <sup>+</sup> Works
              </span>
            </h1>
            <div className="workflow-diagram">
              <div className="diagram-container">
                <div className="diagram">
                  <div className="diagram-elements">
                    <div className="diagram-labels">
                      <h2 className="in-house-clinic">In-House Clinic</h2>
                    </div>
                    <div className="diagram-labels1">
                      <h2 className="vitals-tracking">Vitals Tracking</h2>
                    </div>
                    <h2 className="facility-monitoring">Facility Monitoring</h2>
                    <h2 className="improved-efficiency">Improved Efficiency</h2>
                  </div>
                  <div className="diagram-child" />
                </div>
                <div className="workflow-description">
                  <div className="description-container">
                    <div className="description">
                      <div className="benefits-list">
                        <img
                          className="benefits-list-child"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-item"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-inner"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="group-icon"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-child1"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-child2"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-child3"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                        <img
                          className="benefits-list-child4"
                          loading="lazy"
                          alt=""
                          src="/group-39926.svg"
                        />
                      </div>
                    </div>
                    <div className="benefits-details">
                      <h1 className="convenient-access-to">
                        Convenient access to care.
                      </h1>
                      <div className="benefit-descriptions">
                        <h1 className="immediate-on-site-medical">
                          Immediate on-site medical attention.
                        </h1>
                      </div>
                      <div className="benefit-descriptions1">
                        <h1 className="reduces-time-spent">
                          Reduces time spent on offsite visits.
                        </h1>
                      </div>
                      <div className="benefit-descriptions2">
                        <h1 className="increases-employee-satisfactio">
                          Increases employee satisfaction.
                        </h1>
                      </div>
                      <div className="benefit-descriptions3">
                        <h1 className="promotes-regular-health">
                          Promotes regular health check-ups.
                        </h1>
                      </div>
                      <div className="benefit-descriptions4">
                        <h1 className="early-detection-of">
                          Early detection of health issues.
                        </h1>
                      </div>
                      <div className="benefit-descriptions5">
                        <h1 className="supports-wellness-programs">
                          Supports wellness programs.
                        </h1>
                      </div>
                      <div className="benefit-descriptions6">
                        <h1 className="quick-access-to">
                          Quick access to healthcare.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src="/vector-3.svg" />
      </div>
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
