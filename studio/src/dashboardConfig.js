export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60128e657d6577b1edf9b979',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2ocvqcig',
                  apiId: 'faf2479e-4806-4c69-b363-117ebb5ee6c6'
                },
                {
                  buildHookId: '60128e65be125fe6fb489be4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-p2etyuyd',
                  apiId: '241e1217-be46-437c-b868-7bbd330b3c06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theheadlesscms/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-p2etyuyd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
