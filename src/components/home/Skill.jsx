import { SkillDiv, TitleH3, List } from "../../assets/style-components/home/Skill";

const Skill = ({ title, list }) => {
  return (
    <SkillDiv>
      <TitleH3>{title}</TitleH3>
      <List>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </List>
    </SkillDiv>
  );
};

export default Skill;
