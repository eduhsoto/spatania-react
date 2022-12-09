import { HeadSection, Image, Description, Title, Paragraph } from "../assets/style-components/Head";

const Head = ({ img, title, paragraph }) => {
  return (
    <HeadSection>
      <Image src={img} alt="head image"></Image>
      <Description>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Description>
    </HeadSection>
  );
};

export default Head;
