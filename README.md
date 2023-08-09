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
import switchUiPlugin from '@switchdreams/ui/tailwind.config'

module.exports = {
  content: [
    './node_modules/@switchdreams/ui/dist/**/*.js',
    //...
  ],
  theme: {
    extend: {
      colors: colors, // Cores de 0 25 to 950 (altere as cores primaria e secundárias para os projetos)
      fontFamily: {
        default: ['Poppins', 'sans-serif'], //.. Opcional
      },
    },
  },
  plugins: [
    switchUiPlugin({
      roundedComponents: false, // True para componentes arredondados
    }),
  ],

}
```

## Para configuração sem tailwind

- Importe o seguinte arquivo css `import '@switchdreams/ui/dist/style.css'`

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
