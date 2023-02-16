import Social from "./Social";
import Link from "next/link"

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} Superio by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a>
            . All Right Reserved.
          </div>
          <div className="social-links">
            <Social /> <span><Link href="/">Terms & Conditions</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
