import Header from "./Header"
import Cards from "./Cards"
const Right = ({artists,showAll,show}) => {
  return (
    <div className="right">
      <Header />
      <Cards showAll={showAll} artists={artists} show={show} />
    </div>
  )
}

export default Right
