let drowParticles = () => {
  let style = document.createElement("link");
  let script1 = document.createElement("script");
  let script2 = document.createElement("script");
  style.setAttribute("href", "css/libs/style.css");
  script1.setAttribute("src", "js/libs/particles.js");
  script2.setAttribute("src", "js/libs/background.js");
  document.querySelector("head").append(style);
  document.querySelector("body").append(script1);
  document.querySelector("body").append(script2);
};

export default drowParticles;
