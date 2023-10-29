import React from "react";
import img1 from "../../assests/images/Shineditz/dazzle-calendar-and-alarm-for-time-management.gif";
import img2 from "../../assests/images/Shineditz/marginalia-programming.gif";
import img3 from "../../assests/images/Shineditz/transistor-web-design-program.gif";
import img4 from "../../assests/images/Shineditz/abstract-brainstorm.gif";
import img5 from "../../assests/images/Shineditz/simplistic-web-analytics-on-computer-screen.gif";
import background from "../../assests/images/Shineditz/1 (1).png";
import hobbies from "../../assests/images/Shineditz/2 (1).png";
import strech from "../../assests/images/Fingrad/sketch.png";
import Wirefirm from "../../assests/images/Shineditz/wireframe.png";
import homepg from "../../assests/images/Shineditz/hm pg shine.png";
import color from "../../assests/images/Shineditz/color.png";
import bg from "../../assests/images/Shineditz/bg.png";
import primary from "../../assests/images/Shineditz/primary.png";
import icons from "../../assests/images/Shineditz/icon.png";

function ShineBackgroundSection() {
  const contentArray = [
    {
      id: 1,
      color: "#B132FF",
      title: ">> Day 01",
      content: "Defining & Aligning the client and design goals",
    },
    {
      id: 2,
      color: "#F2A849",
      title: ">> Day 02",
      content: "Collecting Ideas, Initial thoughts & creating a Mood Board",
    },
    {
      id: 3,
      color: "#8CBE3A",
      title: ">> Day 03",
      content: "Deciding on the color and typography",
    },
    {
      id: 4,
      color: "#DE3064",
      title: ">> Day 04",
      content: "Planning the pages layout / lo-fi woreframes",
    },
    {
      id: 5,
      color: "#7694FF",
      title: ">> Day 05",
      content:
        "Designing the home page and discussion with client to make the tweets",
    },
    {
      id: 6,
      color: "#FF8B47",
      title: ">> Day 06",
      content: "Designing contact and pricing page, Iterating it.",
    },
    {
      id: 7,
      color: "#D88D00",
      title: ">> Day 07",
      content:
        "Designing the service and about us page, Handing off the assets and giving developers the KT of the project.",
    },
    {
      id: 8,
      color: "#62FC8D",
      title: "Service Continued...",
      content:
        "Kept the tabs and checked the designs developed by the developers on regular bases and made changes in-between whenever required",
    },
  ];

  return (
    <div className="bgSecDiv">
      <h3>Background</h3>
      <p>
        I took Shineditz as a side project. Shineditz is a sister company and
        the CEO wanted the design and been developed in a very short notice of
        time before an investment meeting. It was a real challenge to complete
        the design in 1 week as a side project working as a single designer in
        the team. I had the opportunity to grow and learn tremendously during
        this short time. some of the key things i learnt has been listed below
      </p>

      <div className="bg-featuresDiv">
        <div className="whitebg-bg make-center-div">
          <img src={img1} alt="" />
        </div>
        <span>Elegent creation, fast turnaround</span>
      </div>
      <div className="bg-featuresDiv">
        <span>Developer-friendly balance</span>
        <div className="graybg-bg">
          <div className="make-left-algin">
            <img src={img2} alt="" />
          </div>
          <div className="make-right-algin">
            <img src={img3} alt="" style={{ width: "260px" }} />
          </div>
        </div>
      </div>
      <div className="bg-featuresDiv">
        <div className="whitebg-bg">
          <div className="make-left-algin">
            <img src={img4} alt="" />
          </div>
          <div className="make-right-algin">
            <img src={img5} alt="" />
          </div>
        </div>
        <span>Business-aligned design</span>
      </div>

      <small className="shineSmalltext">How I Worked</small>
      <h3 style={{ marginTop: "1px" }}>Design Process</h3>
      <p>
        Since i had a short time notice, i need to make sure that i finish my
        designs on time and the designs must meet the clients expection and at
        the same time i need to make my designs in a way that will not be
        complecated for the developers which will be time consuming so i made a
        Timeline including all the meetings and made sure that was sucessfully
        coped up.
      </p>

      <div className="mt-5">
        {contentArray.map((item, id) => {
          return (
            <div
              className={
                item?.id % 2 === 0 ? "hm-numSecprntDiv2" : "hm-numSecprntDiv1"
              }
            >
              <div className="DesignProcess">
                <b style={{ color: item?.color }}>{item?.title}</b>
                <p>{item?.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <img src={process} alt="" className="processImg" /> */}
      <small className="shineSmalltext">Where i found my inspiration</small>
      <h3 style={{ marginTop: "1px" }}>My MoodBoard</h3>
      {/* <p>
        Conducted comprehensive Competitive Analysis, examining competitors'
        approaches, designs, and ideas. By incorporating new and innovative
        ideas into our product, we were able to stay ahead of the curve and
        deliver an exceptional user experience.
      </p> */}
      <img src={background} alt="" className="processImg" />

      {/* <h3>MVP</h3> */}
      {/* <p>
        Implemented card slotting and basic sketching techniques to develop an
        effective Minimum Viable Product (MVP). Organized ideas into cards,
        prioritizing features based on user needs. Rapid ideation and
        visualization with basic sketches. Iterative testing and feedback
        refined the design & Streamlined, user-centric MVP development.
      </p> */}
      <img src={hobbies} alt="" className="processImg" />
      {/* <img src={strech} alt="" className="processImg" /> */}
      <small className="shineSmalltext">How i made my work flow easier</small>
      <h3 style={{ marginTop: "1px" }}>Component Library</h3>

      <div className="component-library-first">
        <div className="componet-left">
          <b>Nunito</b>
          <br />
          <p>
            Nunito is a modern and versatile font family that offers a balanced
            blend of simplicity that combines modern aesthetics with
            legibility..With its rounded edges and friendly appearance, Nunito
            brings a touch of warmth and approachability to any design.
          </p>
        </div>
        <div className="component-right">
          <div>Typography</div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>A a</div>
              <div className="font-styles">
                <span>16 styles</span>
                <span>8 Weights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="typography-table">
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="typography-table-row">
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="typography-table-row">
              <td className="col_1">Title/Header 1</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: Bold</li>
                  <li>Size: 60px</li>
                  <li>Letter Spacing: 1%</li>
                </ul>
              </td>
              <td className="col_3">
                <h3>Title/Header 1</h3>
              </td>
            </tr>

            <tr className="typography-table-row">
              <td className="col_1">Header 2</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight:Extra-Bold</li>
                  <li>Size: 48px</li>
                </ul>
              </td>
              <td className="col_3">
                <h1>Header 2</h1>
              </td>
            </tr>
            <tr className="typography-table-row">
              <td className="col_1">Header 3</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: Bold</li>
                  <li>Size: 32px</li>
                  <li>Letter Spacing: 2%</li>
                </ul>
              </td>
              <td className="col_3">
                <h2>Header 3</h2>
              </td>
            </tr>
            <tr className="typography-table-row">
              <td className="col_1">Subtitle/Body Large</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: medium</li>
                  <li>Size: 24px</li>
                </ul>
              </td>
              <td className="col_3">
                <h5>Subtitle</h5>
              </td>
            </tr>
            <tr className="typography-table-row">
              <td className="col_1">Body</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: medium</li>
                  <li>Size: 20px</li>
                </ul>
              </td>
              <td className="col_3">
                <span>Body</span>
              </td>
            </tr>
            <tr className="typography-table-row">
              <td className="col_1">Bold</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: regular</li>
                  <li>Size: 18px</li>
                </ul>
              </td>
              <td className="col_3">
                <span>Bold</span>
              </td>
            </tr>
            <tr className="typography-table-row">
              <td className="col_1">small</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: Medium</li>
                  <li>Size: 16px</li>
                </ul>
              </td>
              <td className="col_3">
                <small>Smaller text here</small>
              </td>
            </tr>

            <tr className="typography-table-row">
              <td className="col_1">Pre Title</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: semi-bold</li>
                  <li>Size: 28px</li>
                </ul>
              </td>
              <td className="col_3">
                <h4>Pre Title</h4>
              </td>
            </tr>

            <tr className="typography-table-row">
              <td className="col_1">BUtton Text</td>
              <td className="col_2">
                <ul>
                  <li>Family: Nunito</li>
                  <li>Weight: Bold</li>
                  <li>Size: 20px</li>
                </ul>
              </td>
              <td className="col_3">
                <b>BUTTON TEXT</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="colordivmain">
        <div>
          <img
            src={color}
            alt=""
            className="processImg"
            style={{ marginBottom: "20px" }}
          />
          <img
            src={bg}
            alt=""
            className="processImg"
            style={{ marginTop: "0px" }}
          />
        </div>
        <div>
          <img
            src={primary}
            alt=""
            className="processImg"
            style={{ width: "44vw" }}
          />
        </div>
      </div>

      <div className="colordivmain">
        <div>
          <img
            src={icons}
            alt=""
            className="processImg"
            style={{ marginTop: "5px" }}
          />
        </div>

        <div className="Elevations-main">
          <b>Elevations</b>
          <br />
          <br />
          <div></div>
          <span>box-shadow: 4px 4px 8px 0px : rgba(215, 215, 215, 0.25);</span>
          <br />
          <br />

          <div></div>
          <span>box-shadow : 0px 4px 8px 0px : rgba(205, 205, 205, 0.50);</span>
          <br />
          <br />

          <div></div>
          <span>box-shadow: 0px 2px 8px 0px : rgba(0, 0, 0, 0.25);</span>
        </div>
      </div>

      <div className="wireframeDiv">
        <img src={Wirefirm} alt="" className="processImg" />
      </div>

      <h3 style={{ marginTop: "1px" }}>Home Page</h3>
      <img
        src={homepg}
        alt=""
        className="processImg"
        style={{ marginTop: "5px" }}
      />

      {/* ===============video=============== */}
      <video className="processImg" loop controls src="https://rr2---sn-h5576ns6.c.drive.google.com/videoplayback?expire=1698611564&ei=PJc-ZZCZHbbGp84P08uf8Ao&ip=27.7.93.162&id=80cdb62995aa9c79&itag=18&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=rj&mm=32&mn=sn-h5576ns6&ms=su&mv=m&mvi=2&pl=25&sc=yes&ttl=transient&susc=dr&driveid=1E_j1SMLbKN5_6jONu7kxhhziWHmy95ZE&app=explorer&eaua=LEwfFUU4H3Y&mime=video/mp4&vprv=1&prv=1&dur=12.004&lmt=1697450475392668&mt=1698600303&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AGM4YrMwRAIgN4X4QekNheoPsoZojupoyZuJyGQVm9SfUOjm6IQ5oqgCIH7X_KIYCfervv2lLVTKvK6CFX7XrYt1j7VAywQj7aBy&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AK1ks_kwRgIhAN0ev8SEnf6jkygmk-wxRRPBRgAs8cx3-pDc1da4e6lvAiEAmh7D4VlzR5ZWV_rVqhT-enE6XqiBcZ97YmZKyetRhVI=&cpn=Ghz_Yls79whq6060&c=WEB_EMBEDDED_PLAYER&cver=1.20231024.01.02" />
      <div className="make-center-div">
      <span>Slack Prototype motion interaction to make it engaging for the users</span>
      </div>
    </div>
  );
}

export default ShineBackgroundSection;
