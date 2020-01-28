import React, { Component } from "react";
import Stripes from "../../../Resources/Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import Reveal from "react-reveal/Reveal";
import Cards from "./cards"
export default class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                  <Cards/>
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Meet
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    The
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "20px"
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                    add={{
                      display: "inline-block",
                      marginBottom: "27px",
                      border: "1px solid #0e1731"
                    }}
                  >
                    meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}
