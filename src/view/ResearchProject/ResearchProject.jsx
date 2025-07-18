import React from "react";
import "./ResearchProject.css";
import yellowArrow from "../../assets/Group 194.png";
import yellowArrow2 from "../../assets/Group 220.png";
import whiteArrow from "../../assets/Arrow 50 (2).png";
import videoImg from "../../assets/image 70.png";
import aiImg from "../../assets/Group 217.png";
import dialogueImg from "../../assets/green-msg.png";
import articleImg from "../../assets/material-symbols_view-headline-rounded.png";
import ideationImg from "../../assets/icons8_idea.png";
import liveImg from "../../assets/fluent_live-24-regular.png";
import bitcoin from "../../assets/circum_bitcoin.png";
import topicAddImg from "../../assets/material-symbols_add.png";
import userImg from "../../assets/User Icon 7.png";
import brownArrow from "../../assets/Group 190.png";
import collaboratorImg from "../../assets/image 114.png";
import collaboratorArrow from "../../assets/Arrow 55.png";
import upcomingProjectImg1 from "../../assets/image 94.png";
import infoIcon from "../../assets/info 6.png";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const ResearchProject = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="vedic-research">
        <div className="vedic-research-banner">
          <div className="uni-container about-container0">
            <p className="research-banner-text">bharat the vishwa guru</p>
            <p className="about-left-heading">
              USHA INSTITUTE OF VEDIC RESEARCH
            </p>
            <p className="about-banner-text">
              A global collaboration Platform for Vedic Research and Indology.
            </p>
          </div>
        </div>
        <div className="uni-container">
          <div className="research-body">
            <p className="body-ushaayatan">USHAAYATAN</p>
            <p className="body-subheading">
              A Dharmic research campus to reawaken civilisation through
              Sanātana wisdom.
            </p>
            <div className="donate-now-btn">
              Know More About <span>USHAAYATAN</span>{" "}
              <img src={yellowArrow} alt="" />
            </div>
            <img className="research-video" src={videoImg} alt="" />
            <p className="ask-usha-heading">ASK USHA</p>
            <div class="ask-usha-btn">
              <div class="ask-usha-inner">
                <img src={aiImg} alt="AI" />
                <span>Ask USHA</span>
              </div>
            </div>
            <p className="usha-body-text">
              Ask USHA is the platform’s GenAI-powered engine that leverages
              cutting-edge Large Language Models (LLMs) trained on curated Vedic
              texts, commentaries, and cross-cultural knowledge frameworks. It
              is designed to intelligently find, decode, and reinterpret ancient
              Sanskrit ślokas, philosophical concepts, rituals, and cosmological
              insights—making them accessible, contextual, and applicable for
              today’s seeker. By integrating semantic search, multilingual
              understanding, and dialogue-based exploration, Ask USHA acts as a
              personalised dhārmic guide, enabling users to ask profound
              questions and receive nuanced, scripturally grounded
              responses—bridging 5,000 years of civilisational wisdom with the
              intelligence of tomorrow. It is a living interface between ancient
              consciousness and modern curiosity.
            </p>
          </div>
          <div className="research-areas">
            <div className="mission-why-usha-btn">
              <span onClick={() => navigate("/vedic-research")}>Research</span>{" "}
              <span className="active">Projects</span>
            </div>
            <p className="research-areas-heading">Projects</p>
            <div className="upcoming-projects-section">
              <div className="upcoming-projects-left">
                <div className="upcoming-project-heading">
                  <p>Upcoming Projects</p>
                </div>
                <div className="upcoming-card-div">
                  <img
                    className="upcoming-img"
                    src={upcomingProjectImg1}
                    alt=""
                  />
                  <div>
                    <div className="upcoming-card-content1">
                      <p className="upcoming-card-heading">
                        Dāna to uphold <br />
                        <span>Sanatan Dharma</span>
                      </p>
                      <div className="upcoming-project-show-btn">
                        <img src={whiteArrow} alt="" />
                      </div>
                    </div>
                    <p className="up-card-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar vulputate dictum. Aliquam erat volutpat.
                      Praesent a erat sollicitudin, pellentesque arcu eget,
                      pretium nulla.
                    </p>
                    <div className="up-card-topics">
                      <div className="popular-topics">Hinduism</div>
                      <div className="popular-topics">Indology</div>
                      <div className="popular-topics">Dharma</div>
                      <div className="popular-topics">Ancient_India</div>
                      <div className="popular-topics">Mahabharata_Katha</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upcoming-projects-right">
                <div className="up-small-divs-wrapper">
                  <div className="up-small-div">
                    <img className="up-info" src={infoIcon} alt="" />
                    <p className="up-small-div-text1">
                      Dāna to uphold Sanatan Dharma
                    </p>
                    <p className="up-small-div-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar vulputate dictum. Read More
                    </p>
                  </div>
                  <div className="up-small-div">
                    <img className="up-info" src={infoIcon} alt="" />
                    <p className="up-small-div-text1">
                      Dāna to uphold Sanatan Dharma
                    </p>
                    <p className="up-small-div-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar vulputate dictum. Read More
                    </p>
                  </div>
                  <div className="up-small-div">
                    <img className="up-info" src={infoIcon} alt="" />
                    <p className="up-small-div-text1">
                      Dāna to uphold Sanatan Dharma
                    </p>
                    <p className="up-small-div-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar vulputate dictum. Read More
                    </p>
                  </div>
                  <div className="up-small-div">
                    <img className="up-info" src={infoIcon} alt="" />
                    <p className="up-small-div-text1">
                      Dāna to uphold Sanatan Dharma
                    </p>
                    <p className="up-small-div-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar vulputate dictum. Read More
                    </p>
                  </div>
                </div>
                <button className="see-more-up">See More</button>
                <div className="join-the-movement">
                  <p className="join-movement-heading">Join the Movement</p>
                  <div className="movements">
                    <button className="contribute-btn">
                      Contribute <img src={brownArrow} alt="" />
                    </button>
                    <button className="contribute-btn">
                      Collaborate <img src={brownArrow} alt="" />
                    </button>
                    <button className="contribute-btn">
                      Learn <img src={brownArrow} alt="" />
                    </button>
                    <button className="contribute-btn">
                      Internship <img src={brownArrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ongoing-projects-section"></div>
            <div className="complete-projects-section"></div>
            <div className="project-user-div">
              <div className="project-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="project-user-right">
                <div className="project-user-right1">
                  <div className="dialogue-btn gr">
                    <img src={dialogueImg} alt="" />
                    <span>Dialogue</span>
                  </div>
                  <div className="dialogue-btn re">
                    <img src={articleImg} alt="" />
                    <span>Articles</span>
                  </div>
                  <div className="dialogue-btn bl">
                    <img src={ideationImg} alt="" />
                    <span>Ideation</span>
                  </div>
                  <div className="dialogue-btn pi">
                    <img src={liveImg} alt="" />
                    <span>Live</span>
                  </div>
                  <div className="dialogue-btn yell">
                    <img src={bitcoin} alt="" />
                    <span>NFT</span>
                  </div>
                  <div className="dialogue-btn gre">
                    <img src={topicAddImg} alt="" />
                    <span>Topic</span>
                  </div>
                </div>
                <div className="project-user-right1">
                  <button className="contribute-btn">
                    Contribute <img src={brownArrow} alt="" />
                  </button>
                  <button className="contribute-btn">
                    Collaborate <img src={brownArrow} alt="" />
                  </button>
                  <button className="contribute-btn">
                    Learn <img src={brownArrow} alt="" />
                  </button>
                  <button className="contribute-btn">
                    Internship <img src={brownArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="collaborators-section">
              <p className="collaborators-heading">Collaborators Invited</p>
              <p className="collaborators-subheading">(Open Positions)</p>
              <div className="search-topic">
                <input type="text" placeholder="Search Topic Here" />{" "}
                <img src={yellowArrow2} alt="" />
              </div>
              <p className="popular-topics-heading">Popular Topics</p>
              <div className="popular-topics-wrapper">
                <div className="popular-topics">Indian Civilization</div>
                <div className="popular-topics">Shiva</div>
                <div className="popular-topics">Indological</div>
                <div className="popular-topics">Hinduism</div>
                <div className="popular-topics">Ancient Culture</div>
                <div className="popular-topics">Religion</div>
              </div>
              <div className="collaborators-cards-wrapper">
                <div className="collaborator-card">
                  <img
                    className="collaborator-card-img"
                    src={collaboratorImg}
                    alt=""
                  />
                  <div className="collaborator-card-text">
                    <div className="collaborator-card-text1">
                      <p className="collaborator-card-heading">
                        Indologist / Sanskrit Research Scholar
                      </p>
                      <p className="collaborator-card-description">
                        Specializes in studying ancient Indian scriptures,
                        languages (like Sanskrit and Pali), and historical Hindu
                        texts. Responsible for translating, interpreting, and
                        publishing scholarly works on the Vedas, Upanishads, and
                        epics like the Mahabharata and Ramayana. Often works
                        with universities, museums, or cultural institutions to
                        preserve and promote classical Indian knowledge systems.
                      </p>
                    </div>
                    <button className="collaborator-card-btn">
                      Apply <img src={collaboratorArrow} alt="" />
                    </button>
                  </div>
                </div>
                <div className="collaborator-card">
                  <img
                    className="collaborator-card-img"
                    src={collaboratorImg}
                    alt=""
                  />
                  <div className="collaborator-card-text">
                    <div className="collaborator-card-text1">
                      <p className="collaborator-card-heading">
                        Indologist / Sanskrit Research Scholar
                      </p>
                      <p className="collaborator-card-description">
                        Specializes in studying ancient Indian scriptures,
                        languages (like Sanskrit and Pali), and historical Hindu
                        texts. Responsible for translating, interpreting, and
                        publishing scholarly works on the Vedas, Upanishads, and
                        epics like the Mahabharata and Ramayana. Often works
                        with universities, museums, or cultural institutions to
                        preserve and promote classical Indian knowledge systems.
                      </p>
                    </div>
                    <button className="collaborator-card-btn">
                      Apply <img src={collaboratorArrow} alt="" />
                    </button>
                  </div>
                </div>
                <div className="collaborator-card">
                  <img
                    className="collaborator-card-img"
                    src={collaboratorImg}
                    alt=""
                  />
                  <div className="collaborator-card-text">
                    <div className="collaborator-card-text1">
                      <p className="collaborator-card-heading">
                        Indologist / Sanskrit Research Scholar
                      </p>
                      <p className="collaborator-card-description">
                        Specializes in studying ancient Indian scriptures,
                        languages (like Sanskrit and Pali), and historical Hindu
                        texts. Responsible for translating, interpreting, and
                        publishing scholarly works on the Vedas, Upanishads, and
                        epics like the Mahabharata and Ramayana. Often works
                        with universities, museums, or cultural institutions to
                        preserve and promote classical Indian knowledge systems.
                      </p>
                    </div>
                    <button className="collaborator-card-btn">
                      Apply <img src={collaboratorArrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="quarry-form-heading">For any quarry or collaboration</p>
          <form className="quarry-form">
            <div className="about-form-group">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email address" />
            </div>
            <div className="about-form-group">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="Language" />
            </div>
            <button className="quarry-form-btn">
              <span>Contact Now!</span>
              <img src={yellowArrow} alt="" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResearchProject;
