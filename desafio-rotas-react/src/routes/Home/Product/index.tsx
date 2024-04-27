import Computer from "./Category/Comuter";
import NavBarCategories from "./Category/NavBarCategories";
import "./styles.css";

export default function Product() {
  return (
    <section>
      <main>
        <div className="container navbar-categories-container mt30">
          <NavBarCategories />
        </div>
        <Computer />
      </main>
    </section>
  );
}
