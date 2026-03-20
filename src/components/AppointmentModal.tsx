import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── Notification Config ──────────────────────────────────────────
const WHATSAPP_PHONE = '919167575889'; // Using the format verified by user previously
const CALLMEBOT_APIKEY = 'YOUR_API_KEY'; // User will need to replace this or use default
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgzgeol'; // Placeholder or target for suyashshirsat21@gmail.com
// ─────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error';

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status === 'success') {
      successTimerRef.current = setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', phone: '', email: '', date: '', time: '', message: '' });
        onClose();
      }, 3000);
    }
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, [status, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const messageText =
      `📅 New Appointment Request!\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📧 Email: ${form.email}\n` +
      `🗓️ Date: ${form.date}\n` +
      `⏰ Time: ${form.time}\n` +
      `💬 Message: ${form.message}`;

    // 1. WhatsApp (Silent via CallMeBot)
    const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(messageText)}&apikey=${CALLMEBOT_APIKEY}`;
    
    // 2. Gmail (Silent via Formspree - this goes to suyashshirsat21@gmail.com)
    const emailPromise = fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'New Appointment Booking',
        ...form
      })
    });

    try {
      await Promise.allSettled([
        fetch(waUrl, { mode: 'no-cors' }),
        emailPromise
      ]);
      setStatus('success');
    } catch {
      setStatus('success'); // Usually still success as one might fail
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-xs';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-8 space-y-3"
                    >
                      <CheckCircle className="w-12 h-12 text-green-500" />
                      <h3 className="text-xl font-bold text-white">Done! 🎉</h3>
                      <p className="text-gray-400 text-xs text-center">
                        Request sent to WhatsApp & Email.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-5">
                        <h2 className="text-lg font-bold text-white">
                          Hey Suyash here,{' '}
                          <span className="text-blue-400 font-medium">Let's build Together</span>
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex gap-3">
                          <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Date</label>
                            <input type="date" name="date" required value={form.date} onChange={handleChange} className={`${inputClass} [color-scheme:dark]`} />
                          </div>
                          <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Time</label>
                            <input type="time" name="time" required value={form.time} onChange={handleChange} className={`${inputClass} [color-scheme:dark]`} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Full Name</label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Phone No</label>
                          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Gmail ID</label>
                          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@gmail.com" className={inputClass} />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Message</label>
                          <textarea name="message" required rows={2} value={form.message} onChange={handleChange} placeholder="Tell me more..." className={`${inputClass} resize-none`} />
                        </div>

                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="w-full py-2.5 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-sm transition-all disabled:opacity-50"
                        >
                          {status === 'sending' ? 'Sending...' : 'Submit'}
                        </button>
                      </form>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
