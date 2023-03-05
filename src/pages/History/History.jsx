import "./_History.scss";
import GradientContainer from "../../components/shared/gradientContainer/GradientContainer";

export default function History() {
  return (
    <main id="HistoryPage">
      <GradientContainer title="Historia" />
      <div className="animate__animated animate__fadeIn animate__slower history--container">
        <p className="history-text">
          Comencé estudiando imagen y sonido, para luego especializarme en
          aerografía y oleo: técnicas que me dieron mucha mayor destreza y
          flexibilidad para ilustrar.
        </p>
        <p className="history-text">
          Durante más de 6 años me dedique a realizar obras de arte, tapas de
          disco para bandas de rock, e ilustraciones digitales para programas de
          televisión, al mismo tiempo que daba cursos de ilustración en mi
          propio taller.
        </p>
      </div>
    </main>
  );
}
