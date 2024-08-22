## Instalação

> Antes da versão 1.3.0 utilizamos o Github packages por isso é necessário a seguinte configuração

A biblioteca é um pacote da Switch Dreams utilizando o Github Packages. Mesmo sendo público, é necessário autenticar no github. Para maiores dúvidas leia a
seguinte [docs](https://docs.github.com/en/github-ae@latest/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

- Autenticar no Github Packages (No lugar do password use um TOKEN)

```bash
npm login --registry=https://npm.pkg.github.com --scope=@switchdreams
```

- Crie um arquivo `.npmrc` na raiz do projeto com o seguinte conteúdo:

```bash
@switchdreams:registry=https://npm.pkg.github.com
```