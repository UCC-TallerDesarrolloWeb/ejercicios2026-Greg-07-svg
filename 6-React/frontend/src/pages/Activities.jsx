import "../styles/Activities.scss";
import Card from "../components/Crad";
import { activities, diasSemana } from "../data/activities";

const Activities = () => {
  const IsLoggedIn = localStorage.getItem("isLoggedIn") === "True";

  const handleInscribir = (nombreActividad) => {
    alert(`inscripto en ${nombreActividad}`);
  };

  return (
    <div className="activities-container">
      {activities.map((actividad, index) => (
        <Card
          key={index}
          title={actividad.nombre}
          subtitle={actividad.descripcion}
        >
          <h3>{actividad.nombre}</h3>
          <p>{actividad.descripcion}</p>
          <ul>
            {actividad.horarios.map((horario, i) => (
              <li key={i}>
                {diasSemana[horario.dia]} - {horario["hora-inicio"]} -{" "}
                {horario["hora-fin"]}
              </li>
            ))}
          </ul>

          {IsLoggedIn && (
            <button onClick={() => handleInscribir(actividad.nombre)}>
              Inscribirse
            </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Activities;
