export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61099ebdef129e00a1211a74',
                  title: 'Sanity Studio',
                  name: 'testsite-sanity-studio',
                  apiId: '2a6bdda8-a481-471f-a570-eb3337ad6893'
                },
                {
                  buildHookId: '61099ebdbb549c00e281a6dc',
                  title: 'Portfolio Website',
                  name: 'testsite-sanity',
                  apiId: 'adac5b63-5772-4a1a-a587-6e7c52910f8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephan099/testsite-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://testsite-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
