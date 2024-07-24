import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Component from "../components/Component";
import WhyRapha from "../components/WhyRapha";
import "./DigitalClinic.css";

const DigitalClinic = () => {
  return (
    <div className="digital-clinic">
      <img
        className="digital-clinic-child"
        alt=""
        src="/Rectangle.png"/>
      <div className="digital-clinic-item" />
      <div className="option">
        <div className="list-entry">List Entry # 1</div>
      </div>
      <div className="option1">
        <div className="list-entry1">List Entry # 2</div>
      </div>
      <div className="option2">
        <div className="list-entry2">List Entry # 3</div>
      </div>
      <div className="option3">
        <div className="list-entry3">List Entry # 4</div>
      </div>
      <div className="option4">
        <div className="list-entry4">List Entry # 5</div>
      </div>
      <div className="option5">
        <div className="list-entry5">List Entry # 1</div>
      </div>
      <div className="option6">
        <div className="list-entry6">List Entry # 2</div>
      </div>
      <div className="option7">
        <div className="list-entry7">List Entry # 3</div>
      </div>
      <div className="option8">
        <div className="list-entry8">List Entry # 4</div>
      </div>
      <div className="option9">
        <div className="list-entry9">List Entry # 5</div>
      </div>
      <FrameComponent1 />
      <FrameComponent />
      <Component />
      <WhyRapha />
      <div className="dot-image" />
    </div>
  );
};

export default DigitalClinic;
