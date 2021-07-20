import "./scss/card.scss";
function Cards(props) {
  return (
    <div className="Cards">
      <div className="card-img">
        <img src={props.img} />
      </div>
      <div className="card-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Cards;
