import React from "react";

const Lastframe = () => {
  return (
    <div className="lastMainDiv">
      <h2 className="lastHederLine">YOUR PERSONAL HEALTH PROFILE</h2>
      <div className="lastSection">
        <div className="lastDivImg">
          <img src="health.png"></img>
        </div>

        <div className="lastDivHeader">
          <h2 className="lastDivHeaderLine">
            An automated health profile<br></br> from your medical data
          </h2>
          <p className="lastDivpara">
            "Automated health profile: Derived from extensive medical<br></br>
            data, this profile details your current medications, chronic
            <br></br>
            health conditions"
          </p>
          <div>
            <span className="spanLine"></span>
            <div className="nextButton">
              <svg
                width="89"
                height="89"
                viewBox="0 0 89 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="44.5"
                  cy="44.5"
                  r="44.5"
                  fill="url(#paint0_linear_2142_1629)"
                />
                <g clip-path="url(#clip0_2142_1629)">
                  <path
                    d="M44.12 53.24L42.4955 51.644L48.8795 45.26H35V42.98H48.8795L42.4955 36.596L44.12 35L53.24 44.12L44.12 53.24Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2142_1629"
                    x1="44.5"
                    y1="0"
                    x2="44.5"
                    y2="89"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1D8E89" />
                    <stop offset="1" stop-color="#082827" />
                  </linearGradient>
                  <clipPath id="clip0_2142_1629">
                    <rect
                      width="18.24"
                      height="18.24"
                      fill="white"
                      transform="translate(35 35)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastframe;
