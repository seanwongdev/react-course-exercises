import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsList = [
  {
    name: "HTML+CSS ",
    level: "advanced",
    color: "blue",
  },
  {
    name: "JavaScript ",
    level: "advanced",
    color: "yellow",
  },
  {
    name: "Web Design ",
    level: "advanced",
    color: "beige",
  },
  {
    name: "Git and GitHub ",
    level: "intermediate",
    color: "red",
  },
  {
    name: "React ",
    level: "advanced",
    color: "teal",
  },
  {
    name: "Svelte ",
    level: "beginner",
    color: "orange",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="container">
        <Header />
        <Intro />
        <div>
          <SkillList />
        </div>
      </div>
    </div>
  );
}

const Intro = function () {
  return (
    <p>
      Full-stack web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just enjoy the Portugese sun at the beach.
    </p>
  );
};

const SkillList = function () {
  return (
    <div>
      {skillsList.map((skill) => (
        <Skills skillObj={skill} key={skill.name} />
      ))}
      {/* <Skills name="HTML+CSS 💪" color="blue" />
      <Skills name="JavaScript 💪" color="yellow" />
      <Skills name="Web Design 💪" color="beige" />
      <Skills name="Git and GitHub 👍" color="red" />
      <Skills name="React 💪" color="teal" />
      <Skills name="Svelte 👶" color="orange" /> */}
    </div>
  );
};

const Skills = function ({ skillObj }) {
  const style = { backgroundColor: `${skillObj.color}` };

  return (
    <button className="button" style={style}>
      <strong>{skillObj.name}</strong>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </button>
  );
};

const Avatar = () => {
  return <img src="jonas.jpeg" alt="avatar" width="100%;"></img>;
};

const Header = function () {
  return (
    <header>
      <h1>Jonas Schmedtmann</h1>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
