import ListaCategorias from '../components/ListaCategorias'
import ListaPublicaciones from '../components/ListaPublicaciones'

const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="title-page">Pet noticias</h2>
            </div>
            <ListaCategorias />
            <ListaPublicaciones url={'/posts'} />
        </main>
    )
}

export default Home