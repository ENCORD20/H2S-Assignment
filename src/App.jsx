import { useState } from "react";
import "./App.css";
import modelImg from "./assets/model_img.png";
import astronautImg from "./assets/astronaut.png";
import brainImg from "./assets/brain_img.jpg";
import footerImg from "./assets/footer_img.png";

const navItems = [
  "About",
  "How to participate?",
  "Challenges",
  "Schedules",
  "Rewards",
  "FAQs",
];

const participantTypes = [
  "Undergraduate Students",
  "Graduate/ Postgraduate Students",
  "PhD Students/ Research Scholars",
];

const benefits = [
  {
    title: "Mentorship from Experts",
    text: "Gain invaluable insights and guidance from experienced technologists and domain experts.",
  },
  {
    title: "Networking",
    text: "Connect with peers, professionals, and innovation leaders from across the nation.",
  },
  {
    title: "Internship Opportunities",
    text: "Stand a chance to secure internships at top institutions and innovation labs.",
  },
  {
    title: "Real-World Impact",
    text: "Contribute to meaningful challenges that aim to improve lives and systems at scale.",
  },
];

const steps = [
  ["Register for Hackathon", "Sign up now to participate in the hackathon."],
  [
    "Form your Teams",
    "Collaborate with like-minded individuals to form teams.",
  ],
  ["Choose a Challenge", "Select from the list of challenges provided."],
  [
    "Innovate and Develop",
    "Work on your solution, supported by resources and mentorship.",
  ],
  ["Submit Your Solution", "Present your innovative ideas for evaluation."],
];

const challenges = [
  "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density.",
  "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders.",
  "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines.",
  "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones.",
  "Create a decentralized platform that allows institutions to issue and verify digital certificates securely.",
  "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals.",
  "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.",
  "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet.",
  "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages.",
  "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises.",
  "Build a pipeline that processes aerial imagery to detect crop disease and recommend corrective actions.",
  "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues.",
];

const schedule = [
  ["Registrations and Idea Submission Open", "Thu, Jul 04, 2025"],
  ["Introductory and Problem Statement Explainer Session", "Thu, Jul 08, 2025"],
  ["Mentor-Mentee Connects - Begins", "Thu, Jul 08, 2025"],
  ["Mentor-Mentee Connects - Ends", "Tue, Jul 16, 2025"],
];

function ScheduleSlider({ schedule }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [title, date] = schedule[activeIndex];

  return (
    <div className="timeline-slider">
      <div className="timeline-card">
        <span className="timeline-step">
          Step {activeIndex + 1} of {schedule.length}
        </span>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>

      <div className="timeline-control">
        <input
          type="range"
          min="0"
          max={schedule.length - 1}
          value={activeIndex}
          onChange={(event) => setActiveIndex(Number(event.target.value))}
          aria-label="Hackathon schedule slider"
        />
        <div className="timeline-ticks">
          {schedule.map(([,], idx) => (
            <span
              key={idx}
              className={idx === activeIndex ? "tick active" : "tick"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const rewards = [
  [
    "Mentorship from Experts",
    "Work under the guidance of domain professionals and technology mentors.",
  ],
  [
    "Recognition and Internship Opportunities",
    "Outstanding performers may receive offers for internships or collaboration opportunities.",
  ],
];

const faqs = [
  [
    "Who can participate in the hackathon?",
    "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.",
  ],
  [
    "What should be the ideal team size?",
    "Each team must consist of 5 to 4 members, possibly from different colleges/universities.",
  ],
  [
    "What is the cost of participating?",
    "Participation is entirely free. No registration or submission fee is required.",
  ],
  [
    "Can a recent graduate participate?",
    "Only current students from the 2024-25 academic year are eligible.",
  ],
];

function ImageSlot({ label, className = "", src = null }) {
  if (src) {
    return (
      <div className={`image-slot ${className}`} aria-label={label}>
        <img src={src} alt={label} />
      </div>
    );
  }
  return <div className={`image-slot ${className}`} aria-label={label} />;
}

function App() {
  return (
    <main className="site-shell">
      <img src={brainImg} alt="Brain" className="brain-image" />
      <section className="hero-section" id="top">
        <nav className="nav-pill" aria-label="Primary navigation">
          <a className="brand" href="#top">
            H2S
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-").replace("?", "")}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a className="sign-in" href="#top">
            Sign In
          </a>
        </nav>

        <div className="hero-art hero-art-one" />
        <div className="hero-art hero-art-two" />

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              CODE THE
              <span>FUTURE</span>
            </h1>
            <ImageSlot
              label="Hero Image"
              className="model-slot"
              src={modelImg}
            />
            <p className="tagline">WHERE INNOVATION BECOMES REALITY</p>
          </div>
          <a className="register-ghost" href="#who-can-participate">
            Register Now
          </a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="pixel-block pixel-left" />
        <div className="pixel-block pixel-right" />
        <p className="eyebrow">ABOUT HACKATHON</p>
        <h2>WHO CAN PARTICIPATE?</h2>
        <p className="intro">
          Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating
          platform designed to foster innovation and creativity in the domain of
          advanced technology and futuristic solutions. Organized by the
          National Center for Applied Research and supported by Hack2skill, this
          hackathon invites undergraduate students, graduate/postgraduate
          students, and PhD researchers to collaborate and solve critical
          challenges.
        </p>
        <a className="primary-button" href="#challenges">
          Apply Now
        </a>
      </section>

      <section className="eligibility" id="who-can-participate">
        <p className="section-kicker">WHO CAN PARTICIPATE?</p>
        <div className="eligibility-grid">
          {participantTypes.map((type) => (
            <article className="glass-card" key={type}>
              {type}
            </article>
          ))}
        </div>
        <p className="note">
          Note: Working Professionals are not eligible to participate in the
          hackathon.
        </p>
      </section>

      <section className="hackathon-info">
        <div className="info-copy">
          <h2>WHAT IS THE HACKATHON?</h2>
          <p>
            The Lorem Ipsum Innovation Hackathon is a flagship event crafted to
            uncover pioneering ideas in science, technology, and system design.
            As technological advancements accelerate globally, this initiative
            aims to bridge academic knowledge with practical implementation.
          </p>
          <p>
            Participants will work on challenge statements designed by leading
            R&amp;D units, applying theoretical expertise to build innovative
            prototypes and solutions with potential real-world application.
          </p>
          <div className="closing-row">
            <span>Submission Closing In:</span>
            <strong>16d 12h 42m 31s</strong>
            <a href="#top">Register Now</a>
          </div>
        </div>
        <div
          className="image-cluster"
          aria-label="Hackathon image placeholders"
        >
          <ImageSlot label="Image" className="small top-left" />
          <ImageSlot label="Image" className="medium top-right" />
          <ImageSlot label="Image" className="wide middle-left" />
          <ImageSlot label="Image" className="small bottom-right" />
          <ImageSlot label="Image" className="medium bottom-left" />
        </div>
      </section>

      <section className="benefits" id="how-to-participate">
        <p className="section-kicker">WHY PARTICIPATE?</p>
        <div className="orbit-stage">
          <div className="orbit-rings" />
          <ImageSlot
            label="Astronaut Image"
            className="astronaut-slot"
            src={astronautImg}
          />
          <div className="benefit-panel panel-left">
            {benefits.slice(0, 2).map((benefit) => (
              <article key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
          <div className="benefit-panel panel-right">
            {benefits.slice(2).map((benefit) => (
              <article key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="section-kicker">HOW TO PARTICIPATE?</p>
        <div className="steps-grid">
          {steps.map(([title, text], index) => (
            <article className="step-card" key={title}>
              <div className="step-icon">{index + 1}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="challenges-section" id="challenges">
        <p className="section-kicker">CHALLENGES</p>
        <div className="challenge-list">
          {challenges.map((challenge, index) => (
            <article className="challenge-row" key={challenge}>
              <span>[ {String(index + 1).padStart(2, "0")} ]</span>
              <ImageSlot label="Image" />
              <p>{challenge}</p>
              <a href="#top" aria-label={`Open challenge ${index + 1}`}>
                {"\\2197"}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule-section" id="schedules">
        <p className="section-kicker">HACKATHON SCHEDULE</p>
        <ScheduleSlider schedule={schedule} />
      </section>

      <section className="rewards-section" id="rewards">
        <p className="section-kicker">REWARDS AND BENEFITS</p>
        <div className="rewards-grid">
          {rewards.map(([title, text]) => (
            <article className="glass-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faqs">
        <p className="section-kicker">FREQUENTLY ASKED QUESTION</p>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article className="faq-row" key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-section">
        <img src={footerImg} alt="Footer" className="footer-image" />
      </footer>
    </main>
  );
}

export default App;
