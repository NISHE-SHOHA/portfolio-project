import React from "react";
import "./Blog.css";
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Blog</h1>
        <p className="heading p__color">
        WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT.,
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Every React Developer Should Know The Fundamental Concepts Of React.js</h5>
                         <h4 className="project__text">If you’re facing performance problems in your React apps, make sure you’re testing with the minified production build. By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='https://image.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-752.jpg' alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Cross Browser Testing and ES6 Explanation</h5>
                         <h4 className="project__text">As a web developer, it is your responsibility to make sure that your project work and works for all your users. Cross-browser testing is the practice of making sure that the websites and web apps you create work across an acceptable number of web browsers. You need to think about:</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src='https://image.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg'alt="" className="project__img"  />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Boost Your JavaScript Jetpack.</h5>
                         <h4 className="project__text"> String.prototype.charAt():-
                          The strings object is used to represent and manage a series of characters. The charAt() method returns a new string. Syntax charAt(index) . If the index is not provided, the default is 0, so the first character of the string is returned. If the index is out of range, charAt() returns an empty string.</h4>
                         <a href="#" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
