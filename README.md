# DSVendas
 [![APM](https://img.shields.io/apm/l/react?label=Licen%C3%A7a&style=flat-square)](https://github.com/danilotc/projeto-sds3/blob/master/LICENSE) ![GitHub repo size](https://img.shields.io/github/repo-size/danilotc/projeto-sds3?label=Tamanho%20reposit%C3%B3rio&style=flat-square) 
 ![GitHub language count](https://img.shields.io/github/languages/count/danilotc/projeto-sds3?label=Linguagens&style=flat-square) 
 ![GitHub top language](https://img.shields.io/github/languages/top/danilotc/projeto-sds3?logo=Java&style=flat-square) 
 ![Netlify](https://img.shields.io/netlify/31c2ce77-d0e5-49c8-b369-4a4a8586aa14?label=Netlify&style=flat-square)

# Sobre o projeto

Visite o projeto online: https://danilo-dsvendas.netlify.app

Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot. Uma aplicação web desenvolvida durante a 3ª edição do evento online promovido pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

**Observação:** Ao acessar a página *dashboard* aguardar alguns segundos para que a tabela e os gráficos sejam carregados, pois o back end está implantado em um espaço gratuito no Heroku e isso faz com que a aplicação adormeça após 30min inativa.

## Layout (home)
![Web Home](https://raw.githubusercontent.com/DaniloTC/assets/master/sds3-home.png)
## Layout (dashboard)
![Web Graphs](https://raw.githubusercontent.com/DaniloTC/assets/master/sds3-graphs.png)
![Web Table](https://raw.githubusercontent.com/DaniloTC/assets/master/sds3-table.png)
## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/sds3-mc.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Front end
- HTML / CSS / TypeScript
- Bootstrap
- ReactJS
- Apex Charts

## Implantação em produção
- Back end: Heroku
- Front end: Netlify
- Banco de dados: Postgresql

# Principais ferramentas utilizadas
- [Spring Tool Suite (STS)](https://spring.io/tools) para trabalhar no back end, pois oferece suporte total para especificações do Java EE, além de gerenciar as dependências usadas no projeto, tudo isso em uma só ferramenta.

- [Visual Studio Code](https://code.visualstudio.com/) para desenvolver o front end.

- [GitHub Desktop for Linux](https://github.com/shiftkey/desktop), para gerenciar o versionamento do projeto. Uma ferramenta incrível implementada pelo Brendan Forster.

# Como executar o projeto

## Back end

```bash
# clonar repositório
git clone https://github.com/danilotc/projeto-sds3

# entrar na pasta do projeto back end
cd backend

# executar o projeto no sts ou no terminal com o comando
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/danilotc/projeto-sds3

# entrar na pasta do projeto front end
cd frontend

# instalar dependências
npm install

# executar o projeto
npm start
```
# Agradecimento

Agradeço ao  professor [Nélio Alves](https://github.com/acenelio) por promover este evento que me proporcionou entender melhor recursos interessantes sobre as tecnologias envolvidas neste projeto, sobre tudo Java e suas especificações (JPA/Hibernate).

Também agradeço ao meu amigo  [Giovani Silva](https://github.com/giovani-silva1) pela parceria, pelos estudos remotos que organizamos e a constante troca de conhecimento e experiências, é um cara fantástico, além de super competente e conhecedor das tecnologias.
