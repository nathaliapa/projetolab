# Projeto Lab

Site pessoal de apresentação de projeto, com visual arrojado e tecnológico.

## Executar localmente

Requisitos: Python 3.

```bash
python3 server.py
```

Depois abra <http://localhost:3000> no navegador. O servidor local expõe `public/` na raiz para que o favicon e o manifesto de rotas funcionem corretamente.

## Alterar textos

- Conteúdo das páginas: edite os textos dentro de `app.js`.
- Navegação e título da marca: edite `index.html`.
- Títulos, etiquetas e mensagens da página de contato também ficam em `app.js`.

As rotas são `/`, `/sobre` e `/contato`.

## Alterar cores

No começo de `styles.css`, altere as variáveis dentro de `:root`:

- `--ink`: fundo escuro.
- `--paper`: textos claros.
- `--blue`: cor principal de ações e marca.
- `--blue-bright`: azul de destaque.
- `--coral`: cor de sinal/ênfase.

Salve o arquivo e atualize o navegador.

## Alterar imagens

A imagem principal é aplicada em `.hero-art` dentro de `styles.css`. Substitua a URL de `background` por um caminho local, por exemplo:

```css
background: #191c29 url('/public/minha-imagem.jpg') center/cover;
```

Coloque o arquivo em `public/`. Atualize também o `aria-label` no HTML gerado em `app.js` para manter o texto alternativo acessível.

## Observações

- O formulário de contato é demonstrativo e não envia dados.
- O site permanece como Preview/rascunho: não foi publicado.
- O pacote não inclui credenciais nem conexão com GitHub.
