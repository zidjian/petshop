// import '../assets/css/post.css';
import { buscar } from '../api/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaPublicaciones = (props) => {
    const { url } = props;
    const [publicaciones, setPublicaciones] = useState([]);
    useEffect(() => {
        buscar(url, setPublicaciones);
    }, [url]);

    return (
        <section className="posts container">
            {
                publicaciones.map(publicacion => {
                    const { id, title, metadescription, categoria } = publicacion;
                    return (
                        <Link to={`/publicacion/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                            <article >
                                <h3 className="post-card__title">
                                    {title}
                                </h3>
                                <p className="post-card__meta">{metadescription}</p>
                            </article>
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default ListaPublicaciones