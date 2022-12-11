import { ListItem, ImageF, Detail, H1, Category, Paragraph } from "../../assets/style-components/portafolio/Item"

const Item = ({ link, img, title, category, paragraph }) => {
  return (
    
      <ListItem>
        <a href={link} target="_blank" className="link__portafolio">
        <ImageF src={img} >

        <Detail>
          <H1>{title}</H1>
          <Category>{category}</Category>
          <Paragraph>{paragraph}</Paragraph>
        </Detail>
        </ImageF>
        </a>
      </ListItem>
   
  );
};

export default Item;
