import React from "react";
import styled from "styled-components";

      // instalar
     // npm i styled-components

export const SaberLoader = () => {
  return (
    <StyledWrapper>
      <div id="loader">
        <div className="ls-particles ls-part-1" />
        <div className="ls-particles ls-part-2" />
        <div className="ls-particles ls-part-3" />
        <div className="ls-particles ls-part-4" />
        <div className="ls-particles ls-part-5" />
        <div className="lightsaber ls-left ls-green" />
        <div className="lightsaber ls-right ls-red" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #loader {
    width: 80px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px -40px;
    z-index: 1000;
  }

  .lightsaber {
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #666;
    border-radius: 1px;
    bottom: 0;
  }

  .lightsaber.ls-left {
    left: 0;
  }

  .lightsaber.ls-right {
    right: 0;
  }

  .lightsaber:before {
    position: absolute;
    content: " ";
    display: block;
    width: 2px;
    height: 25px;
    max-height: 1px;
    left: 1px;
    top: 1px;
    background-color: #fff;
    border-radius: 1px;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
    -webkit-transform-origin: center top;
    -ms-transform-origin: center top;
    transform-origin: center top;
  }

  .lightsaber:after {
    position: absolute;
    content: " ";
    display: block;
    width: 2px;
    height: 2px;
    left: 1px;
    top: 4px;
    background-color: #fff;
    border-radius: 50%;
  }

  .ls-particles {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 1px;
    height: 5px;
    background-color: rgb(51, 51, 51, 0);
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }

  .lightsaber.ls-green:before {
    -webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
    animation: showlightgreen 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-red:before {
    -webkit-animation: showlightred 2s ease-in-out infinite 1s;
    animation: showlightred 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-left {
    -webkit-animation: fightleft 2s ease-in-out infinite 1s;
    animation: fightleft 2s ease-in-out infinite 1s;
  }

  .lightsaber.ls-right {
    -webkit-animation: fightright 2s ease-in-out infinite 1s;
    animation: fightright 2s ease-in-out infinite 1s;
  }

  .ls-particles.ls-part-1 {
    -webkit-animation: particles1 2s ease-out infinite 1s;
    animation: particles1 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-2 {
    -webkit-animation: particles2 2s ease-out infinite 1s;
    animation: particles2 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-3 {
    -webkit-animation: particles3 2s ease-out infinite 1s;
    animation: particles3 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-4 {
    -webkit-animation: particles4 2s ease-out infinite 1s;
    animation: particles4 2s ease-out infinite 1s;
  }

  .ls-particles.ls-part-5 {
    -webkit-animation: particles5 2s ease-out infinite 1s;
    animation: particles5 2s ease-out infinite 1s;
  }

  @-webkit-keyframes showlightgreen {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }

    5% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    10% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }
  }

  @-webkit-keyframes showlightred {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }

    20% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    25% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }
  }

  @-webkit-keyframes fightleft {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      left: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    40% {
      -webkit-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
      left: 0;
      bottom: 2px;
    }

    45% {
      -webkit-transform: rotateZ(65deg);
      transform: rotateZ(65deg);
      left: 0;
    }

    65% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 30px;
      bottom: 10px;
    }

    95% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
      left: 0;
      bottom: 0;
    }
  }

  @-webkit-keyframes fightright {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      right: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    45% {
      -webkit-transform: rotateZ(-45deg);
      transform: rotateZ(-45deg);
      right: 0;
      bottom: 2px;
    }

    50% {
      -webkit-transform: rotateZ(-65deg);
      transform: rotateZ(-65deg);
      right: 0;
    }

    68% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 27px;
      bottom: 13px;
    }

    95% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(-360deg);
      transform: rotateZ(-360deg);
      right: 0;
      bottom: 0;
    }
  }

  @-webkit-keyframes particles1 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(-30px);
      transform: rotateZ(35deg) translateY(-30px);
    }
  }

  @-webkit-keyframes particles2 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    95% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(-40px);
      transform: rotateZ(-65deg) translateY(-40px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(-40px);
      transform: rotateZ(-65deg) translateY(-40px);
    }
  }

  @-webkit-keyframes particles3 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(-35px);
      transform: rotateZ(-75deg) translateY(-35px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(-35px);
      transform: rotateZ(-75deg) translateY(-35px);
    }
  }

  @-webkit-keyframes particles4 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(-30px);
      transform: rotateZ(-25deg) translateY(-30px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(-30px);
      transform: rotateZ(-25deg) translateY(-30px);
    }
  }

  @-webkit-keyframes particles5 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(-35px);
      transform: rotateZ(65deg) translateY(-35px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(-35px);
      transform: rotateZ(65deg) translateY(-35px);
    }
  }

  @keyframes showlightgreen {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }

    5% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    10% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #87c054;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #87c054;
    }
  }

  @keyframes showlightred {
    0% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }

    20% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    25% {
      max-height: 22px;
    }

    80% {
      max-height: 22px;
    }

    85% {
      box-shadow: 0 0 4px 2px #f06363;
    }

    100% {
      max-height: 0;
      box-shadow: 0 0 0 0 #f06363;
    }
  }

  @keyframes fightleft {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      left: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    40% {
      -webkit-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
      left: 0;
      bottom: 2px;
    }

    45% {
      -webkit-transform: rotateZ(65deg);
      transform: rotateZ(65deg);
      left: 0;
    }

    65% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 30px;
      bottom: 10px;
    }

    95% {
      -webkit-transform: rotateZ(410deg);
      transform: rotateZ(410deg);
      left: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
      left: 0;
      bottom: 0;
    }
  }

  @keyframes fightright {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      right: 0;
      bottom: 0;
    }

    30% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
      bottom: 0;
    }

    45% {
      -webkit-transform: rotateZ(-45deg);
      transform: rotateZ(-45deg);
      right: 0;
      bottom: 2px;
    }

    50% {
      -webkit-transform: rotateZ(-65deg);
      transform: rotateZ(-65deg);
      right: 0;
    }

    68% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 27px;
      bottom: 13px;
    }

    95% {
      -webkit-transform: rotateZ(-410deg);
      transform: rotateZ(-410deg);
      right: 0;
      bottom: 0;
    }

    100% {
      -webkit-transform: rotateZ(-360deg);
      transform: rotateZ(-360deg);
      right: 0;
      bottom: 0;
    }
  }

  @keyframes particles1 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(35deg) translateY(0px);
      transform: rotateZ(35deg) translateY(0px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(35deg) translateY(-30px);
      transform: rotateZ(35deg) translateY(-30px);
    }
  }

  @keyframes particles2 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-65deg) translateY(0px);
      transform: rotateZ(-65deg) translateY(0px);
    }

    95% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(-40px);
      transform: rotateZ(-65deg) translateY(-40px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-65deg) translateY(-40px);
      transform: rotateZ(-65deg) translateY(-40px);
    }
  }

  @keyframes particles3 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-75deg) translateY(0px);
      transform: rotateZ(-75deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(-35px);
      transform: rotateZ(-75deg) translateY(-35px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-75deg) translateY(-35px);
      transform: rotateZ(-75deg) translateY(-35px);
    }
  }

  @keyframes particles4 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(-25deg) translateY(0px);
      transform: rotateZ(-25deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(-30px);
      transform: rotateZ(-25deg) translateY(-30px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(-25deg) translateY(-30px);
      transform: rotateZ(-25deg) translateY(-30px);
    }
  }

  @keyframes particles5 {
    0% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    63% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    64% {
      background-color: rgba(51, 51, 51, 1);
      -webkit-transform: rotateZ(65deg) translateY(0px);
      transform: rotateZ(65deg) translateY(0px);
    }

    97% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(-35px);
      transform: rotateZ(65deg) translateY(-35px);
    }

    100% {
      background-color: rgba(51, 51, 51, 0);
      -webkit-transform: rotateZ(65deg) translateY(-35px);
      transform: rotateZ(65deg) translateY(-35px);
    }
  }
`;
