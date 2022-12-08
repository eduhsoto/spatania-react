import Head from "../components/Head";
import Skill from "../components/home/Skill";
import Objective from "../components/home/Objective";

const Home = () => {
  return (
    <>
      <Head
        img="../src/assets/profile-tania.png"
        title="Hola! Mi nombre es Tania y soy diseñadora UX"
        paragraph="Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, resido actualmente en la ciudad de Guadalajara Jalisco México."
      />
      <section class="about__me">
        <div class="container">
          <div class="about">
            <h2 class="title__grade">Técnico Superior Universitario</h2>
            <p class="title__specialization">
              Especialista UX / UI orientada en el ser humano.
            </p>
            <p>
              Soy estudiante de Ingeniería en Tecnologías de la comunicación,
              área desarrollo y gestión de software.
            </p>
            <p>
              Tengo confianza en mi capacidad para generar ideas, trabajar en
              equipo, adquirir conocimientos y crecer profesionalmente.
            </p>
            <p>
              Mi pasión es crear y mejorar experiencias de los usuarios,
              pensando en el ser humano que utiliza las aplicaciones por medio
              de la tecnología, agilizando los procesosz con diseños funcionales
              y atractivos.
            </p>
          </div>
          <img
            src="../src/assets/ux-image.png"
            alt="ux image"
            class="ux__image about"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <Skill
            title="Habilidades blandas"
            listSkill={[
              "Excelente comunicación oral y escrita.",
              "Trabajo en equipo y capacidad de liderazgo.",
              "Desarrollo de experiencias centradas en el ser humano.",
              "Capacidad de autoaprendizaje.",
              "Pensamiento estratégico.",
            ]}
          />
          <Skill
            title="Habilidades técnicas"
            listSkill={[
              "HTML, CSS, Bootstrap.",
              "Adobe XD.",
              "Figma.",
              "Invision Studio.",
              "Metodologías Ágiles (Manejo de tableros Scrum y Kanban).",
              "Design Thinking.",
              "Conocimiento de leyes cognitivas, creación de flujos, investigación de casos de uso y desarrollo de diseño visual.",
            ]}
          />
        </div>
      </section>
      <section>
        <div className="container">
          <Objective
            img="../src/assets/goal.png"
            paragraph="Mi objetivo es desarrollar mi carrera profesiónal formando parte de una empresa que me permita aplicar lo que he aprendido y seguir creciendo de manera tanto profesiónal como personal."
            listed={false}
          />
          <Objective
            img="../src/assets/vision.png"
            paragraph="Crear diseños llamativos, intuitivos y funcionales que mejoren la experiencia de las personas que utilizan tecnología ayudando a lograr sus objetivos de manera rápida y eficaz."
            listed={false}
          />
          <Objective
            img="../src/assets/honesty.png"
            paragraph="Crear diseños llamativos, intuitivos y funcionales que mejoren la experiencia de las personas que utilizan tecnología ayudando a lograr sus objetivos de manera rápida y eficaz."
            listed={true}
            elements={["Pasión", "Respeto", "Honestidad", "Resposabilidad", "Puntualidad", "Trabajo en equipo"]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
