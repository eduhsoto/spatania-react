const Item = ({ link, img, title, category, paragraph }) => {
  return (
    <div className="card__portafolio">
      <a href={link} target="_blank">
        <div className="flex">
          <img alt="portafolio image" className="img image" src={img} />

          <div className="detail">
            <h1 className="title">{title}</h1>
            <p className="category">{category}</p>
            <p className="paragraph">{paragraph}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
