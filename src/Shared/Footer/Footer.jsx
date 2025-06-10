import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white border-t text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Rasavilas. All rights reserved.
    </footer>
  );
};

export default Footer;
