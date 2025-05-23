import React from 'react';
import Footer from './components/Footer';

const skills = [
  {
    category: 'Front-end',
    items: [
      'HTML5', 'CSS3', 'Sass', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Next.js', 'TailwindCSS', 'Material UI', 'Framer Motion'
    ]
  },
  {
    category: 'Back-end',
    items: [
      'Node.js', 'Express', 'RESTful API', 'MongoDB', 'MySQL', 'Firebase', 'JWT Auth'
    ]
  },
  {
    category: 'UI/UX & Tools',
    items: [
      'Figma', 'Adobe XD', 'Photoshop', 'Responsive Design', 'Agile/Scrum', 'Git', 'Github', 'CI/CD', 'Jira', 'Trello'
    ]
  }
];

const Skills: React.FC<{language?: string}> = ({language}) => (
  <>
    <section className="skills-section animate-fade-in">
      <h2 className="skills-title">
        <span className="skills-title-icon" aria-hidden="true" style={{display:'inline-flex',alignItems:'center',verticalAlign:'middle',marginRight:'0.7em'}}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{display:'block'}}><circle cx="16" cy="16" r="16" fill="#2196f3"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        Kỹ năng chuyên môn
        <span className="skills-title-badge">SKILL</span>
      </h2>
      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-group card-hover" key={group.category}>
            <div className="skill-group-header" style={{display:'flex',alignItems:'center',gap:'0.7em'}}>
              <span className="skill-group-tick" aria-hidden="true" style={{display:'inline-flex',alignItems:'center',verticalAlign:'middle'}}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="#2196f3"/><path d="M8 14l4 4 6-8" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3 style={{fontWeight:800,color:'#1e2e6b',margin:0}}>{group.category}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item} className={`skill-item${['React','Next.js'].includes(item)?' hot-skill':''}`}>
                  <span className="dot"></span>
                  {item}
                  {['React','Next.js'].includes(item) && <span className="badge-hot">HOT</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skills-extra animate-slide-up">
        <h4>Kinh nghiệm nổi bật</h4>
        <ul>
          <li>3+ năm phát triển web chuyên nghiệp, từng làm việc tại startup và công ty lớn</li>
          <li>Thành thạo xây dựng SPA, tối ưu SEO, tối ưu hiệu suất web</li>
          <li>Đã tham gia nhiều dự án thực tế với vai trò Fullstack/Front-end Lead</li>
          <li>Đam mê UI/UX, luôn cập nhật công nghệ mới</li>
        </ul>
      </div>
    </section>
    <footer className="main-footer animate-fade-in" style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className="footer-content" style={{display:'flex',justifyContent:'center',gap:'2.5rem',width:'100%',maxWidth:'1100px'}}>
        {/* ...footer columns... */}
      </div>
      <div className="footer-bottom" style={{textAlign:'center',marginTop:'1.2rem',width:'100%'}}>© 2025 Bùi Hữu Thắng. All rights reserved.</div>
    </footer>
    <Footer />
  </>
);

export default Skills;
