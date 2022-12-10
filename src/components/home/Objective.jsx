import { CardObjectives, CardImage, TextP } from "../../assets/style-components/home/Objective";
import { List } from "../../assets/style-components/home/Skill";

const Objective = ({ img, paragraph, listed, elements }) => {
  return (
    <CardObjectives class="card__objectives">
      <CardImage src={img} alt="goal image" class="card__image"></CardImage>
      <TextP class="text__objetives">{paragraph}</TextP>
      {listed && (
        <List>
          {elements.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </List>
      )}
    </CardObjectives>
  );
};

export default Objective;
