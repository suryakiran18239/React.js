import React from "react";

function Footer() {
  const currentyear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <p className="footer-text">
          © {currentyear} Moviedux, All right are reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
