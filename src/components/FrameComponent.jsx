import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`benefits-content-wrapper ${className}`}>
      <div className="benefits-content">
        <div className="benefits-content-child" />
        <div className="benefits-grid">
          <div className="enhance-workplace-health-and-e-parent">
            <h1 className="enhance-workplace-health">
              Enhance Workplace Health and Efficiency
            </h1>
            <div className="benefits-subheading">
              <b className="improving-corporate-wellness">
                Improving Corporate Wellness
              </b>
            </div>
          </div>
        </div>
        <div className="features-grid">
          <div className="feature-list">
            <div className="feature-list-child" />
            <b className="employee-health-management">
              Employee Health Management
            </b>
          </div>
          <div className="feature-list1">
            <div className="feature-list-item" />
            <b className="emergency-services-access">
              Emergency Services Access
            </b>
          </div>
          <div className="feature-list2">
            <div className="feature-list-inner" />
            <b className="complaint-handling-system">
              Complaint Handling System
            </b>
          </div>
          <div className="feature-list3">
            <div className="rectangle-div" />
            <b className="integrated-clinic-network">
              Integrated Clinic Network
            </b>
          </div>
          <div className="feature-list4">
            <div className="feature-list-child1" />
            <b className="employee-health-management1">
              Employee Health Management
            </b>
          </div>
          <div className="feature-list5">
            <div className="feature-list-child2" />
            <b className="efficiency-monitoring">Efficiency Monitoring</b>
          </div>
          <div className="feature-list6">
            <div className="feature-list-child3" />
            <b className="facility-management-solutions">
              Facility Management Solutions
            </b>
          </div>
          <div className="feature-list7">
            <div className="feature-list-child4" />
            <b className="in-house-clinic-provision">
              In-House Clinic Provision
            </b>
          </div>
          <div className="feature-list8">
            <div className="feature-list-child5" />
            <b className="employee-health-management2">
              Employee Health Management
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
