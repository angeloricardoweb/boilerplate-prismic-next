<h1 align=center>
    <img src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" width=35 height=35 />
    PWA Next.JS Template
</h1>

<div align="center" style="margin-top: 30px;">
    <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank"  rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="26"
    </a> &nbsp;&nbsp;
    <a href="https://nextjs.org/docs/getting-started" target="_blank"  rel="noopener noreferrer" >
        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="25"/>
    </a>&nbsp;&nbsp;
     <a href="https://www.typescriptlang.org/" target="_blank"  rel="noopener noreferrer" >
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height="25"/>
    </a>&nbsp;&nbsp;
     <a href="https://tailwindcss.com/" target="_blank"  rel="noopener noreferrer" >
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" height="25"/>
    </a>&nbsp;&nbsp;
     <a href="https://sass-lang.com/" target="_blank"  rel="noopener noreferrer" >
        <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" height="25"/>
    </a>&nbsp;&nbsp;
</div>

<h4 align=center>
  <a href="#notebook-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#black_nib-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
</h4>

# :notebook: About

Template Writed on Next JS with Typescript, with mainly tools to your Work.

# :hammer: Technologies

#### 📃 Dependencies: -> <i><kbd> [package.json](./package.json) </kbd></i>

- [x] <b>[React Js](https://reactjs.org/):</b> <i>JS Lib to build interface</i>
- [x] <b>[Typescript](https://www.typescriptlang.org/):</b> <i>It's written in TypeScript</i>
- [x] <b>[Next Js](https://nextjs.org/docs/getting-started):</b> <i>Project creation tool </i>
- [x] <b>[Axios](https://github.com/axios/axios):</b> <i> Best lib to work with Promise-based HTTP client </i>
- [x] <b>[SASS](https://sass-lang.com/):</b> <i>To optimize CSS perfomance</i>
- [x] <b>[Tailwind](https://tailwindcss.com/):</b> <i> Faster and Powerful CSS tool</i>
- [x] <b>[Deisy UI](https://daisyui.com/):</b> <i> Tailwind UI Framework </i>
- [x] <b>[Testing Library](https://testing-library.com/):</b> <i> Powerful Testing Library </i>
- [x] <b>[React Hook Form](https://react-hook-form.com/):</b> <i> Performant, flexible and extensible forms with easy-to-use validation</i>

# :black_nib: Getting Started

If you want to run this app on your dev workspace, look that:

You must have installed:

- **Node.js**. <i>[Here](https://nodejs.org/en/)</i>

Downloading dependencies:

```bash
  $ npm install

  # or

  $ yarn
```

:fire: Once dependencies download, just run your start command :

```bash
  $ npm dev

  # or

  $ yarn dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## i18N
How to use i18N in Next.js

- [Doc](https://www.alura.com.br/artigos/i18n-no-next-js)

```
import { useRouter } from 'next/router'

const router = useRouter()
const { locale } = router

const handleToggle = () => {
 switch(locale){
    case “pt-BR”
       router.push(“/”, “/”, {locale:”en-US” })
       break
    case “en-US”
    router.push(“/”, “/”, {locale: “pt-BR”})
    break
   }
}

```
