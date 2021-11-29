import React from "react";
import "./About.css";
import aboutImg from "./img/aboutpic.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
         
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am Passionate about all things Web Developing. I work hard. I care about writing clean code and I genuinely love to learn. I'm currently looking for the right opportunity to work In an environment that will help me progress into a Full Stack developer.
              </p>
              <p className="about__text p__color">
                I am a Mernstack developer. I work with JavaScript. Insha Allah, my codes are clear and visible and some of them are unique. Alhamdulillah, I have a small bed and a fairly large project. There are more projects, especially on the Marn project. In the future I want to work as a better and creative developer ...!
              </p>
              <p className="about__text p__color">
               I work with JavaScript. Insha Allah, my codes are clear and visible and some of them are unique. Alhamdulillah, I have a small bed and a fairly large project. There are more projects, especially on the Marn project. In the future I want to work as a better and creative developer ...!
              </p>
            </div>
          </div>
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
