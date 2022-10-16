import "./Synonyms.css";

if (props.synonyms) {
  return (
    <div className="synonyms">
      <ul>
        {props.synonyms.map((synonym, index) => {
          return (
            <li key={index} id={synonym}>
              {synonym}
            </li>
          );
        })}
      </ul>
    </div>
  );
} else {
  return null;
}
