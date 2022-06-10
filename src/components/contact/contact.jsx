import React, { useRef }  from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_17ccy9w', 'template_ltzqw7f', form.current, 'EQjJgOF9UD8R8yvJ2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>#####@email.com</h5>
            <a href="mailto:jlpiquero@outlook.com">Send Me an Email!</a>
          </article>
      
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com">Send Me an Email!</a>
          </article>
      
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone+=+15194941574">Send Me an Email!</a>
          </article>
          {/* End of Contact Options */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact