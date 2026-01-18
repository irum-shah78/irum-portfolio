import React, { useState, useEffect } from 'react';
import { Send, Mail, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus('error');
      showToast('Email service not configured. Please check environment variables.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Contact from Portfolio',
          message: formData.message,
          to_email: PERSONAL_INFO.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 pb-20">
      {toast.show && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-top duration-300">
          <div className="bg-slate-900 border border-blue-500/30 rounded-xl px-6 py-4 shadow-lg shadow-blue-500/20 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <p className="text-white font-medium">{toast.message}</p>
          </div>
        </div>
      )}
      
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Ready to discuss your next project or collaborate on something amazing."
        icon={<Send size={24}/>}
      />
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white">Let's build together</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500"><Mail size={24}/></div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Me</p>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-medium hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(PERSONAL_INFO.email);
                        showToast('Email copied to clipboard!');
                      }}
                      className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
                      title="Copy email"
                    >
                      (Copy)
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500"><Linkedin size={24}/></div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">LinkedIn</p>
                  <p className="font-medium">/in/irum-shahzadi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-slate-900/30 p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Subject</label>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Discussion" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
            <textarea 
              rows={5} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your project details..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
              ✗ Failed to send message. Please try again or email me directly at {PERSONAL_INFO.email}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

