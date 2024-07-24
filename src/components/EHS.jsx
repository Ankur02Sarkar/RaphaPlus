import React from "react";
import { EHSStyled } from "./EHS.styled";
import Rectangle from "./Rectangle";
import Tracking from "./Tracking";
import SecondFrame from "./Secondframe";
import Lastframe from "./Lastframe";
import SliderComponent from "./SliderComponent";

const EHS = () => {
  return (
    <EHSStyled>
      <div className="mainDiv">
        <div className="leftChildDiv">
          <div className="maskGroup">
            <div>
              <h1 id="openYourHealthAccount">
                Open your
                <br />
                Health Account
              </h1>

              <h3 id="trustedByMoreRhan3CrIndians">
                Trusted by more than 3Cr Indians
              </h3>
            </div>
            <div className="rectanglePropsMain">
              <div className="rectangleName">
                <Rectangle name={"Personalized Tips"} />
                <Rectangle name={"Centralized Access"} />
                <Rectangle name={"Enhanced Care"} />
              </div>
              <div className="rectangleName">
                <Rectangle name={"Paperless Management"} />
                <Rectangle name={"Efficient Retrieval"} />
                <Rectangle name={"Data Security"} />
              </div>
              <div className="rectangleName">
                <Rectangle name={"Seamless Sharing"} />
                <Rectangle name={"Advanced Analytics"} />
                <Rectangle name={"Backup & Recovery"} />
              </div>
            </div>
            <div className="playStoreandAppleStore">
              <img src="playStore.png" alt="playstore Link" />
              <img src="appleStore.png" alt="applestore Link" />
            </div>
          </div>
        </div>
        <div className="rightChildDiv">
          <SliderComponent />
        </div>
      </div>
      <Tracking />
      <SecondFrame />
      <Lastframe />
    </EHSStyled>
  );
};

export default EHS;
