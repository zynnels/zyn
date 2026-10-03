# LZ STORE V5 — ADMIN

## Loja
Abra `/` normalmente.

## Painel administrativo
Abra `/admin` ou `/admin/`.
Senha inicial: `787878`

O painel permite:
- editar/adicionar/excluir produtos;
- ocultar produtos;
- editar preços, nomes, imagens, tamanhos e descrições;
- editar aviso do topo e conteúdo principal da home;
- exportar `config.js`;
- backup/importação JSON.

### Importante
Como esta versão é um site estático, as alterações feitas no painel são salvas no `localStorage` deste navegador. Para publicar para todos os visitantes, use **Backup & Exportar > Baixar config.js** e substitua o `config.js` do GitHub.

A senha `787878` é uma barreira simples no frontend e não é apropriada para uma loja com dados sensíveis ou pagamentos reais. Uma versão futura pode usar autenticação server-side.

## Vercel
Framework Preset: `Other`. Sem build command.
