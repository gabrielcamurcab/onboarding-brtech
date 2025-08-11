import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contato</h1>
            <p>Entre em contato conosco através do formulário abaixo:</p>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;