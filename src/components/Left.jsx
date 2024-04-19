const Left = () => {
  return (
    <div className="left">
      <div className="home">
        <ul>
          <li id="logo">
            <img src="./images/logo.svg" alt="logo" />
          </li>
          <li>
            <img src="./images/home.svg" alt="home-img" />
            Home
          </li>
          <li>
            <img src="./images/search.svg" alt="search-img" />
            Search
          </li>
        </ul>
      </div>
      <div className="library">
        <div className="heading">
          <ul>
            <li className="library-icon">
              <img src="./images/library.svg" alt="library-img" />
              Your Library
            </li>
            <li className="add-icon">
              <img id="add" src="./images/Add.svg" alt="add-img" />
            </li>
          </ul>
        </div>
        <div className="library-insides">
          <div className="create-library">
            <div>
              <span id="heading1">Create your first playlist</span>
              <span>It's easy, we'll help you</span>
            </div>
            <button>Create playlist</button>
          </div>
          <div className="podcasts">
            <div>
                <span id="heading2">Let's find some podcasts to follow</span>
                <span>We'll keep you updated on new episodes</span>
              </div>
              <button>Browse podcasts</button>
            </div>
        </div>
        <div className="footer">
          <div>
            <a href="https://www.spotify.com/in-en/legal/">Legal</a>
          </div>
          <div>
            <a href="https://www.spotify.com/in-en/safetyandprivacy/">
              Safety & Privacy Center
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/in-en/legal/privacy-policy/">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/in-en/legal/cookies-policy/">
              Cookies
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">
              About Ads
            </a>
          </div>
          <div>
            <a href="https://www.spotify.com/in-en/accessibility/">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Left;
