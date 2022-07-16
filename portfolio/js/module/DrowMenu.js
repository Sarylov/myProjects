let drowMenu = (data) => {
  data.forEach((project, index) => {
    let menuItem = document.createElement("a");
    menuItem.setAttribute("href", `#${index}`);
    menuItem.innerHTML = project.menuName;
    document.querySelector(".menu").append(menuItem);
  });
};

export default drowMenu;
