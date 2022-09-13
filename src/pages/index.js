import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Featured from '../components/featured'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const articles = get(this, 'props.data.allContentfulArticle.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Featured
          articles={articles}
        />
        <Hero
          image
          title={author.name}
          content={author.shortBio}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
      allContentfulArticle(sort: {fields: [date], order: DESC}) {
          nodes {
              id
              title
              slug
              updatedAt(formatString: "MMMM Do, YYYY")
              date(formatString: "MMMM Do, YYYY")
              teaser {
                  raw
              }
              content {
                  raw
              }
              author {
                  twitter
                  title
                  name
                  shortBio {
                      raw
                  }
                  contentful_id
              }
          }
      }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
      }
    }
  }
`
