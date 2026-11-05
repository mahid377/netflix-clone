import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import logo from "../../assets/image/logo.png";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ገጹ ሲንሸራተት Header ጥቁር እንዲሆን
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.Header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.Container}>
        {/* logo */}
        <img className={styles.Logo} src={logo} alt="Netflix logo" />

        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/">TV Shows</Link>
          <Link className={styles.navLink} to="/">Movies</Link>
          <Link className={styles.navLink} to="/">New & Popular</Link>
          <Link className={styles.navLink} to="/">My List</Link>
          <Link className={styles.navLink} to="/">Browse by Language</Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
                autoFocus
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link to="/" className={styles.profileMenuItem}>
                  Account
                </Link>
                <Link to="/" className={styles.profileMenuItem}>
                  Help Center
                </Link>
                <hr className={styles.profileMenuDivider} />
                <Link to="/" className={styles.profileMenuItem}>
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
