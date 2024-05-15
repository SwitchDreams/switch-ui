## Mudanças da V0.4 para a V1.0

## Breaking Changes

- Mudança de posicionamento do `Tooltip` e `Popover`: Atualmente o Tooltip não ocupa a melhor posição possível pelo fato
  de estarmos utilizando uma biblioteca nova, o popover também possui o uso da mesma biblioteca porém ainda
  é possível se passar o position para o popover.
- O comportamento do componente `Tab` foi alterado onde agora para se utilizar o usuário deve passar as tabs como
  children
  e não mais utilizando o array de tabs.
- Os componentes `SearchInput` & `SelectBox` foram depreciados (Serão removidos em versões futuras) para adição dos
  novos componentes Select & SelectAsync.

## Changelog

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