import Head from "../components/Head";
import Item from "../components/portafolio/Item";

const Portafolio = () => {
  return (
    <>
      <Head
        img="../src/assets/experience.jpg"
        title="Mi experiencia es laboral y académica, dale un vistazo a mis proyectos!"
        paragraph="Al trabajar para una empresa dedicada a la creación de soluciónes digitales pude obtener mi paión por el deseño UX / UI"
      />
      <Item
        link="https://www.behance.net/gallery/148786781/WorkClick"
        img="../src/assets/portafolio-item.jpg"
        title="Worclick"
        category="Diseño UX"
        paragraph="Diseño de sitio web y móvil para el reclutamiento de recursos
      humanos y búsqueda de empleo."
      />
    </>
  );
};

export default Portafolio;
