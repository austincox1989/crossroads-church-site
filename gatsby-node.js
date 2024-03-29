const path = require('path')
const redirects = require('./redirects.json')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  redirects.forEach((redirect) =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      isPermanent: true,
    })
  )

  const genericInterior = path.resolve('./src/templates/generic-interior.js')

  const result = await graphql(
    `
      {
        allContentfulGenericInteriorPage {
          nodes {
            slug
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful pages`,
      result.errors
    )
    return
  }

  const pages = result.data.allContentfulGenericInteriorPage.nodes

  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: `/${page.slug}`,
        component: genericInterior,
        context: {
          slug: page.slug,
        },
      })
    })
  }

  // Define a template for blog post
  // const blogPost = path.resolve('./src/templates/blog-post.js')

  // const result = await graphql(
  //   `
  //     {
  //       allContentfulBlogPost {
  //         nodes {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   `
  // )

  // if (result.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your Contentful posts`,
  //     result.errors
  //   )
  //   return
  // }

  // const posts = result.data.allContentfulBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  // if (posts.length > 0) {
  //   posts.forEach((post, index) => {
  //     const previousPostSlug = index === 0 ? null : posts[index - 1].slug
  //     const nextPostSlug =
  //       index === posts.length - 1 ? null : posts[index + 1].slug

  //     createPage({
  //       path: `/blog/${post.slug}/`,
  //       component: blogPost,
  //       context: {
  //         slug: post.slug,
  //         previousPostSlug,
  //         nextPostSlug,
  //       },
  //     })
  //   })
  // }
}
