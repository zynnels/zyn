# LZ Newsletter — BE FIRST

Sistema real para Vercel:
- cadastro de e-mail;
- Supabase para guardar inscritos;
- confirmação opcional via Resend;
- envio de novo drop para inscritos ativos;
- descadastro;
- endpoint de broadcast protegido por ADMIN_SECRET.

## 1. Supabase
Crie um projeto e rode `supabase.sql` no SQL Editor.

## 2. Resend
Crie uma conta, verifique o domínio da LZ e gere uma API key.

## 3. Vercel
Suba este projeto no GitHub e importe na Vercel.
Em Settings > Environment Variables, adicione todas as variáveis de `.env.example`.
NUNCA coloque SERVICE_ROLE_KEY, RESEND_API_KEY ou ADMIN_SECRET no GitHub.

## 4. Cadastro
O formulário chama POST `/api/subscribe`.

## 5. Enviar um novo drop
Faça POST `/api/broadcast` com header:
Authorization: Bearer SEU_ADMIN_SECRET
Content-Type: application/json

Body:
{
  "title":"Noise With Purpose",
  "description":"Novo hoodie LZ disponível agora.",
  "price":"€34,99",
  "image":"https://seudominio.com/assets/products/hoodie-black.png",
  "url":"https://seudominio.com/#catalogo"
}

IMPORTANTE: o endpoint não deve ser chamado do JavaScript público da loja porque revelaria ADMIN_SECRET.
Use Postman/cURL ou um painel administrativo server-side.

## Integração no site LZ existente
Você pode copiar `api/`, `package.json`, `supabase.sql` e o JS do formulário deste `index.html` para o projeto principal.
