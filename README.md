# Sistema de Cadastro — Playwright

Projeto simples para praticar testes de interface com Playwright.

## Requisitos
- Node.js instalado
- VS Code (opcional)

## Instalação
Abra o terminal nesta pasta e execute:

```bash
npm install
npx playwright install chromium
```

## Abrir o sistema
```bash
npm start
```
Acesse: http://localhost:3000

## Executar os testes
Em outro terminal, na mesma pasta:

```bash
npm test
```

Para abrir o navegador durante os testes:

```bash
npm run test:headed
```

Os testes verificam carregamento, navegação, cadastro, remoção e screenshot.
O cadastro é apenas demonstrativo e não salva dados em banco de dados.
