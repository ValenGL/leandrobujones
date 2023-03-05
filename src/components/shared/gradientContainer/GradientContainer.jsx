import "./_GradientContainer.scss";

export default function GradientContainer({ title }) {
  return (
    <div className="blur-out-contract">
      <div className="title--container">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
