let drowContent = (data) => {
  let id = 0;

  data.forEach((el) => {
    let year = document.createElement("div");
    year.className = "year";
    year.innerHTML = `<h3>${el[0]}</h3>`;
    document.querySelector(".content").append(year);

    el[1].forEach((project, index) => {
      let projects = document.createElement("div");
      projects.className = "project";
      projects.setAttribute("id", id);
      id += 1;
      projects.innerHTML = projectsHTML(project);
      document.querySelector(".content").append(projects);

      if (index != el[1].length - 1) {
        let line = document.createElement("div");
        line.className = "line";
        document.querySelector(".content").append(line);
      }
    });
  });
};
let projectsHTML = (project) => {
  let res = "";
  let title = `<h2>${project.name}</h2>`;
  let tools = "<ul class = 'tools'>";
  project.tools.forEach((tool) => {
    tools += `<li>${tool}</li>`;
  });
  tools += "</ul>";
  let gallary = "<div class = 'gallery'>";
  project.imgSrc.forEach((src) => {
    gallary += `<div>
                  <img src = '${src}'/>
                </div>`;
  });
  gallary += "</div>";
  let text = `<p>${project.text}</p>`;

  let more = project.moreHref
    ? `<a class = 'more' target="_blank" href='${project.moreHref}'>подробнее</a>`
    : "";
  let showProject = project.showProject
    ? `<a class = 'more' target="_blank" href='${project.showProject}'>результат</a>`
    : "";
  let showCode = project.showCode
    ? `<a class = 'more' target="_blank" href='${project.showCode}'>посмотреть код</a>`
    : "";

  res += title + tools + text + gallary + more + showCode + showProject;
  return res;
};

export default drowContent;
