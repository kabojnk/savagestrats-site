import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from './article.module.css'

class ArticlePostTemplate extends React.Component {
  render() {
    const article = get(this.props, 'data.contentfulArticle')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = article.teaser.childMarkdownRemark.excerpt
    const plainTextBody = article.body.childMarkdownRemark.excerpt
    const {minutes: timeToRead} = readingTime(plainTextBody)

    return (
      <Layout location={this.props.location}>
        <Seo title={article.title} description={plainTextDescription}/>
        <Hero image title={article.title} content={article.description}/>
        <div className={styles.container}>
          <span className={styles.meta}>
            {article.author?.name} &middot;{' '}
            <time dateTime={article.date}>{article.date}</time> –{' '}
            {timeToRead} minute read
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {article.body?.childMarkdownRemark?.html &&
              <div dangerouslySetInnerHTML={{__html: article.body.childMarkdownRemark.html}} />
              }
            </div>
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/article/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/article/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticlePostTemplate

export const pageQuery = graphql`
    query ArticleBySlug(
        $slug: String!
        $previousPostSlug: String
        $nextPostSlug: String
    ) {
        contentfulArticle(slug: { eq: $slug }) {
            slug
            title
            author {
                name
            }
            date(formatString: "MMMM Do, YYYY")
            rawDate: date
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            teaser {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
        }
        previous: contentfulArticle(slug: { eq: $previousPostSlug }) {
            slug
            title
        }
        next: contentfulArticle(slug: { eq: $nextPostSlug }) {
            slug
            title
        }
    }
`
