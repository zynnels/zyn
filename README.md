# LZ Store — GitHub + Vercel

Loja estática da LZ pronta para publicar gratuitamente no Vercel.

## Editar produtos
Abra `config.js`. Todos os produtos, preços, textos, cores, links sociais e anúncio superior ficam ali.

## Trocar imagens
Coloque suas imagens dentro de `assets/products/` e mude o caminho `image:` no `config.js`.

## Publicar no GitHub
1. Crie um repositório novo no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Faça commit.

## Publicar no Vercel
1. Entre no Vercel e escolha **Add New > Project**.
2. Importe o repositório do GitHub.
3. Framework Preset: **Other**.
4. Build Command: deixe vazio.
5. Output Directory: deixe vazio.
6. Clique em **Deploy**.

## Checkout real
O carrinho funciona no navegador e salva no LocalStorage, mas o checkout é demonstrativo. Para receber pagamentos reais, conecte Stripe Checkout, Shopify Buy Button ou outra plataforma.
