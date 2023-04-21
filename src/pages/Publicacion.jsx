import { useEffect, useState } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const Publicacion = () => {
    const [publicacion, setPublicacion] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        buscar(`/posts/${id}`, setPublicacion)
            .catch(() => {
                navigate('/no-encontrado');
            });
    }, [id, navigate]);

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{publicacion.title}</h2>
                <p className="text__card">{publicacion.body}</p>
            </article>
        </main>
    )
}

export default Publicacion