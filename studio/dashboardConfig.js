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
                  buildHookId: '62d77237230c125852716ea8',
                  title: 'Sanity Studio',
                  name: 'jtf-mvp-studio-zk4m9abb',
                  apiId: '1964f017-1e85-4ddb-9f56-f8981f2fe20a'
                },
                {
                  buildHookId: '62d772376cacf95f94e92ffe',
                  title: 'Landing pages Website',
                  name: 'jtf-mvp-web',
                  apiId: 'a22a71ba-015b-4ada-a6c8-affb796b12f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh22/jtf_mvp',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jtf-mvp-web.netlify.app', category: 'apps' }
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
