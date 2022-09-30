const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const articleComponent = path.resolve('./src/templates/article.js')

  const result = await graphql(
    `
      {
        allContentfulArticle {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const articles = result.data.allContentfulArticle.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (articles.length > 0) {
    articles.forEach((article, index) => {
      const previousPostSlug = index === 0 ? null : articles[index - 1].slug
      const nextPostSlug =
        index === articles.length - 1 ? null : articles[index + 1].slug

      createPage({
        path: `/article/${article.slug}/`,
        component: articleComponent,
        context: {
          slug: article.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
