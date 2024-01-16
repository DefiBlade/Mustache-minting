import { NotificationManager } from "react-notifications";

import "./Intro.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/ape1.png";
import img2 from "../../assets/images/ape2.png";
import img3 from "../../assets/images/ape3.png";
import img4 from "../../assets/images/ape4.png";

import back from "../../assets/images/bayc-mutant-hero.jpg";
import MinusBtn from "../../assets/images/minus-rectangle_1.svg";
import PlusBtn from "../../assets/images/plus-rectangle_1.svg";

export const Intro = ({
  walletAddress,
  onConnectWalletHandler,
  mintLoading,
  onMintHandler,
}) => {
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0.03);
  const actionMinus = () => {
    let index = number - 1;
    setNumber(index);
    setTotal(index * 0.03);
  };

  const actionPlus = () => {
    let index = number + 1;
    setNumber(index);
    setTotal(index * 0.03);
  };

  const buyAPE = () => {
    NotificationManager.success("Success!");
  };

  const mintAction = () => {
    onMintHandler(number);
  };

  return (
    <section className="intro" id="intro">
      <div className="intro__back">
        <img alt="back" src={back}></img>
      </div>

      <div className="contentWrapper">
      <div className="intro__fair" id="buy">
          <div className="intro__fair__title">Mint a Mo </div>
          <div className="intro__fair__mint">
            <div className="intro__fair__mint__title">
              <button
                className="navBar__btn__connect"
                onClick={() => onConnectWalletHandler()}
              >
                {walletAddress === "" ? "Connect Wallet" : walletAddress}
              </button>
            </div>
            <div className="intro__fair__mint__counter">
              <button onClick={() => (number > 1 ? actionMinus() : null)}>
                <img src={MinusBtn} alt="pic1"></img>
              </button>
              <div>{number}</div>
              <button onClick={() => (number < 20 ? actionPlus() : null)}>
                <img src={PlusBtn} alt="pic1"></img>
              </button>
            </div>
            <div className="intro__fair__mint__wrapper">
              <button
                type="button"
                onClick={() => {
                  if (!mintLoading) mintAction();
                }}
              >
                {mintLoading && (
                  <FontAwesomeIcon
                    className="mint-spinner"
                    icon={faSpinner}
                    size="1x"
                  />
                )}
                &nbsp;Mint Mo's for {total} ETH
              </button>
            </div>
          </div>
        </div>
        <div className="intro__welcome">
          <div className="intro__welcome__desc">
            <h1 className="section__title">About Mo’s for Bros</h1>
            <p className="section__desc">
              Mo’s for Bros is a fantastically different NFT project designed to
              raise money & awareness for Men’s Health, this Movember. <br />
              <br />
              <b>
                Your Mo’ will help us open the first Men’s Health facility in
                the Metaverse.{" "}
              </b>
              <br />
              <br />
              Yes, 50% of every Mo’s for Bros sale will be donated to Movember
              Movement, the leading global organization focused on Men’s Health
              issues. The rest will go towards launching the first ever, fully
              digital Men’s health facility in the Metaverse. What the f@&k does
              that mean? We honestly don’t know yet. But we do know that over
              95% of NFT collectors are dudes and statistically, one or two of
              us are gonna have a run-in with prostate cancer, testicular cancer
              and/or mental health issues. And trust us, you’re gonna want to
              know that someone was thinking about this ‘Men’s Health in the
              Metaverse’ thing.. So… ‘Ape in’ like your balls depend on it,
              because one day... they might.
            </p>
          </div>

          <div className="intro__welcome__pictures">
            <div>
              <img alt="img" src={img1}></img>
            </div>
            <div>
              <img alt="img" src={img2}></img>
            </div>
            <div>
              <img alt="img" src={img3}></img>
            </div>
            <div>
              <img alt="img" src={img4}></img>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default Intro;
