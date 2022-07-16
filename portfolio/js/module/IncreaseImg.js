let IncreaseImg = () => {
  // слушаем нажатие на картинку
  let imgElements = document.querySelectorAll("img");
  imgElements.forEach((el) => {
    el.onclick = () => {
      createBigImg(el);
    };
  });
};

let createBigImg = (el) => {
  let src = el.getAttribute("src");
  let bigImgEl = document.createElement("div");
  bigImgEl.className = "big-img";
  bigImgEl.innerHTML = `<div class="image-wrap__big">
                            <img src="${src}">
                        </div>`;
  document.querySelector("html").classList.add("disableScroll");
  document.body.append(bigImgEl);
  // слушаем нажатие на открытую картинку
  bigImgEl.onclick = () => {
    document.querySelector("html").classList.remove("disableScroll");
    bigImgEl.remove();
  };
};

export default IncreaseImg;
