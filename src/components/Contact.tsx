import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  // Allow other components (e.g. CTA buttons) to prefill the subject
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const detail = (e as CustomEvent<{ subject?: string }>).detail;
      if (detail?.subject) {
        setFormData(prev => ({ ...prev, subject: detail.subject as string }));
      }
    };
    window.addEventListener('prefill-contact-subject', handlePrefill);
    return () => window.removeEventListener('prefill-contact-subject', handlePrefill);
  }, []);

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
              <p>C/O Onyx Automation Flat No 302, Fortune House, Baner Pashan Link Road, Baner, Pune-411045</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>Phone Number</h4>
              <p>+91 94226 46691</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email Address</h4>
              <p>info@khinvasaratrust.org</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-globe"></i>
            <div>
              <h4>Website</h4>
              <p>www.khinvasaratrust.org</p>
            </div>
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
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9422646691" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="donation">Donation</option>
                  <option value="sahayogi">Sahayogi Sabhasad</option>
                  <option value="member">Become a Member</option>
                  <option value="volunteer">Volunteer</option>
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