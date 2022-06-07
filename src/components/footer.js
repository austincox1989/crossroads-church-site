import React from 'react'

import * as styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
    </div>
  </footer>
)

export default Footer
