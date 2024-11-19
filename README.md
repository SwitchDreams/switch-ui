# switch-ui

A SwitchUI é a biblioteca de componentes em React para os produtos SwitchDreams LTDA.

[LookBook](https://ui.switchdreams.com.br/)

[Figma](https://www.figma.com/file/tygmPPx4ux69Uu3MzLKvtb/Switch-UI?node-id=0%3A1&mode=dev)

## Instalação

> Antes da versão 1.3.0 era utilizado o github packages, portanto era necessário [mais passos para instalação](https://github.com/SwitchDreams/switch-ui/blob/main/docs/old-install-with-github-package.md)

- Instale o pacote utilizando `yarn add @switchdreams/ui`

- No seu arquivo tailwind.config.js adicione o seguinte código:

```js
import { colors } from "@switchdreams/ui"
import switchUiPlugin from "@switchdreams/ui/dist/tailwind.plugin"
import generated from "@headlessui/tailwindcss";

module.exports = {
  content: [
    "./node_modules/@switchdreams/ui/dist/**/*.js",
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
    generated({ prefix: "ui" })
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

#### Conclusão

Os componentes da SwitchUI oferecem uma maneira simples e eficaz de componentes interativos e responsivos em seus
projetos. Eles combinam o poder do Tailwind CSS e dos códigos mais recentes para criar uma experiência de usuário
agradável e elegante. Experimente e adapte-o para se adequar ao seu design e estilo específicos.

#### Outras Documentação

- Tree-shaking: docs/tree-shaking.md
- Guia de upgrade da V0.4 para 1.0: docs/upgrade-guide.md
