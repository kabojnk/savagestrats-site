import React from 'react'

import * as styles from './featured.module.css'
import { Link } from 'gatsby'

const Featured = ({articles}) => {

  if (!articles || !Array.isArray(articles)) return null

  return (
    <section className={styles.featured}>
      <div className={styles.wrapper}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <h1>The only raiding resource you’ll ever need</h1>
            <p>Savage Strats is the freshest Final Fantasy XIV raiding resource site, replete with only the highest
              quality
              guides and data plots. <strong style={{color: '#fff'}}>Please, don’t go!</strong> Look, I’ve promised a
              lot
              of people that this site will work out.
              People who I owe a lot of money. Please don’t make me a liar, I really need this because otherwise one of
              those people told me “you’re going to find out just how much of you is you once I start removing
              appendages.”</p>
            <p>Let me level with you here. I’m in deep. About <em>$200,000 deep</em>. Should I have not taken the loans?
              Sure. But at
              the time I was under a lot of pressure to go pro in tennis and I wasn't even thinking about the fact
              that I don't know how to play tennis, and how hard it would be to turn it into a career that would pay
              back all my debts.</p>
            <p>So where did all of the money go? Well, I got scammed into a cryptocurrency scheme involving selling
              virtual NFTs of the animatronic puppet performers from Chuck E Cheese. I figured it was going to be an
              easy
              win nostalgia cash grab, but it turned out to be a front for a small arms operation out of
              Moldova. I don't think anybody could have seen it coming. Everything looked good on paper.</p>
            <p>Anyway, the important thing is that I've recovered from the scam and got this site launched. Please use
              this site. I want to keep all of my body parts.</p>
          </div>
          <div className={styles.right}>
            <h2>The new hotness</h2>
            <div>
              <ul className={styles.articleList}>
                {articles.map((article) => {
                  return (
                    <li key={article.slug}>
                      <Link to={`/article/${article.slug}`} className={styles.link}>
                        <h2 className={styles.title}>{article.title}</h2>
                      </Link>
                      <div>
                        {article.teaser?.childMarkdownRemark.excerpt && article.teaser?.childMarkdownRemark.excerpt}
                      </div>
                      <div className={styles.meta}>
                        <small className="meta">{article.date}</small>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
