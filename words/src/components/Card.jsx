function Card(props) {
  return (
    <div className="word-card">
      <div className="word-english">{props.english}</div>
      <div className="word-transcription">{props.transcription}</div>
      <div className="word-russian">{props.russian}</div>
      <div className="card-tags">{props.tags}</div>
      <button>Показать</button>
    </div>
  );
}
export default Card;
