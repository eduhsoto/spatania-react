import Head from "../components/Head";
import Certificate from "../components/path/Certificate";

const Path = () => {
  return (
    <>
      <Head
        img="../src/assets/img/path-image.png"
        title="Mi trayectoria en el mundo laboral"
        paragraph="Soy una persona creativa apasionada por crear experiencias que satisfagan las necesidades humanas al utilizar tecnología."
      />
      <section class="path__timeline">
        <div class="container flex__columns">
          <h2 class="title__grade">Mi trayectoria</h2>

          <div class="card">
            <div class="card__timeline timeline1">
              <h4 class="name__bussines">SerimarqPrint</h4>
              <p class="date__work">Agosto 2015 - Febrero 2021</p>
              <p>
                Gerente General: Atención a proveedores, compras de materiales,
                encargado de producción, facturación en el portal del SAT,
                atención al cliente.
              </p>
            </div>

            <img
              src="../src/assets/img/path-timeline.png"
              alt="lines"
              class="lines__path"
            />

            <div class="card__timeline timeline2">
              <h4 class="name__bussines">Esprezza</h4>
              <p class="date__work">Marzo 2021 - Abril 2021</p>
              <p>
                Becario en el área de soporte técnico encargado de atender
                incidencias de hardware y software dentro de la empresa.
              </p>
            </div>
          </div>

          <div class="card__timeline timeline3">
            <h4 class="name__bussines">IBM Student</h4>
            <p class="date__work">Abril 2021 - Abril 2022</p>
            <p>
              Diseño UX/UI: Creación de experiencias centradas en el usuario,
              utilizando herramientas cognitivas del pensamiento humano,
              psicología del color, técnicas para mejorar la usabilidad en la
              creación y seguimiento de procesos digitales para proporcionar
              herramientas que le sirvan a los desarrolladores e interesados
              para una visualización digital del diseño de las aplicaciones.
            </p>
            <p>
              Maquetado de interfaces: Transformar el diseño de una web para que
              los navegadores puedan interpretarlos y reproducirlos
              correctamente en diferentes dispositivos.
            </p>
            <p>
              Ayudante y estudiante de Analista de negocios: Creación de
              historias de usuario, desglosando el proceso en pequeñas partes
              utilizando la metodología de Design Thinking, generando soluciones
              de acuerdo a problemas previamente detectados, creación de
              propuestas en diseño visual ante nuevos requerimientos y creación
              de documentación.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="container flex__columns">
          <h2 class="title__grade">Áreas de conocimiento</h2>
          <div id="certificate" class="certificates__row">
            <Certificate
              img="../src/assets/img/certificate-ibm-1.jpg"
              link="https://www.credly.com/badges/a8745ec5-4224-4c71-ac24-95948db4ab74?source=linked_in_profile"
            ></Certificate>
            <Certificate
              img="../src/assets/img/certificate-ibm-2.jpg"
              link="https://www.credly.com/badges/0684844f-1065-4de0-93a5-6455c8ab0a8e?source=linked_in_profile"
            ></Certificate>
            <Certificate
              img="../src/assets/img/certificate-ibm-3.jpg"
              link="https://www.credly.com/badges/4750689b-f467-45a8-b877-adbe3d807677?source=linked_in_profile"
            ></Certificate>
            <Certificate
              img="../src/assets/img/certificate-ibm-4.png"
              link="https://www.credly.com/badges/383741cb-3c1c-42ff-8a24-3f7b332717b2?source=linked_in_profile"
            ></Certificate>
          </div>
        </div>
      </section>
    </>
  );
};

export default Path;
