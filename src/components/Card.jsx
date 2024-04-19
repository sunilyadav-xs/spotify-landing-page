const Card = ({artist}) => {
  return (
    <>
    <div className="card">
      <div className="play-button">
        <img src="./images/play-btn.svg" />
      </div>
      <img id="image" src={artist.img} alt=""/>
      <p>{artist.name}</p>
      <span>Artist</span>
    </div>
    </>
  )
}

export default Card
