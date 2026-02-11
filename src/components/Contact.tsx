import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-envelope"></i> Get In Touch</span>
        <h2>Contact Us</h2>
        <p>Have questions or want to contribute? We'd love to hear from you.</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Reach out to us through any of the following channels. We're here to help and answer your questions.</p>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Our Address</h4>
              <p>'Aastha', Plot No. 8, Madhukunj Hsg Society,<br />Panchavati, Pashan Road, Pune - 08</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>Phone Number</h4>
              <p>+91 20-2589 8536<br />+91 94226 46691</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Address</h4>
              <p>info@khinvasaratrust.org<br />khinvasaratrust@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-globe"></i>
            <div>
              <h4>Website</h4>
              <p>www.khinvasaratrust.org</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;