import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <p className="footer-text">
        Виконано в
        <a
          className="App-link"
          href="https://prometheus.org.ua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prometheus
        </a>
        &copy;{new Date().getFullYear()}
      </p>
    </div>
  );
}
export default Footer;
