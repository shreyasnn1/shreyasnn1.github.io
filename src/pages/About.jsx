import Section from '../components/Section';

export default function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h1>Skills</h1>
      </header>

      <p className="about-intro">
        Skills by area. For the full picture, see my <a href="/resume.pdf" download>resume</a>.
      </p>

      <Section title="Systems Programming" collapsible>
        <ul className="list">
          <li>Scripting: C, C++, Perl, Unix/Linux, Bash</li>
          <li>Build systems: Bazel, GMake, AutoMake, CMake</li>
          <li>Tools: Git, GDB, MySQL, SQLite</li>
          <li>Areas: Compilers, Debugging, Instrumentation, Code Coverage</li>
        </ul>
      </Section>

      <Section title="AI and Machine Learning" collapsible>
        <ul className="list">
          <li>Python, Matlab</li>
          <li>Frameworks &amp; libraries: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas</li>
          <li>Areas: Deep learning, Computer vision, LLMs</li>
          <li>LLM stack: MCP servers, vector databases</li>
        </ul>
      </Section>

      <Section title="Finance" collapsible>
        <ul className="list">
          <li>Options trading, Futures, Derivatives</li>
          <li>Analysis (basics): Technical (chart patterns, indicators), Fundamental (financial statements, valuation)</li>
        </ul>
      </Section>
    </div>
  );
}
