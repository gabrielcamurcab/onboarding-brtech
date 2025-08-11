# Onboarding Next.js Project

Este projeto é um exercício de onboarding para novos estagiários. Siga as instruções específicas abaixo para realizar pequenas alterações no código.

## Estrutura do Projeto

- `components/Header.js`: Componente de cabeçalho da aplicação.
- `components/NewComponent.js`: Novo componente reutilizável.
- `pages/about.js`: Página "Sobre".
- `pages/contact.js`: Página "Contato".
- `pages/index.js`: Página inicial.
- `public/styles.css`: Estilos da aplicação.
- `package.json`: Configuração do npm.
- `.gitignore`: Arquivos ignorados pelo Git.

## Instruções para Estagiários

### Estagiário 1
1. **Altere o título do cabeçalho**  
   No arquivo `components/Header.js`, mude o texto do `<h1>` para:  
   ```
   Onboarding - Bem-vindo(a)!
   ```
2. Faça commit e push das alterações em uma branch chamada `estagiario1`.

### Estagiário 2
1. **Adicione um novo campo ao formulário de contato**  
   No arquivo `pages/contact.js`, adicione um campo de telefone (`Telefone:`) ao formulário, logo após o campo de email.
2. Faça commit e push das alterações em uma branch chamada `estagiario2`.

### Estagiário 3
1. **Altere o texto do NewComponent**  
   No arquivo `components/NewComponent.js`, mude o texto do `<h2>` para:  
   ```
   Este é o componente atualizado!
   ```
   E o texto do `<p>` para:  
   ```
   Agora este componente possui um novo texto para o onboarding.
   ```
2. Faça commit e push das alterações em uma branch chamada `estagiario3`.

### Estagiário 4
1. **Adicione uma cor de fundo ao cabeçalho**  
   No arquivo `public/styles.css`, adicione uma regra para que o `<header>` tenha cor de fundo `#f0f0f0`.
2. Importe o arquivo de estilos no componente `Header.js` se ainda não estiver importado.
3. Faça commit e push das alterações em uma branch chamada `estagiario4`.

## Comandos Git Comuns
- Para criar uma nova branch:
  ```
  git checkout -b <nome da branch>
  ```
- Para adicionar alterações:
  ```
  git add .
  ```
- Para fazer um commit:
  ```
  git commit -m "Mensagem do commit"
  ```
- Para enviar as alterações para o repositório remoto:
  ```
  git push origin <nome da branch>
  ```

## Conclusão
Siga as instruções acima para completar suas tarefas e contribuir para o projeto. Boa sorte!