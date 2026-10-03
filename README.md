# LZ STORE V6 — ADMIN AUTOMÁTICO

Acesse `/admin` e use a senha `787878`.

## Para o botão SALVAR E PUBLICAR funcionar para todo mundo
Na Vercel, em Settings > Environment Variables, configure:

ADMIN_PASSWORD=787878
ADMIN_SESSION_SECRET=uma-chave-longa
GITHUB_TOKEN=seu Fine-grained Personal Access Token do GitHub com permissão Contents: Read and write no repo
GITHUB_OWNER=seu usuário GitHub
GITHUB_REPO=nome do repositório
GITHUB_BRANCH=main

Depois faça Redeploy.

Quando você clicar em SALVAR E PUBLICAR:
1. o painel atualiza `config.json` no GitHub;
2. a Vercel detecta o commit;
3. o site redeploya automaticamente.

O painel também permite upload de imagens direto para `assets/products/`.
