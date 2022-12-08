const Skill = ({ title, listSkill }) => {
  return (
    <div class="skills">
      <h3 class="title__skills">{title}</h3>
      <ul class="list__skills">
        {listSkill.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skill;
