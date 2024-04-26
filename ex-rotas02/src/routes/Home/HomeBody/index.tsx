import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container mb30 mt30">
          <Card title="Página inicial" />
        </div>
        <Link to="/promotion">
          <Button text="Ver promoção" />
        </Link>
      </section>
    </main>
  );
}
