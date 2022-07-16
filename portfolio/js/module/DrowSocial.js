let drowSocial = () => {
  let social = document.createElement("div");
  let socialBar = document.createElement("div");
  social.className = "social-wrap";
  social.innerHTML = `<div class="social">
                        <a target="_blank" href="https://www.linkedin.com/feed/" class="fa-brands fa-linkedin"></a>
                        <a target="_blank" href="https://github.com/Sarylov" class="fa-brands fa-github"></a>
                        <a target="_blank" href="https://vk.com/sarylov" class="fa-brands fa-vk"></a>
                        <a target="_blank" href="https://t.me/jalsanSarylov" class="fa-brands fa-telegram"></a>
                      </div>`;
  socialBar.innerHTML = `<div class="line"></div>
                      <div class="socialBar">                      
                      <h2>напишите мне :)</h2>
                        <a target="_blank" href="https://www.linkedin.com/feed/" class="fa-brands fa-linkedin"></a>
                        <a target="_blank" href="https://vk.com/sarylov" class="fa-brands fa-vk"></a>
                        <a target="_blank" href="https://t.me/jalsanSarylov" class="fa-brands fa-telegram"></a>
                      </div>`;
  // https://t.me/jalsanSarylov
  document.querySelector(".content").append(social);
  document.querySelector(".content").append(socialBar);
};

export default drowSocial;
