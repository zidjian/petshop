import { useParams } from "react-router-dom";
import ListaPublicaciones from "../components/ListaPublicaciones";

const SubCategoria = () => {
    const { subcategoria } = useParams()
    return (
        <ListaPublicaciones url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria;