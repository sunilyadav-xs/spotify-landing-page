const Info = () => {
  return (
    <>
    <section>
    <div className="info">
      <div className="company">
        <p>Company</p>
        <a href="#">About</a>
        <a href="#">Jobs</a>
        <a href="#">For the Record</a>
      </div>
      <div className="communities">
        <p>Communities</p>
        <a href="#">For Artists</a>
        <a href="#">Developers</a>
        <a href="#">Advertising</a>
        <a href="#">Investors</a>
        <a href="#">Vendors</a>
      </div>
      <div className="links">
        <p>Useful Links</p>
        <a href="#">Support</a>
        <a href="#">Free Mobile App</a>
      </div>
    </div>
      <div className="social-medias">
        <div className="social" title="Instagram">
            <img src="./images/insta.svg" />
        </div>
        <div className="social" title="X">
        <img  id="tweet" src="./images/twitter.svg" />
        </div>
        <div className="social" title="Facebook">
        <img src="./images/fb.svg" />
        </div>
      </div>
    </section>
    <div className="border"></div>
    <div className="copyright">
    <span>&copy; </span>
    <span>2024 Spotify AB</span>
    </div>
    </>
  )
}

export default Info
