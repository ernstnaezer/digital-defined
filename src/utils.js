export const tokyo = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url]");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  imageToSvg() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");
      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");
          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }
  },
  portfolioHover() {
    const tokyo_tm_portfolio_animation_wrap = document.querySelectorAll(
        ".tokyo_tm_portfolio_animation_wrap"
      ),
      tokyo_tm_portfolio_titles = document.querySelector(
        ".tokyo_tm_portfolio_titles"
      );
    tokyo_tm_portfolio_animation_wrap.forEach((element) => {
      element.addEventListener("mousemove", () => {
        let title = element.getAttribute("data-title"),
          category = element.getAttribute("data-category");
        if (title) {
          tokyo_tm_portfolio_titles.classList.add("visible");
          tokyo_tm_portfolio_titles.innerHTML =
            title + '<span class="work__cat">' + category + "</span>";
        }
        document.addEventListener("mousemove", (e) => {
          tokyo_tm_portfolio_titles.style.left = `${e.clientX - 10}px`;
          tokyo_tm_portfolio_titles.style.top = `${e.clientY + 25}px`;
        });
      });
      element.addEventListener("mouseleave", () => {
        tokyo_tm_portfolio_titles.classList.remove("visible");
      });
    });
  },
};
