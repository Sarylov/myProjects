$(document).ready(() => {
  $(".btn-hide__wrapper").click(toggleBtn);
  $(".search").keyup((e) => {
    search(e);
  });

  mobileAdap();

  // $(window).resize(mobileAdap);

  drowElMenu(data);
  $("#step0").addClass("active");
});

let mobileAdap = () => {
  if (window.innerWidth < 1200) {
    $(".btn-hide__wrapper").removeClass("btn-hide__close");
    $(".menu").addClass("menu-hide");
    if (window.innerWidth < 1200) {
      $(".content-menu-close").addClass("menu-close__hidden");
    }
  }
};

let reloadFile = (e, nameFile) => {
  let id = e.target.id;
  $(".chapter__item").removeClass("active");
  $(`#${id}`).addClass("active");

  let name = nameFile.replace("view?usp=sharing", "preview");
  $("iframe").attr("src", `${name}`);
};

let toggleBtn = () => {
  $(".btn-hide__wrapper").toggleClass("btn-hide__close");
  $(".menu").toggleClass("menu-hide");
  if (window.innerWidth < 1200) {
    $(".content-menu-close").toggleClass("menu-close__hidden");
  }
};

let search = (e) => {
  let getSteps = () => {
    let index = 1;
    let res = [];

    for (key in data) {
      let arr = Object.keys(data[key]);
      arr.forEach((el) => {
        res.push(`${index}.${el}`);
        index++;
      });
    }

    return res;
  };
  let val = e.target.value.trim();
  let steps = getSteps();

  for (let i = 0; i < steps.length; i++) {
    if (!steps[i].includes(val) && val != "") {
      $(`#step${i}`).addClass("step-hide");
      $(".steps h2").addClass("step-hide");
    } else if (val == "") {
      $(`#step${i}`).removeClass("step-hide");
      $(".steps h2").removeClass("step-hide");
    }
  }
};

let drowElMenu = (obj) => {
  let htmlStr = "";
  let id = 0;
  let numStep = 1;

  let drowButton = (obj) => {
    let res = "";
    let incId = () => {
      return id++;
    };
    let incNumStep = () => {
      return numStep++;
    };
    for (key in obj) {
      res += `        
      <button
        onclick="reloadFile(event,'${obj[key]}')"
        class="chapter__item"
        id="step${incId()}"
      >
      ${incNumStep()}.
      ${key}
      </button>`;
    }
    return res;
  };

  for (key in obj) {
    htmlStr += `
    <div class="chapter">
      <h2>${key}</h2>
      ${drowButton(obj[key])}
    </div>
    `;
  }

  $(".steps").html(htmlStr);
};
