import React from "react";
import Frame from "./Frame";

const Tracking = () => {
  return (
    <div className="secondContainer">
      <div className="firstPointLetter">
        <h2 className="aPeekIntoTheFutureOfHealth">
          A PEEK INTO THE FUTURE OF HEALTH
        </h2>
        <h3 className="whatDoYouGetWithaHealthAccount">
          What do you get with a health account?
        </h3>
      </div>

      <div className="frameContainer">
        <Frame
          image={<img src="heart.png" aria-placeholder="logo"></img>}
          text={"Access India’s digital health ecosystem"}
          para={"with your ABHA addres"}
          button={<button className="btn">Create ABHA</button>}
        />

        <Frame
          image={<img src="door.png" aria-placeholder="logo"></img>}
          text={"A smart Health Locker"}
          para={"to organise all your medical records"}
          button={<button className="btn">Upload Record</button>}
        />

        <Frame
          image={<img src="healthProfile.png" aria-placeholder="logo"></img>}
          text={"Automated Health Profile"}
          para={"so you make better health decisions"}
          button={<button className="btn">Download App</button>}
        />

        <Frame
          image={<img src="vital.png" aria-placeholder="logo"></img>}
          text={"Vital Tracking"}
          para={"to measure your current health trends"}
          button={<button className="btn">Track Now</button>}
        />
      </div>
    </div>
  );
};

export default Tracking;
