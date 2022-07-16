let drowThemeToggle = () => {
  let field = document.createElement("div");
  field.className = "theme-toggle";
  field.innerHTML = `<span class = "theme-point"></span>`;
  document.querySelector("body").append(field);

  field.onclick = (e) => {
    document.querySelector("body").classList.toggle("dark-theme");
  };
};

export default drowThemeToggle;
