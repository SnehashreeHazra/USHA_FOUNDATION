import React, { useEffect } from "react";
import "./UshaAbout.css";
import Footer from "../../Layout/Footer";
import yellowArrow from "../../assets/Group 194.png";
import yellowArrow2 from "../../assets/Group 196.png";
import rigvedaImg from "../../assets/Group 195.png";
import preyerImg from "../../assets/Group 197.png";
import brownArrow from "../../assets/Group 190.png";
import ushaLogo from "../../assets/USA New Logo 2.png";
import { useNavigate } from "react-router-dom";

const UshaAbout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate()
  return (
    <div className="about-container">
      <div className="about-banner">
        <div className="uni-container about-container0">
          <p className="about-left-heading">the power of one</p>
          <p className="about-left-subheading">the one place for everyone</p>
          <p className="about-banner-text">
            USHA – Universal Spiritual Human Awakening is a civilisational
            movement rooted in Vedic thought and cosmic consciousness. It is a
            response to the growing fragmentation of identity, faith, and
            society—a call to reconnect with universal principles that transcend
            time, geography, and doctrine. USHA aims to awaken a new global
            order anchored in spiritual harmony, knowledge equity, and Dhārmic
            living.
          </p>
          <p className="about-banner-text">
            At its core, USHA is not a religion, but a revival—a restoration of
            ṛta, the cosmic order. A conscious civilisation built on truth,
            reason, and oneness.
          </p>
        </div>
      </div>

      <div
        className="uni-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <p className="our-mission-heading">Our Mission</p>
        <div className="misson-container">
          <div className="mission-left">
            <div className="mission-left-div">
              <p className="mission-left-div-heading">
                01 Unification Of Mankind{" "}
              </p>
              <p className="mission-left-div-text" style={{ color: "#C41C1C" }}>
                Creating a common platform aimed at unification of mankind
                irrespective of religion, language, history and geography.{" "}
              </p>
            </div>
            <div className="mission-left-div">
              <p className="mission-left-div-heading">03 A Parallel Track </p>
              <p className="mission-left-div-text">
                A parallel track drawing nectar from all religions to trace our
                common roots.
              </p>
            </div>
          </div>
          <div className="mission-right">
            <div className="mission-right-div">
              <p className="mission-left-div-heading">
                Universal Brotherhood 02
              </p>
              <p className="mission-left-div-text" style={{ color: "#C41C1C" }}>
                Creating a universal brotherhood based on spiritual advancement
                rising above narrow boundaries of the mind.{" "}
              </p>
            </div>
            <div className="mission-right-div">
              <p className="mission-left-div-heading">
                Commune On Cooperation 04{" "}
              </p>
              <p className="mission-left-div-text">
                A commune built on coherence, convergence, and cooperation.
              </p>
            </div>
          </div>
        </div> */}
        <p className="join-awakening">Join the awakening. Be the light.</p>
        <button className="join-awakening-btn">
          <span>Join Our Movement</span> <img src={yellowArrow2} alt="" />
        </button>
        <div className="mission-why-usha-btn">
          <span onClick={() => navigate("/usha-mission")}>Mission</span>{" "}
          <span className="active">Why USHA</span>
        </div>
        <p className="call-to-wholeness">A CALL TO WHOLENESS</p>
        <p className="call-to-wholeness-subheading">
          Pūrṇatā, Prāṇa, and Puruṣārtha
        </p>
        {/* <p className="our-mission-heading">USHA MANIFESTO</p> */}
        <div className="usha-manifesto-text">
          <p>
            If you have come this far, know that it is no coincidence. There is
            a reason, and it is more profound than you imagine. You were not
            drawn here by noise, but by light. Not to follow, but to remember.
            Not to convert, but to realign. You have been called—not randomly,
            but cosmically. And you should have no doubt: this is your dharma.
            This is what you were born for.
          </p>{" "}
          <p>
            We are all born into circumstances we never choose—our land, our
            language, our faith. These shape our early identity. A child born in
            the Middle East will likely be Muslim. In Europe, Christian. In
            India, Hindu. While these identities offer belonging, they also
            become walls. We defend them, divide over them, and rarely look
            beyond. Yet beneath these constructs lies something far more
            enduring—something eternal, shared, and universal.
          </p>{" "}
          <p>
            Across civilisations, from Vedic sages to Biblical prophets,
            Buddhist monks to Indigenous shamans, one truth radiates: the light.
            The dawn. The sun. The inner flame. What separates us is language,
            story, and form. But what unites us is meaning. USHA is a return to
            that meaning—a return to ṛta, the natural cosmic order. It is a
            revival of pūrṇatā, the fullness of life. A life lived in harmony,
            vitality (prāṇa), and aligned with the four puruṣārthas—Dharma,
            Artha, Kāma, and Mokṣa.
          </p>{" "}
          <p>
            In every sunrise, there is a sacred pause—a breath between night and
            day. That is Usha, the moment of becoming. USHA is not a religion,
            nor another ideology. It is a convergence. A new dawn that invites
            us to reimagine reality—not by abandoning tradition, but by
            reweaving it with science, ecology, and higher consciousness. It is
            a space where reason meets reverence, and where personal growth
            aligns with planetary healing.
          </p>{" "}
          <p>
            Today’s world suffers from more than conflict—it suffers from
            severance. We have split the sacred from the scientific. We have
            chased progress but forgotten purpose. We perform rituals without
            understanding, consume without gratitude, and innovate without
            wisdom. USHA offers a return to coherence—a blueprint for a
            civilisation that is not utopian, but Dhārmic. One where the mind
            and body, the individual and society, the material and the mystical,
            move in rhythm.
          </p>{" "}
          <p>
            At the heart of USHA is its mission to RISE: to Reawaken Vedic
            wisdom for modern living, Integrate science with spirituality,
            Strengthen a global Dhārmic consciousness, and Establish Bhārat as
            Viśva Guru, a light to the world.
          </p>{" "}
          <p>
            But this is not philosophy alone. It is deeply practical. USHA meets
            you where you are. Whether you are a student, a teacher, a parent,
            an artist, a technologist, a monk, or a policymaker—it helps you
            live more consciously. From listening to Vedic podcasts to
            celebrating festivals with meaning—not superstition. From teaching
            your children the roots of your civilisation to restoring Dhārmic
            clarity in your relationships, your work, and your daily rituals.
            USHA transforms everyday life into sacred participation.
          </p>{" "}
          <p>
            To encourage and recognise your evolution, USHA incorporates a
            unique karma-based reward system, where every act of learning,
            sharing, and contribution earns Karmic Points—a symbolic measure of
            alignment with Dharma. As your awareness expands, you move through
            five stages of inner growth:
          </p>{" "}
          <ul className="karma-stages">
            <li>
              Jijñāsu – The Seeker: One who begins with curiosity and longing
            </li>
            <li>
              Sādhaka – The Practitioner: One who commits to discipline and
              practice
            </li>
            <li>
              Jñānī – The Knower: One who understands through study and
              introspection
            </li>
            <li>Boddha – The Awakened: One who lives in conscious alignment</li>
            <li>
              Darśī – The Seer: One who becomes a guide and mirror for others
            </li>
          </ul>
          <p>
            These are not badges. They are states of being—earned through
            sincerity, humility, and shared aspiration. They reflect the journey
            inward, and onward.
          </p>{" "}
          <p>
            USHA operates through two interwoven offerings. The USHA Vedic
            Knowledge Repository, powered by GenAI tools, makes it possible to
            decode and disseminate ancient Sanskrit texts at scale—translating
            timeless insights into modern language. And the USHA Institute of
            Vedic Research fosters rigorous inquiry into consciousness,
            cosmology, governance, and spiritual ecology. Together, they form a
            bridge between soul and science, between past and possibility.
          </p>{" "}
          <p>
            This is not a platform. It is an offering of reverence. A collective
            effort to humbly contribute to the revival of Vedic civilisation—not
            as dogma, but as living intelligence. A way of being that is
            inclusive, rational, and sacred. A world where truth is not imposed,
            but discovered. Where the Sun is not merely a deity, but a symbol of
            order, rhythm, and awakening that guides us back to our true selves.
          </p>{" "}
        </div>
        <img className="rigveda-img" src={rigvedaImg} alt="" />
        <p
          style={{
            textAlign: "center",
            fontSize: "19px",
            width: "89%",
            marginTop: "30px",
          }}
        >
          As the Rigveda declares, “Usha avartayati prajah” — Usha awakens all
          living beings. USHAAYATAN is that awakening made manifest—through
          knowledge, inquiry, remembrance, and renaissance.
        </p>
        <p className="ushaayatan">USHAAYATAN</p>
        <p className="ushaayatan-subheading">
          A Dharmic research campus to reawaken civilisation through Sanātana
          wisdom.
        </p>
        <p className="ushaayatan-text">
          USHAAYATAN is a radiant and deeply meaningful name that captures the
          soul of the movement. It unites Usha, the Vedic goddess of dawn and
          illumination, with Ayatan, a Sanskrit word meaning sanctuary, seat, or
          sacred centre. More than an organisation, USHAAYATAN is envisioned as
          a living space of awakening—a spiritual and intellectual refuge where
          ancient wisdom meets the curiosity of the modern seeker. It stands as
          a civilisational centre, a mandala of consciousness, a solar temple of
          knowledge that bridges the timeless with the emerging, the inner self
          with the shared world. It is where light becomes learning, and
          learning becomes life. As the Rigveda declares, “उषा आवर्तयति प्रजाः”
          — Usha awakens all living beings. USHAAYATAN is that awakening, made
          manifest.
        </p>
        <p className="ushaayatan-text" style={{ marginTop: "20px" }}>
          To bring this vision fully to life, we are laying the groundwork for a
          physical institute of Vedic research—a space where scholars, seekers,
          scientists, linguists, and thinkers can come together under one roof
          to study, collaborate, and advance civilisational knowledge. This will
          be a sanctuary for inquiry and innovation, rooted in Dharma and open
          to the world.
        </p>
        <p className="ushaayatan-text" style={{ marginTop: "20px" }}>
          We invite your generous support and blessings to help build
          USHAAYATAN. Your contribution is not just a donation—it is an
          investment in the future of human consciousness, in the revival of a
          knowledge system that belongs not only to India, but to the world.
        </p>
        <p className="ushaayatan-bottom-text">
          This is not a project. It is a movement. A civilisational renaissance.
          A spiritual re-architecture of humanity.
        </p>
        <div className="donate-now-btn" onClick={() => navigate('/usha-donate')}>
          Donate Now For <span>USHAAYATAN</span> <img src={preyerImg} alt="" />
        </div>
        <img className="donate-usha-logo" src={ushaLogo} alt="" />
        <p className="our-symbol">Our Symbol: A Living Mandala</p>
        <p className="ushaayatan-text">
          The USHA logo is a sunflower—not by accident, but by deep design. The
          sunflower reflects an infinitely scalable fractal—where the micro and
          macro mirror each other. Its spiral symmetry represents the threefold
          structure of existence: Bhu (Earth), Bhuva (Atmosphere), and Svah
          (Heaven). At its base sits a meditating sage—symbol of stillness,
          health, and harmony. At its centre, two entwined serpents, the eternal
          guardians of knowledge. Within this whorl rests the Shaṭkoṇa, a
          six-pointed star—symbolising the union of Śiva and Śakti, of fire and
          water, of Purusha and Prakṛti. And within that union lies a gentle
          echo of Yin-Yang—a concept of balance rooted deeply in Hindu
          cosmology, where dualities like day and night, masculine and feminine,
          and order and chaos are not in conflict, but in conscious interplay.
          The logo, like USHA itself, is a mandala of wholeness.
        </p>
        <p className="ushaayatan-text" style={{ marginTop: "20px" }}>
          This is no longer the age of belief. It is the age of becoming. The
          age where we must ask ourselves—what kind of ancestors do we wish to
          be? Will we leave behind fragments or foundations?
        </p>
        <p className="ushaayatan-text" style={{ marginTop: "20px" }}>
          We are not followers of a fading world. We are the founders of a
          future one.
        </p>
        <p className="ushaayatan-text" style={{ marginTop: "20px" }}>
          Let us rise—together—with the light. Let us choose unity over
          division. Inquiry over imposition. Wholeness over fragmentation. Let
          us reawaken the Power of One, in One Place for Everyone.
        </p>
        <p className="symbol-last-text" style={{ marginTop: "20px" }}>
          Let us build USHA. Let us become USHA. The Universal Spiritual Human
          Awakening.
        </p>
        <button className="join-awakening-btn" style={{marginBottom:'80px'}}>
          <span>Join Our Movement</span> <img src={brownArrow} alt="" />
        </button>

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
      <Footer />
    </div>
  );
};

export default UshaAbout;
