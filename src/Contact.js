import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Result =() =>{
    return(
        <p>Your massage has been successfully sent.i will contact you soon</p>
    )
}

function Contact() {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sxole7w', 'template_h1a47vg', e.target, 'user_WEWhzVC7emAjcet3WxYHp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    //hide result
    setTimeout(() =>{
        showResult(false)
    }, 5000);

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">I am available for web Develpoment. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>01746414656</strong> or email <strong>nazmakhatunnishe@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <form action="" onSubmit={sendEmail} >
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                           <div className="row">{result ? <Result/> : null}
                           </div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
