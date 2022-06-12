import React from "react";

export default function Welcome() {
  return (
    <>
      <div>
        <div className="shop-welcome">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#70a1bf"
              fill-opacity="1"
              d="M0,288L40,272C80,256,160,224,240,224C320,224,400,256,480,272C560,288,640,288,720,272C800,256,880,224,960,218.7C1040,213,1120,235,1200,224C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="shop-welcome-text text-center ">
          <span>SUSTENTABLES + BIODEGRADABLES + COMPOSTABLES</span>
          <h2>Envases Rígidos</h2>
        </div>
      </div>
    </>
  );
}
