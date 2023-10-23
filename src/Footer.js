import React from "react";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container text-center">
        &copy; {new Date().getFullYear()} Your App Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;