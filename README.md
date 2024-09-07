This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Dicas

## Realizando Chamadas do Servidor em Componentes que operam no lado do cliente

Para realizar chamadas ao servidor e utilizar os dados em componentes React, siga o exemplo abaixo. Usamos os hooks `useState` e `useEffect` para gerenciar o estado e realizar uma chamada assíncrona.

### Exemplo de Código

```typescript
const [informationsFooter, setInformationsFooter] = 
  React.useState<DadosERedesSociaisDocument | null>(null);

async function getData() {
  const informationFooter = await getInformations();
  setInformationsFooter(informationFooter);
}

React.useEffect(() => {
  getData();
}, []);

```

## Explicação

- `useState`: Inicializa o estado informationsFooter como null ou com o tipo esperado.
- `getData`: Função assíncrona que busca as informações do servidor usando getInformations() e atualiza o estado com os dados.
- `useEffect`: Chama a função getData() assim que o componente é montado, garantindo que os dados do servidor sejam obtidos assim que o componente for renderizado.


