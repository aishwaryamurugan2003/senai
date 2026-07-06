import React, { useState } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page" style={{ paddingTop: '160px' }}>
      <div className="container">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have questions about our research or interested in collaboration? Reach out to us."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', marginBottom: '5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary-indigo)' }}>Lab Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f0f5', padding: '1rem', borderRadius: '4px', color: 'var(--color-primary-indigo)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Address</h4>
                  <p style={{ color: '#666', lineHeight: 1.5 }}>
                    SENAI Lab<br />
                    Department of Chemical Engineering, IIT Madras<br />
                    Chennai, Tamil Nadu 600036, India
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f0f5', padding: '1rem', borderRadius: '4px', color: 'var(--color-primary-indigo)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Email</h4>
                  <p style={{ color: '#666' }}>raghur@dsai.iitm.ac.in</p>
                  <p style={{ color: '#666' }}>senai-lab@iitm.ac.in</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: '#f0f0f5', padding: '1rem', borderRadius: '4px', color: 'var(--color-primary-indigo)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Phone</h4>
                  <p style={{ color: '#666' }}>+91 44 2257 4173</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '3rem', border: '1px solid var(--color-light-lavender)', borderRadius: '8px', boxShadow: 'var(--shadow-subtle)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ background: '#e7f5ed', color: '#1a5f3a', padding: '2rem', borderRadius: '4px', textAlign: 'center' }}
              >
                <h4 style={{ marginBottom: '0.5rem' }}>Thank You!</h4>
                <p>Your message has been sent successfully. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px' }} 
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    style={{ padding: '0.8rem', border: '1px solid var(--color-light-lavender)', borderRadius: '4px', resize: 'none' }} 
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
