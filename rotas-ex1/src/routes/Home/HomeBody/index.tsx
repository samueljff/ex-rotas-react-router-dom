import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody(){
    return (
        <main>
            <section>
                <div className="container mb30 mt30">
                    <Card title="Página inicial"/>
                </div>
                <Button text="Ver promoção"/>
            </section>
        </main>
    );
}