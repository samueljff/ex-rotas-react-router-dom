import "./styles.css";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container mb30 mt30">
          <Card title="Página de Promoção" />
        </div>
        <Link to="/subscrition">
          <Button text="Quero participar" />
        </Link>
      </section>
    </main>
  );
}
