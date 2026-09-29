# Projeto Lab

Site pessoal para apresentação de um projeto, com visual arrojado e tecnológico.

## Executar localmente com Docker

### Pré-requisitos

- [Git](https://git-scm.com/) instalado
- [Docker](https://www.docker.com/) instalado e em execução

### 1. Clonar o repositório

```bash
git clone https://github.com/nathaliapa/projetolab.git
```

### 2. Entrar no diretório do projeto

```bash
cd projetolab
```

### 3. Criar a imagem Docker

```bash
docker build -t projetolab .
```

O ponto (`.`) indica que o Docker deve usar o diretório atual como contexto de construção.

### 4. Executar o container

```bash
docker run --rm --name projetolab-container -p 3000:3000 projetolab
```

O comando conecta a porta `3000` do computador à porta `3000` do container.

### 5. Acessar o site

Abra no navegador:

<http://localhost:3000>

Rotas disponíveis:

- <http://localhost:3000/> — Início
- <http://localhost:3000/sobre> — Sobre o projeto
- <http://localhost:3000/contato> — Contato

Para parar o container, pressione `Ctrl+C` no terminal onde ele está rodando.

## Comandos úteis

Listar a imagem criada:

```bash
docker images projetolab
```

Listar containers em execução:

```bash
docker ps
```

Ver os logs do container:

```bash
docker logs projetolab-container
```

Se a porta `3000` já estiver ocupada, use outra porta no computador:

```bash
docker run --rm --name projetolab-container -p 8080:3000 projetolab
```

Nesse caso, acesse <http://localhost:8080>.

## Executar sem Docker

Também é possível executar o servidor diretamente com Python 3:

```bash
python3 server.py
```

Depois acesse <http://localhost:3000>.

## Personalização

- Edite os textos das páginas em `app.js`.
- Edite cores, tipografia e layout em `styles.css`.
- Substitua imagens dentro de `public/` e atualize suas referências em `styles.css` ou `app.js`.
- Consulte `ideas.md` para conhecer a direção visual do projeto.

## Observações

- O formulário de contato é demonstrativo e não envia dados.
- O site usa as rotas `/`, `/sobre` e `/contato`.
