#### Tree-Shaking

O tree-shaking é uma das partes mais complicadas ao se trabalhar com biblioteca de componentes.

Basicamente o tree-shaking é uma técnica de otimização de código que elimina o código morto (código que não é utilizado)
do seu bundle final.

Para garantir o tree-shaking é necessário que seu código esteja no esm, que sua funções não tenha side effects ou utilizar a anotação do bundle `/* @__PURE__ */`, para
isso utilizamos duas ferramentas para auxiliar:

- A primeira é o eslint-plugin-tree-shaking
- A segunda ferramenta é o Plugin rollup-plugin-pure que anota algumas funções como PURAS;
- A terceira é o agadoo que verifica se seu código está otimizado para o tree-shaking (Essa ferramenta não confio muito
  sinceramente, creio que ela tenha falso positivo)
    - Para rodar basta: `yarn build && yarn agadoo`
    - O output será o código que não está otimizado para o tree-shakable

Como verificar se meu componente está Tree-Shakable?

- No index.js os componentes que atualmente não estão tree-shakable segundo o agadoo estão comentados
- Comente todos os componentes com TODO
- Rode o agadoo vai retornar sucesso
- Descomente um dos componentes e rode o agadoo novamente
- Se der erro, o componente não está otimizado para o tree-shaking

Problemas atuais

- Atualmente os componentes que utilizam a headlessui ou então o react-mask-input não são tree-shakable

Fontes:

- https://github.com/vitejs/vite/issues/5174