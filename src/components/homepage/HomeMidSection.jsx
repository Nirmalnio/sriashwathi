import React from "react";
import imgs from "../../assests/images/ezgif.com-gif-maker.gif";
import { Staricon } from "../../assests/commonsvg";
import One from "../../assests/images/1.png";
import Two from "../../assests/images/2.png";
import Three from "../../assests/images/3.png";
import Four from "../../assests/images/4.png";
import Five from "../../assests/images/5.png";
import HomepgNumCard from "./HomepgNumCard";

function HomeMidSection() {
  const contentArray = [
    {
      id: 1,
      img: One,
      content: "Works Anywhere! Effective, Responsive, Accessible",
    },
    {
      id: 2,
      img: Two,
      content:
        "Consistency - the key to create familiarity  Be it for brands or for user flow",
    },
    {
      id: 3,
      img: Three,
      content:
        "User is the King! Know them - Involve them - Learn from them - Repeat!",
    },
    {
      id: 4,
      img: Four,
      content: "Group Ideation Great ideas can come from anyone!",
    },
    {
      id: 5,
      img: Five,
      content:
        "Clean Structure and Hierarchy No more spiraling down the decision paradox!",
    },
  ];

  return (
    <div className="hm-mid-Sec">
      <div className="hm-midSecDiv">
        <div className="hm-textDiv">
          <div>
            <h2>Take a look at what</h2>
          </div>
          <div className="hm-cnter-divImg">
            <div className="hr-hm-line"></div>
            <img src={imgs} alt="eyedown" />
          </div>
          <div>
            <h2>I can do for you</h2>
          </div>
        </div>

        <div className="hm-mid-text">
          <p>
            Transforming your vision into stunning reality by Unlocking
            creativity <br />& delivering excellence in my design.
          </p>
        </div>

        <div className="scrollSlide-card-main">
          <div className="container">
            <ul id="cards">
              <li className="card" id="card1">
                <div className="card-body"></div>
              </li>
              <li className="card" id="card2">
                <div className="card-body"></div>
              </li>
              <li className="card" id="card3">
                <div className="card-body"></div>
              </li>
              <li className="card" id="card4">
                <div className="card-body"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="scrollSection">
        <div class="text-container">
          <div class="text-animation">
            <span>{Staricon} Things I focus, From What I learnt </span>
            <span>{Staricon} Things I focus, From What I learnt </span>
            <span>{Staricon} Things I focus, From What I learnt </span>
            <span>{Staricon} Things I focus, From What I learnt </span>
          </div>
        </div>
      </div>

      <div className="hm-midSecDiv">
        <div className="hm-numSecDiv">
          {contentArray.map((item, id) => {
            return (
              <div
                className={
                  item?.id % 2 === 0 ? "hm-numSecprntDiv2" : "hm-numSecprntDiv1"
                }
              >
                <HomepgNumCard image={item?.img} content={item?.content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeMidSection;
