const Item = ({ link, img, title, category, paragraph }) => {
  return (
    <div class="card__portafolio">
      <a href={link} target="_blank">
        <div class="flex">
          <img alt="portafolio image" class="img image" src={img} />

          <div class="detail">
            <h1 class="title">{title}</h1>
            <p class="category">{category}</p>
            <p class="paragraph">{paragraph}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
