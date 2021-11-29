import React from "react";
import "./Project.css";
import Project1 from './img/project1.PNG';
import Project2 from './img/project3 (2).PNG';
import Project3 from './img/project2 (3).PNG';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Project</h1>
        <p className="heading p__color">
        What i maked
        </p>
      </div>
       <div className="container">
           <div className="row">
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Mordern Eyeglasses</h4>
                     <p className="project__text">This is a full-stack website build with MERN
                        An authenticated admin see all user bookings, change status, delete
                        and add a products and make a new admin
                        </p>
                     <a href="https://mordern-eyeglasses.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Floral Design</h4>
                     <p className="project__text">It's a Floral Design website
                        On this website, there are dynamic service section
                        A user can sign in using google to book a service click a Buy
                        Now Button</p>
                     <a href="https://freash-flowers.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Fitness Club</h4>
                     <p className="project__text">Its a Fitness Related Website
                        Users Can Buy a Pakege From Here For The Training
                        They Select Their Choice And Join To The Course</p>
                     <a href=" https://fitness-club-1469d.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <a href="https://github.com/NISHE-SHOHA"><button className="view__more pointer btn">View more</button></a>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
