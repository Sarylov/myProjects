import data from "./module/Data.js";
import drowContent from "./module/DrowContent.js";
import increaseImg from "./module/IncreaseImg.js";
import getAllProjects from "./module/GetAllProjects.js";
import drowMenu from "./module/DrowMenu.js";
import drowUpBtn from "./module/DrowUpBtn.js";
import SmoothScroll from "./module/SmoothScroll.js";
import drowThemeToggle from "./module/DrowThemeToggle.js";
import drowSocial from "./module/DrowSocial.js";

window.onload = function () {
  drowMenu(getAllProjects(data));
  drowUpBtn();
  drowContent(data);
  increaseImg();
  SmoothScroll();
  drowThemeToggle();
  drowSocial();
};
