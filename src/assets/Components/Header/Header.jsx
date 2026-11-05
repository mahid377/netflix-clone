import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
function Header() {
  const [issearchOpen, setIsSearchOpen] = useState(false);
  const [isprofileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.Container}>
        {/* logo */}
        <img className={styles.Logo} src={logo} alt="" />
        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="">
            Home
          </Link>
          <Link className={styles.navLink} to="">
            Tv-Show
          </Link>
          <Link className={styles.navLink} to="">
            Movies
          </Link>
          <Link className={styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="">
            My List
          </Link>
          <Link className={styles.navLink} to="">
            Browse By Language
          </Link>
        </nav>
        {/* right side section  */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!issearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {issearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            )}
          </div>
          {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell />
            <span className={styles.notificationBadge}>4</span>
          </button>
          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isprofileOpen)}
              className={styles.profileButton}
            >
              {/* profile icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              {/* drop down icon */}
              <ChevronDown size={20} />
            </button>
            {isprofileOpen && (
              <div className={styles.profileMenu}>
                <Link to="/Account" className={styles.profileMenuItem}>
                  Account
                </Link>
                <Link to="/helpcenter" className={styles.profileMenuItem}>
                  Help Center
                </Link>
                <hr className={styles.profileMenuDivider} />
                <Link to="/signOut" className={styles.profileMenuItem}>
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
