const { test, expect } = require("@playwright/test");

test("página inicial carrega", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Sistema de Cadastro");
  await expect(page.getByRole("heading", { name: "Sistema de Cadastro" })).toBeVisible();
});

test("navegação para a lista", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Lista de alunos" }).click();
  await expect(page).toHaveURL(/#lista/);
  await expect(page.getByRole("heading", { name: "Alunos cadastrados" })).toBeVisible();
});

test("cadastro de aluno com sucesso", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Nome").fill("João da Silva");
  await page.getByLabel("E-mail").fill("joao@email.com");
  await page.getByLabel("Curso").selectOption("Desenvolvimento de Sistemas");
  await page.getByRole("button", { name: "Cadastrar aluno" }).click();

  await expect(page.getByRole("status")).toHaveText("Aluno cadastrado com sucesso!");
  await expect(page.getByText(/João da Silva — joao@email.com/)).toBeVisible();
});

test("remover aluno cadastrado", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Nome").fill("Maria");
  await page.getByLabel("E-mail").fill("maria@email.com");
  await page.getByLabel("Curso").selectOption("Mecatrônica");
  await page.getByRole("button", { name: "Cadastrar aluno" }).click();

  await page.getByRole("button", { name: "Remover Maria" }).click();
  await expect(page.getByText(/Maria — maria@email.com/)).toHaveCount(0);
});

test("captura de tela da página", async ({ page }) => {
  await page.goto("/");
  await page.screenshot({ path: "sistema-teste.png", fullPage: true });
  await expect(page.getByRole("heading", { name: "Cadastro de aluno" })).toBeVisible();
});
