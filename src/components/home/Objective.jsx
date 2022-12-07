const Objective = ({ img, paragraph, listed, elements}) => {
  return (
    <div class="card__objectives">
      <img src={img} alt="goal image" class="card__image" />
      <p class="text__objetives">{paragraph}</p>
      {listed
        ? elements.map((value, index) => {
            return <li key={index}>{value}</li>;
          })
        : listed}
    </div>
  );
};

export default Objective;
