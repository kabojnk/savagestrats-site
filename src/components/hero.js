import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {image && (
      <StaticImage
        className={styles.image}
        alt={title}
        src="https://images.ctfassets.net/04fyrp8m0ws9/1uYiMwdEJSt4ZyhDTjCvIY/a407c23712a27d324e7ab4b4fadd3bb1/unknown.png"
      />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero
