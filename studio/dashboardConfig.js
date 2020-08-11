export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f320b94974c5a0515da2139',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n9safcr3',
                  apiId: '4894b0d0-eed0-43bc-b163-d53ace8c0255'
                },
                {
                  buildHookId: '5f320b9476f264209f570e5c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bi97skmz',
                  apiId: '7d73f92e-c3da-4573-8f3c-1fee3ce3e49a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jackyso2000/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bi97skmz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
