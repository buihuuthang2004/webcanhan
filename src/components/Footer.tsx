import React from 'react';

const Footer: React.FC = () => (
  <footer className="main-footer animate-fade-in" style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', width:'100vw', left:'50%', right:'50%', transform:'translateX(-50%)', boxSizing:'border-box'}}>
    <div className="footer-content" style={{display:'flex',justifyContent:'center',gap:'2.5rem',width:'100%',maxWidth:'1100px',margin:'0 auto'}}>
      <div className="footer-col">
        <div className="footer-badge">LIÊN HỆ NHANH</div>
        <h4>Thông tin liên hệ</h4>
        <a href="mailto:buihuuthang204@gmail.com" className="footer-link" style={{display:'flex',alignItems:'center',gap:'6px'}}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"></path></svg>
          buihuuthang204@gmail.com
        </a>
        <a href="tel:0123456789" className="footer-link" style={{display:'flex',alignItems:'center',gap:'6px'}}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 22 2 16.39 2 9.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"></path></svg>
          0123 456 789
        </a>
        <div className="footer-link" style={{gap:'6px'}}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
          Bửu Long, Biên Hòa, Đồng Nai
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-badge">KẾT NỐI</div>
        <h4>Mạng xã hội</h4>
        <a href="https://www.facebook.com/thang.buihuu.2302" className="footer-link" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path></svg>
          Facebook
        </a>
        <a href="https://github.com/buihuuthang204" className="footer-link" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
          Github
        </a>
      </div>
      <div className="footer-col">
        <div className="footer-badge">ĐỊA CHỈ</div>
        <h4>Văn phòng</h4>
        <div className="footer-link" style={{gap:'6px'}}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
          Bửu Long, Biên Hòa, Đồng Nai
        </div>
      </div>
    </div>
    <div className="footer-bottom" style={{textAlign:'center',marginTop:'1.2rem',width:'100%'}}>© 2025 Bùi Hữu Thắng. All rights reserved.</div>
  </footer>
);

export default Footer;