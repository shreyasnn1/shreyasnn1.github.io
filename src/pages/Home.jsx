import { Link } from 'react-router-dom';
import profilePic from '../assets/profile_pic.jpg';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-photo">
          <img src={profilePic} alt="" />
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1>Shreyas Narayanan</h1>
          <p className="hero-bio">
            I'm a Software Engineer III at Cisco Systems India, with a Dual Degree from IIT Madras (M.Tech in Robotics, B.Tech in Mechanical Engineering, Minor in Computing).
          </p>
          <p className="hero-bio">
            I write C/C++ and enjoy working close to the system — runtimes, compilers, memory, and uncovering details that most abstractions hide.
          </p>
          <p className="hero-bio">
            I like dabbling with AI — deep learning research, LLMs, MCP servers, and generally exploring whatever's new and exciting in the space.
          </p>
          <p className="hero-bio">
            On weekends, I’m probably out playing an ultimate frisbee tournament or binging a TV show.
          </p>
          <Link to="/about" className="hero-link">
            More about me →
          </Link>
        </div>
      </section>
    </div>
  );
}
