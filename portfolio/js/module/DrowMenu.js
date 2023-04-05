let drowMenu = (data) => {
  data.forEach((projectsForYear, index) => {
    const year = projectsForYear[0]
    let menuItem = document.createElement("a");
    menuItem.setAttribute("href", `#${index}`);
    menuItem.innerHTML = year;
    document.querySelector(".menu").append(menuItem);
  });
};

export default drowMenu;
