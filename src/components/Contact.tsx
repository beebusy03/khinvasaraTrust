
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <section id="contact" className="py-28 px-[5%] bg-white">
      {/* Section Header */}
      <div className="text-center max-w-[750px] mx-auto mb-20">
        <span className="section-badge">
          <i className="fas fa-envelope"></i> Get In Touch
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-dark mb-5 leading-tight tracking-tight">
          Contact Us
        </h2>
        <p className="text-text-light text-lg leading-relaxed">
          Have questions or want to contribute? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
        {/* Contact Info */}
        <div className="gradient-primary p-14 rounded-2xl text-white shadow-custom-lg">
          <h3 className="text-3xl mb-4 font-serif">Contact Information</h3>
          <p className="opacity-90 mb-10 leading-relaxed">
            Reach out to us through any of the following channels. We're here to help and answer your questions.
          </p>

          {[
            { icon: 'fas fa-map-marker-alt', title: 'Our Address', content: "'Aastha', Plot No. 8, Madhukunj Hsg Society,<br/>Panchavati, Pashan Road, Pune - 08" },
            { icon: 'fas fa-phone-alt', title: 'Phone Number', content: '+91 20-2589 8536<br/>+91 94226 46691' },
            { icon: 'fas fa-envelope', title: 'Email Address', content: 'info@khinvasaratrust.org<br/>khinvasaratrust@gmail.com' },
            { icon: 'fas fa-globe', title: 'Website', content: 'www.khinvasaratrust.org' },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-5 mb-8">
              <div className="w-[50px] h-[50px] bg-white/15 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                <i className={item.icon}></i>
              </div>
              <div>
                <h4 className="text-base mb-2 font-semibold">{item.title}</h4>
                <p className="opacity-90 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 mt-10">
            {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'youtube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-1"
              >
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-8">
          <h3 className="text-3xl mb-6 text-dark font-serif">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="mb-7">
                <label htmlFor="name" className="block mb-3 font-semibold text-dark text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div className="mb-7">
                <label htmlFor="email" className="block mb-3 font-semibold text-dark text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="mb-7">
                <label htmlFor="phone" className="block mb-3 font-semibold text-dark text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>
              <div className="mb-7">
                <label htmlFor="subject" className="block mb-3 font-semibold text-dark text-base">
                  Subject *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  <option value="">Select a subject</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>
            <div className="mb-7">
              <label htmlFor="message" className="block mb-3 font-semibold text-dark text-base">
                Your Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white min-h-[150px] resize-y focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact