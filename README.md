# Áurea 18K — Site institucional e catálogo

Site responsivo em HTML, CSS e JavaScript, com fotos e logotipo originais obtidos do perfil público @aurea18.k em 15/11/2026. Não precisa instalar bibliotecas ou executar uma compilação.

Verificação realizada: prévia local HTTP 200; imagens carregadas sem falhas; filtros, diálogo e perguntas frequentes conferidos; menu móvel testado em 390 px; ausência de rolagem horizontal nas larguras verificadas. A publicação online não foi concluída porque a conexão com o repositório da hospedagem falhou. O pacote contém o site completo para abrir localmente ou publicar em outra hospedagem.

## Abrir sem instalar nada

Abra `dist/index.html` no navegador. Os filtros, menu, detalhes das peças e links funcionam também dessa forma. A fonte usa Google Fonts quando há conexão, com alternativas locais se estiver offline.

## Comandos para executar

Abra o terminal na pasta deste projeto. É necessário Node.js para os comandos abaixo.

```powershell
# Verificar JavaScript, arquivos, imagens, metadados e links internos
node --check dist/app.js
node scripts/check.mjs

# Iniciar a prévia local
node scripts/serve.mjs
```

Acesse `http://127.0.0.1:4173`. Para encerrar, pressione Ctrl+C no terminal.

Se o npm estiver disponível, há comandos equivalentes:

```powershell
npm run dev
npm run check
npm run build
npm run preview
npm run package
```

`build` valida a pasta estática `dist/`, que já contém o site completo. `package` usa o utilitário tar do sistema e cria `release/aurea-18k-site.zip`.

## Publicar no GitHub Pages

Envie **o conteúdo de `dist/`**, incluindo `index.html`, `styles.css`, `app.js`, `img/` e `.nojekyll`, para a raiz do repositório de publicação. Em Settings → Pages, escolha Deploy from a branch, branch principal e pasta /(root). O GitHub apresentará o endereço HTTPS quando a publicação terminar. Não envie apenas o ZIP.

Em qualquer hospedagem estática, a pasta a publicar é `dist/`. Não há servidor de aplicação, banco de dados nem chaves secretas.

## Conteúdo e alterações

- `dist/index.html`: conteúdo e estrutura da página.
- `dist/styles.css`: cores, fontes e layout responsivo.
- `dist/app.js`: filtros, menu e diálogo com os detalhes das joias.
- `dist/img/`: fotos originais, capas de Reels e logotipo.
- `PROMPT-CRIACAO.md`: comando completo em linguagem natural para recriar ou evoluir este projeto.
- `.openai/hosting.json`: identifica a publicação privada correspondente. Não reutilize esse identificador para criar um site de outro cliente.

Contato oficial confirmado na bio: `https://wa.me/message/ZTF335VPNN62A1`. Instagram: `https://www.instagram.com/aurea18.k/`.

Os Reels abrem no Instagram a partir das capas originais. O site não depende de incorporações, cookies ou login do Instagram para exibir as fotos. As imagens estão incluídas no pacote, sem depender de links temporários do Instagram.

Os títulos “Argolas Áurea”, “Composição em Ouro” e demais nomes de apresentação organizam o catálogo deste site; não representam códigos oficiais de estoque. Não foram inventados preços, avaliações de clientes, condições de garantia ou prazos. Disponibilidade e condições comerciais são consultadas no atendimento. Não há checkout, cobrança ou envio automático de mensagens.

## Antes da divulgação comercial

Confirmar com a Áurea a seleção e autorização das mídias, nomes oficiais dos modelos, especificações, políticas comerciais e eventual inclusão de endereço, CNPJ, horários e informações de privacidade. O conceito editorial e os passos de encomenda devem ser revisados pela empresa para refletirem seu atendimento real.

## Origem das imagens

| Arquivo | Publicação original |
|---|---|
| logo.jpg | Foto de perfil de @aurea18.k |
| tanzanita.jpg | https://www.instagram.com/aurea18.k/p/DesO_TamZri/ |
| brincos.jpg | https://www.instagram.com/aurea18.k/p/DfdbMteu0Z2/ |
| pulseira.jpg | https://www.instagram.com/aurea18.k/p/DfSQF0PFq2U/ |
| corrente.jpg | https://www.instagram.com/aurea18.k/p/DeJ8gyAlj8b/ |
| grumet.jpg | https://www.instagram.com/aurea18.k/p/Dc6U8hhFt1b/ |
| riviera.jpg | https://www.instagram.com/aurea18.k/p/DcKW3fmlqva/ |
| solitario.jpg | https://www.instagram.com/aurea18.k/p/Dbbk6CmlqBR/ |
| reel-detalhes.jpg | https://www.instagram.com/aurea18.k/reel/DefUJWkPdGE/ |
| reel-paraiba.jpg | https://www.instagram.com/aurea18.k/reel/DeDP94TJb7j/ |
