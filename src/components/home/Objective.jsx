const Objective = ({ img, paragraph, listed, elements }) => {
  return (
    <div class="card__objectives">
      <img src={img} alt="goal image" class="card__image" />
      <p class="text__objetives">{paragraph}</p>
      {listed && (
        <ul>
          {elements.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Objective;
