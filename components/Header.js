import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <h1>Bem-vindo ao Projeto de Onboarding</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Início</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;