const Head = ({ img, title, paragraph }) => {
  return (
    <section>
      <img src={img} alt="head image" />
      <div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </section>
  );
};

export default Head;
