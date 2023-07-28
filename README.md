# switch-ui

A SwitchUI é a biblioteca de componentes em React para os produtos SwitchDreams LTDA.

[Figma](https://www.figma.com/file/tygmPPx4ux69Uu3MzLKvtb/Switch-UI?node-id=0%3A1&mode=dev)

## Instalação

- Instale o pacote utilizando `yarn install @switchdreams/ui`

- No seu arquivo tailwind.config.js adicione o seguinte código:

```js
import { colors } from '@switchdreams/ui'

module.exports = {
  content: [
    './node_modules/@switchdreams/ui/dist/**/*.js',
    //...
  ],
  theme: {
    extend: {
      colors: colors, // Default colors from 25 to 950 (override primary and secondary)
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], //.. Opcional
      },
    },
  },
  plugins: [],
}
```

## Para configuração sem tailwind

- Importe o seguinte arquivo css `import '@switchdreams/ui/dist/style.css'`

## Configurações das Fontes

### TODO...

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