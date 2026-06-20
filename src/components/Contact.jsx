import "../Style/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading,setLoading]=useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        formData,
        publicKey,
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        setTimeout(() => {
          setStatus("");
          setLoading(false);
        }, 3000); // disappear after 3 seconds
      })
      .catch((error) => {
        setStatus("error");
        console.log(error);
        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact Me</h2>
          <p>Let's connect and discuss opportunities.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>prajapatinitish601@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 80524 01661</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Greater Noida, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={sendEmail} >
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />

            <button type="submit" disabled={loading}>{loading?"Sending...":"Send Message"}</button>
            {status === "success" && (
              <div className="success-message">Message sent successfully!</div>
            )}

            {status === "error" && (
              <div className="error-message">Failed to send message.</div>
            )}
          </form>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nitish-kumar-prajapati-9937b52a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/nitishkumarprajapati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
