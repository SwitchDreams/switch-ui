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
import switchUiPlugin from '@switchdreams/ui/dist/tailwind.config'

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
    switchUiPlugin(),
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

## Como usar:

### Accordion Menu:

#### Uso Básico:

O componente AccordionMenu é usado para criar uma seção de menu de acordeão. Aqui está como você pode usá-lo:

``` jsx
<AccordionMenu title="Título da Seção">
  {/* Conteúdo da seção */}
  <p>Este é o conteúdo da seção de acordeão.</p>
</AccordionMenu>
```

#### Props:
O componente AccordionMenu possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| title       | string                  | Sim         | O título da seção do acordeão.                     |
| size        | "lg" \| "md" \| "sm"    | Opcional    | Define o tamanho do acordeão.                      |
| children    | ReactNode               | Opcional    | O conteúdo da seção do acordeão.                   |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |

#### Exemplo Completo
Aqui está um exemplo mais complexo de como você pode usar o componente AccordionMenu:

``` jsx
import React from 'react';
import AccordionMenu from './AccordionMenu';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <AccordionMenu title="Seção 1" size="md">
        <p>Conteúdo da Seção 1.</p>
      </AccordionMenu>
      <AccordionMenu title="Seção 2" size="lg">
        <p>Conteúdo da Seção 2.</p>
      </AccordionMenu>
      <AccordionMenu title="Seção 3" size="sm">
        <p>Conteúdo da Seção 3.</p>
      </AccordionMenu>
    </div>
  );
};

export default App;
```

### Avatar:

#### Uso Básico:

O componente Avatar é usado para exibir avatares de usuário. Aqui está como você pode usá-lo:

```jsx
import React from 'react';
import Avatar from './Avatar';

const App = () => {
  return (
      <Avatar name="Alice Johnson" size="sm" color="primary" avatarUrl="url-da-imagem" />
  );
};

export default App;
```

#### Props:
O componente Avatar possui as seguintes props:


| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| color       | "primary" \| "gray"     | Opcional    | Define a cor do avatar.                            |
| isOn        | boolean                 | Opcional    | Define se o usuário está online.                  |
| name        | string                  | Sim         | Nome do usuário para exibição.                    |
| avatarUrl   | string                  | Opcional    | URL da imagem do avatar.                          |
| size        | "xl" \| "lg" \| "md" \| "sm" \| "xs" | Opcional | Define o tamanho do avatar.                       |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |


### Badge:

O componente Badge é usado para exibir distintivos (badges) estilizados. Aqui está como você pode usá-lo:

```jsx
import React from 'react';
import Badge from './Badge';
import { XMarkIcon } from '@heroicons/react/24/solid';

const App = () => {
  return (
    <Badge label="Danger Badge" color="danger" />
  );
};

export default App;
```

#### Props:

O componente Badge possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| label       | string                  | Sim         | O texto a ser exibido no distintivo.               |
| icon        | boolean                 | Opcional    | Define se um ícone deve ser exibido.               |
| iconSide    | "right" \| "left"       | Opcional    | Define o lado em que o ícone deve ser exibido.     |
| color       | "primary" \| "secondary" \| "success" \| "warning" \| "danger" | Opcional | Define a cor do distintivo.           |
| outline     | boolean                 | Opcional    | Define se o distintivo terá estilo de contorno.    |
| opacity     | boolean                 | Opcional    | Define se o distintivo terá opacidade.             |
| full        | boolean                 | Opcional    | Define se o distintivo terá bordas arredondadas.   |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |
| rest        | HTMLProps\<HTMLDivElement\> | Opcional  | Outras props HTML que podem ser aplicadas ao componente. |

### Button:

O componente Button é usado para criar botões estilizados. Ele é altamente customizável e pode exibir um ícone, ter diferentes tamanhos e variantes.

#### Uso Básico:

```jsx
import React from 'react';
import Button from './Button';
import { CheckIcon } from '@heroicons/react/24/solid';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Button label="Clique Aqui" />
      <Button label="Salvar" variant="primary" icon={CheckIcon} />
      <Button label="Desativado" disabled={true} />
    </div>
  );
};

export default App;
```
#### Props:

O componente Button possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| variant     | "primary" \| "outline" \| "invisible" \| "danger" | Opcional | Define a variante do botão. |
| size        | "xl" \| "lg" \| "md" \| "sm" \| "xs" | Opcional | Define o tamanho do botão.                       |
| disabled    | boolean                 | Opcional    | Define se o botão está desativado.                |
| label       | string                  | Sim         | O texto a ser exibido no botão.                   |
| iconSide    | "left" \| "right"       | Opcional    | Define o lado em que o ícone deve ser exibido.     |
| icon        | ElementType             | Opcional    | Define o ícone a ser exibido.                    |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |
| onClick     | (e: React.MouseEvent\<HTMLElement\>) => void | Opcional | Função de callback para o evento de clique no botão. |

### CheckBox:

O componente CheckBox é usado para criar caixas de seleção estilizadas. Ele permite que os usuários selecionem ou deselecionem opções.

#### Uso Básico:

```jsx
import React from 'react';
import CheckBox from './CheckBox';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <CheckBox name="option1" label="Opção 1" />
      <CheckBox name="option2" label="Opção 2" disabled={true} />
      <CheckBox name="option3" label="Opção 3" color="secondary" />
    </div>
  );
};

export default App;
```

#### Props:

O componente CheckBox possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| disabled    | boolean                 | Opcional    | Define se a caixa de seleção está desativada.      |
| name        | string                  | Sim         | Nome para a caixa de seleção.                      |
| size        | "small" \| "medium" \| "large" | Opcional | Define o tamanho da caixa de seleção.          |
| shape       | "circle" \| "square"    | Opcional    | Define a forma da caixa de seleção.                |
| color       | "primary" \| "secundary" | Opcional | Define a cor da caixa de seleção.                |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |
| rest        | HTMLProps\<HTMLInputElement\> | Opcional | Outras props HTML que podem ser aplicadas à caixa de seleção. |

### FloatingButton:

O componente FloatingButton é usado para criar botões flutuantes com ícones. Esses botões são ótimos para ações de destaque.

#### Uso Básico:

```jsx
import React from 'react';
import FloatingButton from './FloatingButton';
import { PlusIcon } from '@heroicons/react/24/solid';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <FloatingButton label="Adicionar" icon={PlusIcon} />
    </div>
  );
};

export default App;
```
#### Props:

O componente FloatingButton possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| variant     | "primary" \| "invisible" | Opcional    | Define a variante do botão flutuante.              |
| size        | "lg" \| "md" \| "sm"     | Opcional    | Define o tamanho do botão flutuante.               |
| label       | string                  | Sim         | O texto a ser exibido no botão flutuante.          |
| icon        | ElementType             | Sim         | O ícone a ser exibido no botão flutuante.          |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |
| onClick     | (e: React.MouseEvent\<HTMLElement\>) => void | Opcional | Função de callback para o evento de clique no botão flutuante. |


### ProgressBar:

O componente ProgressBar é usado para exibir uma barra de progresso com diferentes tamanhos e porcentagens.

#### Uso Básico:

```jsx
import React from 'react';
import ProgressBar from './ProgressBar';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <ProgressBar percentage={50} />
      <ProgressBar size="lg" percentage={75} />
    </div>
  );
};

export default App;
```

#### Props:

O componente ProgressBar possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| size        | "sm" \| "md" \| "lg" \| "xl" \| "2xl" | Opcional    | Define o tamanho da barra de progresso.           |
| percentage  | number                  | Sim         | A porcentagem atual da barra de progresso.         |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |


### RadioButton:

O componente RadioButton é usado para criar botões de seleção em forma de círculo.

#### Uso Básico:

```jsx
import React from 'react';
import RadioButton from './RadioButton';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <RadioButton name="option" />
      <RadioButton size="lg" name="option" />
    </div>
  );
};

export default App;
```
#### Props:

O componente RadioButton possui as seguintes props:

| Propriedade | Tipo                    | Obrigatório | Descrição                                           |
|-------------|-------------------------|-------------|-----------------------------------------------------|
| size        | "small" \| "medium" \| "large" | Opcional    | Define o tamanho do botão de seleção.             |
| disabled    | boolean                 | Opcional    | Define se o botão de seleção está desativado.     |
| className   | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |

### SearchInput:

O componente SearchInput é usado para criar um campo de entrada de pesquisa com opções filtráveis.

#### Uso Básico:

```jsx
import React, { useState } from 'react';
import SearchInput from './SearchInput';

const options = [
  { info: 'Option 1' },
  { info: 'Option 2' },
  { info: 'Option 3' },
  // ... outras opções
];

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="container mx-auto p-4">
      <SearchInput
        label="Pesquisar"
        options={options}
        size="md"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

export default App;
```

#### Props:

O componente SearchInput possui as seguintes props:

| Propriedade        | Tipo                    | Obrigatório | Descrição                                           |
|--------------------|-------------------------|-------------|-----------------------------------------------------|
| label              | string                  | Sim         | O rótulo do campo de entrada de pesquisa.          |
| options            | Options[]               | Opcional    | As opções de filtro para a pesquisa.               |
| size               | "lg" \| "md" \| "sm"    | Opcional    | Define o tamanho do campo de entrada de pesquisa.  |
| disabled           | boolean                 | Opcional    | Define se o campo de pesquisa está desativado.     |
| selectedValue      | string                  | Opcional    | O valor selecionado no campo de pesquisa.         |
| setSelectedValue   | (value: any) => void    | Sim         | Uma função para definir o valor selecionado.       |
| className          | string                  | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |


## SelectBox Component

O componente `SelectBox` é usado para criar um campo de seleção dropdown personalizado com opções selecionáveis. Ele utiliza a biblioteca `@headlessui/react` para criar a funcionalidade de dropdown.

### Uso Básico:

O componente SelectBox pode ser usado da seguinte forma:

```jsx
import React from 'react';
import SelectBox from './SelectBox';

const options = [
  { value: 1, label: 'Opção 1' },
  { value: 2, label: 'Opção 2' },
  { value: 3, label: 'Opção 3' },
];

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <SelectBox
      options={options}
      size="md"
      label="Selecione uma opção"
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      supportText="Escolha uma opção da lista."
      leftIcon={null}
      error={false}
    />
  );
};

export default MyComponent;
```
#### Props:

O componente SelectBox possui as seguintes props:

| Propriedade     | Tipo                              | Obrigatório | Descrição                                           |
|-----------------|-----------------------------------|-------------|-----------------------------------------------------|
| options         | Options[]                         | Sim         | As opções disponíveis para seleção.                |
| size            | "lg" \| "md" \| "sm"               | Opcional    | Define o tamanho do componente.                    |
| label           | string                            | Sim         | O rótulo do componente.                            |
| disabled        | boolean                           | Opcional    | Define se o componente está desativado.            |
| className       | string                            | Opcional    | Classes CSS adicionais a serem aplicadas ao componente. |
| supportText     | string                            | Opcional    | Texto de suporte exibido abaixo do componente.    |
| leftIcon        | ElementType                      | Opcional    | Um ícone para ser exibido à esquerda do rótulo.    |
| error           | boolean                           | Opcional    | Define se o componente está em estado de erro.    |
| ...rest         | Qualquer outra prop do ListboxProps | Opcional    | Outras props que podem ser passadas para o componente Listbox. |


## Slider Component

O componente `Slider` é usado para criar um controle de slider interativo.

### Uso Básico:

O componente `Slider` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { Slider } from './Slider';
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sliderVariants = cva(
  "relative w-full appearance-none rounded-lg border-0 bg-primary-300 accent-primary-300 hover:accent-primary-400",
  {
    variants: {
      size: {
        small: "h-1 ",
        medium: "h-2",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

const MyComponent = () => {
  return (
    <Slider
      size="medium"
      min={0}
      max={100}
      value={50}
      step={1}
    />
  );
};

export default MyComponent;
```
### Props:

| Propriedade  | Tipo                 | Descrição                                      |
| ------------ | -------------------- | ------------------------------------------------ |
| size         | `"small"`, `"medium"`| O tamanho do controle deslizante.              |
| min          | número               | O valor mínimo do controle deslizante.          |
| max          | número               | O valor máximo do controle deslizante.          |
| value        | número               | O valor atual do controle deslizante.           |
| step         | número               | O valor de incremento ou decremento do controle deslizante. |
| className    | string               | Classes CSS adicionais para estilização.       |
| ...rest      |                      | Outros atributos HTML do input.                 |

### Funcionalidade:

O componente `Slider` oferece a seguinte funcionalidade:

- Arrastar e soltar o controle deslizante para selecionar um valor dentro do intervalo especificado.
- Exibir o valor atual como uma dica de ferramenta ao arrastar o controle deslizante.

### Customização:

O componente `Slider` pode ser customizado usando as seguintes propriedades:

- `size`: Controla o tamanho do controle deslizante (pequeno, médio).
- `min`: Define o valor mínimo do controle deslizante.
- `max`: Define o valor máximo do controle deslizante.
- `value`: Define o valor inicial do controle deslizante.
- `step`: Define o valor de incremento ou decremento do controle deslizante.
- `className`: Permite adicionar classes CSS personalizadas para estilização.

## Spinner

O componente `Spinner` exibe um indicador de carregamento giratório para fornecer feedback visual aos usuários enquanto esperam.

### Uso Básico:

O componente `Spinner` pode ser usado da seguinte forma:
```jsx
import React from 'react';
import { Spinner } from './Spinner';

const MeuComponente = () => {
  return <Spinner size="medium" />;
};

export default MeuComponente;
```

### Props:

| Propriedade  | Tipo       | Descrição                                   |
| ------------ | ---------- | ------------------------------------------- |
| size         | `"small"`, `"medium"`, `"large"`, `"xl"`, `"2xl"` | O tamanho do spinner.                       |
| className    | string     | Classes CSS adicionais para estilização.    |
| ...rest      |            | Outros atributos HTML do elemento `div`.    |

### Funcionalidade:

O componente `Spinner` oferece a seguinte funcionalidade:

- Exibe um indicador de carregamento giratório que gira infinitamente.

### Customização:

O componente `Spinner` pode ser customizado usando a propriedade:

- `size`: Controla o tamanho do spinner (pequeno, médio, grande, extra grande, 2 extra grande).
- `className`: Permite adicionar classes CSS personalizadas para estilização.


## TabComponent

O componente `TabComponent` é usado para criar um sistema de abas com conteúdo associado.

### Uso Básico:

O componente `Tab` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { TabComponent } from './TabComponent';

const MeuComponente = () => {
  const tabs = [
    { name: 'Tab 1', info: <div>Conteúdo da Tab 1</div> },
    { name: 'Tab 2', info: <div>Conteúdo da Tab 2</div> },
    { name: 'Tab 3', info: <div>Conteúdo da Tab 3</div> },
  ];

  return (
    <TabComponent
      size="md"
      padding={false}
      tabs={tabs}
      className="my-tabs"
    />
  );
};

export default MeuComponente;
```

### Props

| Propriedade   | Tipo                      | Descrição                                              |
| ------------- | ------------------------- | ------------------------------------------------------ |
| size          | `"lg" \| "md" \| "sm"`     | Define o tamanho do texto das abas.                   |
| padding       | `boolean`                 | Define se as abas possuem padding ou não.             |
| tabs          | `Tabs[]`                  | Uma array de objetos `Tabs` com informações das abas. |
| className     | `string`                  | Classes CSS adicionais para estilização.              |
| ...rest       |                          | Outros atributos HTML do elemento `div`.              |

### Funcionalidade:

O componente `TabComponent` oferece a seguinte funcionalidade:

- Renderiza as abas com o conteúdo associado a cada aba.
- Permite que os usuários alternem entre as abas clicando nelas.

### Customização:

O componente `TabComponent` pode ser customizado usando as propriedades:

- `size`: Define o tamanho do texto das abas.
- `padding`: Define se as abas possuem padding ou não.
- `tabs`: Uma array de objetos `Tabs` contendo informações das abas.
- `className`: Permite adicionar classes CSS personalizadas para estilização.


## Text Component

O componente `Text` é usado para renderizar texto em vários tamanhos e elementos HTML.

### Uso Básico:

O componente `Text` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { Text } from './Text';

const MeuComponente = () => {
  return (
    <div>
      <Text size="lg">Texto grande</Text>
      <Text size="md">Texto médio</Text>
      <Text size="sm">Texto pequeno</Text>
    </div>
  );
};

export default MeuComponente;
```

### Props

| Propriedade   | Tipo                            | Descrição                                        |
| ------------- | ------------------------------- | ------------------------------------------------ |
| as            | `"dt" \| "dd" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span" \| "legend"` | Define o elemento HTML que será renderizado.   |
| children      | `ReactNode`                     | O conteúdo de texto a ser renderizado.          |
| className     | `string`                        | Classes CSS adicionais para estilização.        |
| size          | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl"` | Define o tamanho do texto.                     |


## TextField

O componente `TextField` é uma base para a criação de campos de entrada de texto com diferentes opções de estilo.

### Uso Básico:

O componente `TextField` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { TextField } from './TextField';

const MeuComponente = () => {
  return (
    <div>
      <TextField
        label="Nome"
        name="nome"
        placeholder="Digite seu nome"
        size="medium"
        supportText="Insira seu nome completo"
        leftIcon={IconComponent}
        rightIcon={SearchIcon}
        disabled={false}
        error={false}
      />
    </div>
  );
};

export default MeuComponente;
```

### Props

| Propriedade       | Tipo            | Descrição                                           |
| ----------------- | --------------- | --------------------------------------------------- |
| leftIcon          | `ElementType`   | Ícone a ser exibido no lado esquerdo do campo.     |
| rightIcon         | `ElementType`   | Ícone a ser exibido no lado direito do campo.      |
| inputElement      | `"input" \| "textarea"` | Define o elemento HTML usado para a entrada de texto. |
| placeholder       | `string`        | Texto de dica exibido quando o campo está vazio.   |
| size              | `"small" \| "medium" \| "large"` | Define o tamanho do campo.                  |
| label             | `string`        | Rótulo do campo.                                   |
| className         | `string`        | Classes CSS adicionais para estilização.           |
| supportText       | `string`        | Texto de suporte exibido abaixo do campo.         |
| disabled          | `boolean`       | Define se o campo está desabilitado.              |
| error             | `boolean`       | Define se o campo possui um erro.                 |
| name              | `string`        | Nome do campo (usado para identificação).         |
| errorMsg          | `string`        | Mensagem de erro a ser exibida quando há erro.    |
| onClickIcon       | `() => void`    | Função chamada quando o ícone é clicado.           |
| ...rest           |                 | Outros atributos HTML do elemento de entrada.     |

O componente `TextField` oferece a seguinte funcionalidade:

- Renderiza um campo de entrada de texto com suporte a ícones nos lados esquerdo e direito.
- Permite definir um rótulo, dica de entrada e texto de suporte.
- Pode ser estilizado com diferentes tamanhos e estados (erro, desabilitado).


## Toast

O componente `Toast` é usado para exibir mensagens curtas e informativas em um formato de toast.

### Uso Básico:

O componente `Toast` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { Toast } from './Toast';

const MeuComponente = () => {
  return (
    <div>
      <Toast
        variant="tonal"
        title="Aviso"
        color="warning"
        message="Esta é uma mensagem de aviso!"
        onClose={() => console.log("Toast fechado")}
        className="my-toast"
      />
    </div>
  );
};

export default MeuComponente;
```

### Props

| Propriedade  | Tipo                          | Descrição                                                 |
| ------------ | ----------------------------- | --------------------------------------------------------- |
| variant      | `"tonal" \| "filled"`         | Define o estilo do toast.                                |
| title        | `string`                      | Título da mensagem do toast.                             |
| color        | `"primary" \| "success" \| "warning" \| "error"` | Define a cor do toast.                            |
| message      | `string`                      | Mensagem do toast.                                       |
| onClose      | `(e: React.MouseEvent<HTMLElement>) => void` | Função chamada ao fechar o toast.              |
| className    | `string`                      | Classes CSS adicionais para estilização.                 |

### Funcionalidade:

O componente `Toast` oferece a seguinte funcionalidade:

- Renderiza uma mensagem curta e informativa em um formato de toast.
- Pode ser estilizado com diferentes cores e estilos de acordo com a propriedade `color` e `variant`.
- Oferece ícones diferentes com base na cor definida.
- Pode ser fechado manualmente pelo usuário.

## ToggleSwitch

O componente `ToggleSwitch` é usado para criar interruptores alternáveis.

### Uso Básico:

O componente `ToggleSwitch` pode ser usado da seguinte forma:

```jsx
import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

const MeuComponente = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <ToggleSwitch
        checked={isChecked}
        onChange={handleToggle}
        size="md"
        disabled={false}
        withIcon={true}
        className="my-toggle-switch"
      />
    </div>
  );
};

export default MeuComponente;
```

### Props

| Propriedade | Tipo      | Descrição                                    |
| ----------- | --------- | -------------------------------------------- |
| checked     | `boolean` | Define se o interruptor está ativado ou não. |
| disabled    | `boolean` | Define se o interruptor está desativado.     |
| withIcon    | `boolean` | Define se o ícone é exibido no interruptor. |
| onChange    | `(checked: boolean) => void` | Função chamada quando o interruptor é alterado. |
| size        | `"sm" \| "md" \| "lg"` | Define o tamanho do interruptor.            |
| className   | `string`  | Classes CSS adicionais para estilização.     |

### Funcionalidade:

O componente `ToggleSwitch` oferece a seguinte funcionalidade:

- Cria um interruptor alternável com visualização de estado.
- Pode ser usado para ativar ou desativar uma opção.
- Oferece suporte para ícones de marca de seleção e marca de X.


## Tooltip

O componente `Tooltip` é usado para criar caixas de ferramentas de informações adicionais que aparecem quando o usuário passa o mouse sobre um elemento.

### Uso Básico:

O componente `Tooltip` pode ser usado da seguinte forma:

```jsx
import React from 'react';
import { Tooltip } from './Tooltip';

const MeuComponente = () => {
  return (
    <Tooltip title="Informação Adicional" description="Isso é uma descrição do elemento">
      <button>Elemento com Tooltip</button>
    </Tooltip>
  );
};

export default MeuComponente;
```

### Props

| Propriedade  | Tipo          | Descrição                                               |
| ------------ | ------------- | ------------------------------------------------------- |
| title        | `string`      | O título do tooltip.                                   |
| description  | `string`      | A descrição do tooltip.                               |
| position     | `"top" \| "bottom" \| "left" \| "right" \| "topRight" \| "bottomRight" \| "topLeft" \| "bottomLeft" \| "none"` | A posição do tooltip em relação ao elemento pai.    |
| color        | `"primary" \| "secondary" \| "tertiary"`         | A cor de fundo e texto do tooltip.                   |
| children     | `ReactNode`   | O conteúdo que terá o tooltip.                         |
| className    | `string`      | Classes CSS adicionais para estilização.              |

### Funcionalidade:

O componente `Tooltip` oferece a seguinte funcionalidade:

- Cria caixas de ferramentas informativas que aparecem quando o usuário passa o mouse sobre um elemento.
- Suporta diferentes posições e cores de fundo e texto.
- Pode exibir um título e uma descrição no tooltip.

## Sidebar

O componente sidebar é o mais complexo de nossa biblioteca tendo esle de ser adicionado em partes no código.

### Exemplo completo:

Esse é o exemplo mais completo de uso possível da nossa sidebar.

```jsx
import React from 'react';
import { Sidebar } from './Sidebar';

const MeuComponente = () => {
  return (
    <Sidebar logo="https://switchdreams.com.br/og_image.png">
        <Sidebar.Logo logo="https://switchdreams.com.br/og_image.png"></Sidebar.Logo>
        <Sidebar.Group>
          <Sidebar.Item label="Home" href="" icon={HomeIcon}></Sidebar.Item>
          <Sidebar.Dropdown
            label="Dashboard"
            icon={ChartPieIcon}
            options={[
              { label: "Overview", href: "" },
              { label: "Notifications", href: "" },
              { label: "Analytics", href: "" },
              { label: "Reports", href: "" },
            ]}
          ></Sidebar.Dropdown>
          <Sidebar.Dropdown
            label="Projects"
            icon={FolderOpenIcon}
            options={[
              { label: "Project 1", href: "" },
              { label: "Project 2", href: "" },
              { label: "Project 3", href: "" },
            ]}
          ></Sidebar.Dropdown>
          <Sidebar.Item label="Tasks" href="" icon={DocumentCheckIcon}></Sidebar.Item>
          <Sidebar.Item label="Reporting" href="" icon={NewspaperIcon}></Sidebar.Item>
          <Sidebar.Item label="Users" href="" icon={UsersIcon}></Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.Footer>
          <Sidebar.Item label="Support" href="" icon={ExclamationCircleIcon}></Sidebar.Item>
          <Sidebar.Item label="Settings" href="" icon={Cog6ToothIcon}></Sidebar.Item>
          <hr className="mb-10 mt-8 h-px w-full" />
          <Sidebar.User>
            <Avatar name="F" avatarUrl="" size="sm"></Avatar>
          </Sidebar.User>
        </Sidebar.Footer>
      </Sidebar>
  );
};

export default MeuComponente;
```
### Props por partes: 

#### Sidebar:

| Propriedade  | Tipo          | Descrição                                    |
| ------------ | ------------- | -------------------------------------------- |
| logo         | `string`      | O URL do logotipo a ser exibido.             |


#### Sidebar.Logo:

| Propriedade  | Tipo          | Descrição                                    |
| ------------ | ------------- | -------------------------------------------- |
| logo         | `string`      | O URL do logotipo a ser exibido.             |
| href         | `string`      | O URL para redirecionamento ao clicar no logotipo.|

#### Sidebar.Drop:

| Propriedade  | Tipo                | Descrição                                           |
| ------------ | ------------------- | --------------------------------------------------- |
| label        | `string`            | O rótulo do menu dropdown.                         |
| icon         | `ElementType`       | O ícone a ser exibido ao lado do rótulo.           |
| options      | `Options[]`         | Uma array de opções para o menu dropdown.          |

#### Sidebar.Item:

| Propriedade  | Tipo                | Descrição                                           |
| ------------ | ------------------- | --------------------------------------------------- |
| label        | `string`            | O rótulo do item de menu.                         |
| href         | `string`            | O link para onde o item de menu redireciona.      |
| icon         | `ElementType`       | O ícone a ser exibido ao lado do rótulo.           |

## Observação:

#### Personalização
Todos os componentes foram projetados para ser altamente personalizável usando classes CSS da biblioteca Tailwind CSS. Você pode ajustar as cores, fontes e espaçamento de acordo com suas necessidades.

#### Conclusão
Os componentes da SwitchUI oferecem uma maneira simples e eficaz de componentes interativos e responsivos em seus projetos. Eles combinam o poder do Tailwind CSS e dos códigos mais recentes para criar uma experiência de usuário agradável e elegante. Experimente e adapte-o para se adequar ao seu design e estilo específicos.