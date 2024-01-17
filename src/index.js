// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// function App() {
//   return (
//     <div>
//       className="card"
//       <div>className="data"</div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="Avatar" src="./img_0063.jpg" alt="Ashish Photo" />;
// }

// function intro() {
//   return (
//     <div className="data" styles="data">
//       <h1>Ashish's Bio</h1>
//       <p>I am a full stack developer with 2 years of experence</p>
//     </div>
//   );
// }

// function skilllist() {
//   return (
//     <div className="skillset">
//       <Skill skill="React" emoji="🥱😶‍🌫️" />
//       <Skill skill="HTML" emoji="😁😁😁😁" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill">
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "EFD818",
  },
  {
    skill: "svelte",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Git and GitHub",
    level: "Beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill(skill, color, level) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "👶"}
        {level === "intermediate" && "👶"}
        {level === "advanced" && "👶"}
      </span>
    </div>
  );
}
