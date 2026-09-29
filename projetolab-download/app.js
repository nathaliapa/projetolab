const routes = {
  '/': {
    key: 'home',
    title: 'Projeto Lab — Ideias em movimento',
    view: `
      <section class="page hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="eyebrow">Projeto pessoal / edição 001</div>
            <h1>Ideias em <em>movimento.</em></h1>
            <p>Um espaço para apresentar o que está sendo construído, o que está sendo aprendido e o que vem depois.</p>
            <div class="cta-row"><a class="button" href="/sobre" data-route>Conheça o projeto ↗</a><a class="text-link" href="/contato" data-route>Entrar em contato</a></div>
          </div>
          <div class="hero-art" role="img" aria-label="Composição abstrata com prisma e trilhas de luz azul e coral">
            <span class="hero-index">PL / 001</span><span class="hero-caption">Sinal de ideias — 2026</span>
          </div>
        </div>
        <div class="signal-strip"><span>Status: <strong>em construção</strong></span><span>Fase atual: protótipo</span><span>Próximo passo: compartilhar</span></div>
      </section>
      <section class="page" aria-labelledby="home-section-title">
        <div class="section-head"><h2 id="home-section-title">O que estamos<br><em>explorando.</em></h2><p>Substitua estes cartões pelos pilares reais do seu projeto. Eles funcionam como uma leitura rápida para quem chega pela primeira vez.</p></div>
        <div class="cards"><article class="card"><span class="card-index">01 / CONTEXTO</span><div><h3>Uma pergunta boa</h3><p>O ponto de partida, o problema ou a curiosidade que deu origem ao projeto.</p></div></article><article class="card"><span class="card-index">02 / PROCESSO</span><div><h3>Teste antes de certeza</h3><p>Como você transforma hipóteses em protótipos, aprendizados e decisões.</p></div></article><article class="card"><span class="card-index">03 / IMPACTO</span><div><h3>Um próximo passo</h3><p>O que muda quando a ideia sai do papel e encontra pessoas reais.</p></div></article></div>
      </section>`
  },
  '/sobre': {
    key: 'about',
    title: 'Sobre o projeto — Projeto Lab',
    view: `
      <section class="page">
        <div class="page-intro"><div><div class="eyebrow">02 / Sobre o projeto</div><h1>Por trás<br>do <em>lab.</em></h1></div><p>Esta é a área para explicar o contexto com clareza: de onde veio a ideia, quem está envolvido e qual transformação você quer provocar.</p></div>
        <div class="about-grid"><div><div class="kicker">Uma breve história</div><p>O Projeto Lab nasceu de uma vontade simples: fazer perguntas melhores e construir respostas que possam ser testadas. Este texto é um placeholder — troque por uma história verdadeira, uma apresentação pessoal ou uma visão do produto.</p><p>Conte aqui o que torna o seu projeto diferente e por que este é o momento certo para ele existir.</p></div><div class="detail-list"><div class="detail"><small>01 / FOCO</small><p>Descreva o problema ou tema central do projeto.</p></div><div class="detail"><small>02 / MÉTODO</small><p>Explique como você pesquisa, prototipa e aprende.</p></div><div class="detail"><small>03 / FUTURO</small><p>Mostre a direção desejada para os próximos meses.</p></div></div></div>
      </section>`
  },
  '/contato': {
    key: 'contact',
    title: 'Contato — Projeto Lab',
    view: `
      <section class="page">
        <div class="page-intro"><div><div class="eyebrow">03 / Contato</div><h1>Vamos dar<br>um <em>sinal.</em></h1></div><p>Use este espaço para convidar pessoas para acompanhar, colaborar ou simplesmente trocar uma ideia. Os contatos abaixo são provisórios.</p></div>
        <div class="contact-grid"><div class="contact-meta"><div class="contact-line"><span>E-mail</span><span>ola@projetolab.com</span></div><div class="contact-line"><span>Rede</span><span>@projetolab</span></div><div class="contact-line"><span>Base</span><span>São Paulo / remoto</span></div><p class="form-note">Substitua os dados acima pelos seus canais reais. Nenhum dado é enviado por esta página.</p></div><form id="contact-form"><div class="field"><label for="name">Seu nome</label><input id="name" name="name" autocomplete="name" placeholder="Nome (placeholder)" required /></div><div class="field"><label for="email">Seu e-mail</label><input id="email" name="email" type="email" autocomplete="email" placeholder="voce@exemplo.com" required /></div><div class="field"><label for="message">Mensagem</label><textarea id="message" name="message" placeholder="Escreva uma mensagem de teste..."></textarea></div><button class="button" type="submit">Preparar mensagem ↗</button><p class="form-note" id="form-status" role="status">Demonstração: este formulário não envia dados.</p></form></div>
      </section>`
  }
};

const app = document.querySelector('#app');
const nav = document.querySelector('#main-nav');
const menuToggle = document.querySelector('.menu-toggle');

function currentPath() { return window.location.pathname.replace(/\/$/, '') || '/'; }
function render() {
  const path = currentPath();
  const route = routes[path] || routes['/'];
  app.innerHTML = route.view;
  document.title = route.title;
  document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === route.key));
  document.querySelectorAll('[data-route]').forEach(link => link.addEventListener('click', handleRoute));
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', (event) => { event.preventDefault(); document.querySelector('#form-status').textContent = 'Mensagem preparada apenas como demonstração — nada foi enviado.'; });
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
  app.focus({ preventScroll: true });
}
function handleRoute(event) {
  const href = event.currentTarget.getAttribute('href');
  if (!href || href.startsWith('http')) return;
  event.preventDefault(); history.pushState({}, '', href); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
window.addEventListener('popstate', render);
render();
