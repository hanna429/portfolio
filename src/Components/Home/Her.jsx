import React from "react";
import "./Hero.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function Her() {
  const [copied, setCopied] = useState(false);
  const email = "fathimahanna429@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <div className="status-container mt-5 pt-5">
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="status-text">Active</span>
        </div>
      </div>

      <section className="hero-section">
        <Container>
          <h2 className="hero-heading mt-4">
            Transforming Ideas into <br />
            Interactive <span>Web Experiences</span>
          </h2>

          <div className="hero-actions gap-5">
            <a href="https://cal.com/hanna-fathima-sujkyi">
            <button className="connect-btn">Let's connect →</button>
             </a>
            {/* Email Copy Section */}
            <div className="email-copy" onClick={handleCopy}>
              <ContentCopyIcon className="copy-icon" fontSize="small" />
              {!copied ? (
                <p className="email-text">{email}</p>
              ) : (
                <span className="copied-msg">Copied to clipboard!</span>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Her;
