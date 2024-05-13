# switch-ui

A SwitchUI é a biblioteca de componentes em React para os produtos SwitchDreams LTDA.

[LookBook](https://ui.switchdreams.com.br/)

[Figma](https://www.figma.com/file/tygmPPx4ux69Uu3MzLKvtb/Switch-UI?node-id=0%3A1&mode=dev)

## Instalação

A biblioteca é um pacote privado da Switch Dreams utilizando o Github Packages. Para maiores dúvidas leia a
seguinte [docs](https://docs.github.com/en/github-ae@latest/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

- Autenticar no Github Packages (No lugar do password use um TOKEN)

```bash
npm login --registry=https://npm.pkg.github.com --scope=@switchdreams
```

- Crie um arquivo `.npmrc` na raiz do projeto com o seguinte conteúdo:

```bash
@switchdreams:registry=https://npm.pkg.github.com
```

- Instale o pacote utilizando `yarn add @switchdreams/ui`

- No seu arquivo tailwind.config.js adicione o seguinte código:

```js
import { colors } from '@switchdreams/ui'
import switchUiPlugin from '@switchdreams/ui/dist/tailwind.plugin'

module.exports = {
  content: [
    './node_modules/@switchdreams/ui/dist/**/*.js',
    //...
  ],
  theme: {
    extend: {
      curvature: {
        md: 0, // Configura a curvatura dos componentes
        full: 0,
      },
      colors: colors, // Cores de 0 25 to 950 (altere as cores primaria e secundárias para os projetos)
      fontFamily: {
        default: ['Poppins', 'sans-serif'], //.. Opcional
      },
    },
  },
  plugins: [
    switchUiPlugin,
  ],

}
```

## Para configuração sem tailwind

- Importe o seguinte arquivo css `import '@switchdreams/ui/dist/style.css'`

## Configuração dos componentes

Os componentes em geral são configuráveis pela fonte, no caso especial é o componente do botão que possui um tema
específico no tailwind, que é possível configurar dessa forma.

```js
//... tailwind.config.js  
module.exports = {
  //...
  theme: {
    extend: {
      colors: {
        ...colors,
        btn: {
          primary: {
            bg: colors.primary["300"],
            hover: colors.primary["400"],
            active: colors.primary["500"],
            focus: colors.primary["300"],
            text: colors.gray.white,
          },
          outline: {
            bg: colors.gray.white,
            hover: colors.primary["25"],
            active: colors.primary["100"],
            focus: colors.gray.white,
            text: colors.primary["300"],
          },
          invisible: {
            bg: colors.gray.white,
            hover: colors.gray["50"],
            active: colors.gray["100"],
            focus: colors.gray["white"],
            text: colors.gray["800"],
          },
        },
      },
    },
    //...
  },
}
```

## Configurações das Fontes

Por padrão nossa biblioteca deveria utiliza a fonte Poppins, porém para deixar mais flexível e diminuir o
tamanho do bundle, deixamos a cargo do projeto a escolha da fonte:

```css
/* Seu arquivo css do projeto */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* or */

@font-face {
    font-family: "Poppins";
    src: url("../../fonts/Poppins-Medium.ttf");
    font-weight: 500;
}


/* Font padrão para os outros componentes do sistema além os textos */
html {
    font-family: Poppins, sans-serif;
}
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
      },
    },
  },
}
```

## Ferramentas

- React
- [Github Pacakges](https://github.com/features/packages)
- Tailwind
- Headless/UI para acessibilidade e animações
- LookBook para visualização de componentes

## Inspirações

Isaac Newton - "Se eu vi mais longe que outros é porque estive aos ombros de gigantes."

- [Shadcn/ui](https://ui.shadcn.com/docs)
- [Primer github](https://primer.style/design/)

## Observação:

#### Personalização

Todos os componentes foram projetados para ser altamente personalizável usando classes CSS da biblioteca Tailwind CSS.
Você pode ajustar as cores, fontes e espaçamento de acordo com suas necessidades.

## Mudanças da V 0.4 para a V 1.0

## Breaking Changes
- Mudança de posicionamento do Tooltip e Popover: Atualmente o Tooltip não ocupa a melhor posição possível pelo fato de estarmos utilizando uma biblioteca nova, o popover
também possui o uso da mesma biblioteca porém ainda é possível se passar o position para o popover.
- O comportamento do componente Tab foi alterado onde agora para se utilizar o usuário deve passar as tabs como children e não mais utilizando o array de tabs.

### Correções
- Correção do tamanho do item da Sidebar
- correção na propriedade disabled do componente SelectBox
- Correção das cores de selecionado dos componentes do SelextBox
- Correção das cores de cinza dos componentes de SelectBox, SearchInput e TextField
- Correção do Z-index dos componentes tooltip e popover
- Correção em todas as cores da biblioteca

### Melhorias

- Adição de sombra para o componente do SelectBox
- Melhora da DX do vite com auto complete
- Upgrade nas dependências da biblioteca
- Melhora na responsividade do componente Text
- Padronização das props para os componentes de Forms.
- Melhora no comportamento do componente Sidebar, ao clicar no DropdownItem ela abre.
- Melhorias nas documentações da biblioteca
- Componentes Tooltip e Popover com um comportamento melhor, não necessário mais setar o position.
- Remoção dos warnings da biblioteca.

### Novas funcionalidades
- Criação do componente de Paginação.
- Criação do componente de Modal.
- Criação do novo componente de Tabs.
- Criação de um novo componente SelectBox
- Adição do Tree Shaking para a biblioteca com o intúito de melhorar o bundle para o usuário.
- Adição da props Loading para o botão.

#### Conclusão

Os componentes da SwitchUI oferecem uma maneira simples e eficaz de componentes interativos e responsivos em seus
projetos. Eles combinam o poder do Tailwind CSS e dos códigos mais recentes para criar uma experiência de usuário
agradável e elegante. Experimente e adapte-o para se adequar ao seu design e estilo específicos.

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