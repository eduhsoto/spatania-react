import { HeadSection, Image, Description, Title, Paragraph } from "../assets/style-components/Head";

const Head = ({ img, title, paragraph, reverse }) => {
  return (
    <HeadSection reverse = {reverse}>
      <Image src={img} alt="head image"></Image>
      <Description reverse = {reverse}>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Description>
    </HeadSection>
  );
};

export default Head;
