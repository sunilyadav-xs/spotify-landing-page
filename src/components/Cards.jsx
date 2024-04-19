import Card from "./Card"
import Info from "./Info"

const Cards = ({artists, showAll,show}) => {
  return (
    <>
    <div className="spotify-playlists">
      <div className="head">
        <h1>Popular Artists</h1>
        {showAll? "":<button onClick={show}>Show all</button>}

      </div>
      <div className={showAll? "card-container cc-show":"card-container"}>
        {artists.map((artist) => (
          <Card key={artist.id} artist={artist} />
          ))}
      </div>
      <Info />
    </div>
    </>
  )
}

export default Cards
