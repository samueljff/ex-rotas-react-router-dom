import "./styles.css";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container mb30 mt30">
          <h2 className="text-title-sub">Faça sua inscrição!</h2>
          <Card title="Página de Inscrição" />
        </div>
        <Link to="/promotion">
          <Button text="Ver Promoção" />
        </Link>
      </section>
    </main>
  );
}
