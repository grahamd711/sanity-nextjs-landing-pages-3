export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6290446da2a115472afdac34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-3-studio-mbcthn6h',
                  apiId: '9f3d8fa5-0ef1-4afa-bfe6-9d55e785d231'
                },
                {
                  buildHookId: '6290446d07a43c451a08501f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-3-web-kecp9cq4',
                  apiId: '5c96aa24-9029-4461-a7b3-a59c126ecf97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/grahamd711/sanity-nextjs-landing-pages-3',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-3-web-kecp9cq4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
