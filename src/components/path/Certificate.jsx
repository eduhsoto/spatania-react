import { Group, Image, ALink } from "../../assets/style-components/path/Certificate";

const Certificate = ({img, link}) =>{
    return (
        <Group>
            <Image src={img} alt="certificate image"></Image>
            <ALink target="_blank" href={link}>Ver</ALink>
        </Group>      
    )
}

export default Certificate;