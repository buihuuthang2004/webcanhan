import React, { useRef, useState } from 'react';
import Footer from './components/Footer';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbynOQ5auz6NiUE06rtm6WvKVE5wbtOAyjuyKtdmYEhLqBTSheEpQpg0FeITrVrD4A/exec'; // <-- Dán link web app Google Apps Script ở đây

const Contact: React.FC<{language?: string}> = ({language}) => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess(false);
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const phone = phoneRef.current?.value || '';
    const message = messageRef.current?.value || '';
    if (!name || !email || !message) {
      setError('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      setSending(false);
      return;
    }
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });
      if (res.ok) {
        setSuccess(true);
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        setError('Gửi thất bại, vui lòng thử lại.');
      }
    } catch (err) {
      setError('Có lỗi kết nối, vui lòng thử lại.');
    }
    setSending(false);
  };

  return (
    <>
      <section className="contact-section animate-fade-in">
        <h2 className="contact-title" id="contact-title">Liên hệ với Thắng</h2>
        <div className="contact-content">
          <form className="contact-form animate-slide-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder=" " required ref={nameRef} />
              <label htmlFor="name">Họ và tên *</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder=" " required ref={emailRef} />
              <label htmlFor="email">Email *</label>
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder=" " ref={phoneRef} />
              <label htmlFor="phone">Số điện thoại</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder=" " rows={4} required ref={messageRef}></textarea>
              <label htmlFor="message">Nội dung *</label>
            </div>
            <button type="submit" className="btn btn-primary animate-bounce" disabled={sending}>{sending ? 'Đang gửi...' : 'Gửi liên hệ'}</button>
            {success && <div style={{color:'#219653',marginTop:'1em'}}>Gửi thành công! Cảm ơn bạn đã liên hệ.</div>}
            {error && <div style={{color:'#d32f2f',marginTop:'1em'}}>{error}</div>}
          </form>
          <div className="contact-info animate-slide-up">
            <h4>Thông tin liên hệ</h4>
            <p><b>Email:</b> <a href="mailto:buihuuthang204@gmail.com" style={{display:'inline-flex',alignItems:'center',gap:'5px'}}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"></path></svg>
              buihuuthang204@gmail.com
            </a></p>
            <p><b>Điện thoại:</b> 0123 456 789</p>
            <p><b>Địa chỉ:</b> Bửu Long Biên Hòa Đồng Nai</p>
            <div className="contact-socials">
              <a href="https://www.facebook.com/thang.buihuu.2302" className="footer-link" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path></svg>
                Facebook
              </a>
              <a href="https://github.com/buihuuthang204" className="footer-link" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
