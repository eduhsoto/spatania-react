const Certificate = ({img, link}) =>{
    return (
        <div class="certificate__group">
            <img src={img} class="certificate__image" alt="certificate image"/>
            <a class="certificate__link" target="_blank" href={link}>Ver</a>
        </div>      
    )
}

export default Certificate;