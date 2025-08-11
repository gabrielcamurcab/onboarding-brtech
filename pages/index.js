import Header from '../components/Header';
import NewComponent from '../components/NewComponent';

export default function Home() {
    return (
        <div>
            <Header />
            <h1>Bem-vindo ao Projeto de Onboarding!</h1>
            <p>Esta é a página inicial da aplicação.</p>
            <NewComponent />
        </div>
    );
}