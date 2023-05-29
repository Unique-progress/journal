import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "22q13",
  description: "Справочная информация по синдрому Фелан-МакДермид",
  head: [
    ['script', { id: 'yandex-forms-embed', src: 'https://yastatic.net/s3/frontend/forms/_/embed.js'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Анкета', link: '/anketa' }
    ],
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ]
  }
})
