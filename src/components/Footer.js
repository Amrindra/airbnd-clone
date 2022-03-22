import React from "react";
import "../styles/Footer.css";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-section">
        <ul className="footer-ul">
          <h3>Support</h3>
          <li>Help Center</li>
          <li>Safety Information</li>
          <li>Cancellation options</li>
          <li>Supporting people with disabilities</li>
          <li>Report a neighborhood concern</li>
        </ul>

        <ul className="footer-ul">
          <h3>Community</h3>

          <li>Airbnb.org: disaster relief housing</li>
          <li>Support Afghan refugees</li>
          <li>Combating discrimination</li>
        </ul>

        <ul className="footer-ul">
          <h3>Hosting</h3>
          <li>Try hosting</li>
          <li>AirCover: protection for Hosts</li>
          <li>Explore hosting resources</li>
          <li>Visit our community forum</li>
          <li>How to host responsibly</li>
        </ul>

        <ul className="footer-ul">
          <h3>About</h3>
          <li>Newsroom</li>
          <li>Learn about new features</li>
          <li>Letter from our founders</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Airbnb Luxe</li>
        </ul>
      </div>

      <hr />

      <div className="footer-bottom-section">
        <div className="footer-left">
          <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
          <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>

        <div className="footer-right">
          <div className="footer-language">
            <LanguageIcon />
            <p className="underline">English(US)</p>
          </div>

          <div className="footer-dollar">
            <p>$</p>
            <p className="underline">USD</p>
          </div>

          <div className="footer-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
