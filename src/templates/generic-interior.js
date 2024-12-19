import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SimpleHero from '../components/simple-hero/SimpleHero'
import ContentWithImage from '../components/content/ContentWithImage'
import RichTextRenderer from '../components/content/RichTextRenderer'
import BasicContent from '../components/content/BasicContent'

const GenericInterior = ({ data, location }) => {
  const { basicContent, alternatingContentSection, banner, additionalPageContent } =
    data.allContentfulGenericInteriorPage.nodes[0]
  const { hash } = location

  console.log(location.pathname)

  return (
    <Layout hash={hash}>
      <SimpleHero banner={banner} />
      <section className="wrapper">
        {basicContent && (
          <BasicContent
            content={basicContent}
          />
        )}
        {location.pathname === '/text-message-enrollment' && (
          <>
            <iframe src="https://my.pastorsline.com/webwidgets/subscribe?group=154949&number=12076107836&ll=https%3A//images.ctfassets.net/xqktdst6iaiq/djiNqIMsnwenVpoerJkcj/89585e7660be4dd85f77609fbc0492bf/cc-logo-stacked.jpg&bgc=ffffff&ff=Montserrat&fs=N&fz=13&fc=000000&mt=Enroll%20in%20Crossroads%20text%20notifications.&ms=Success%21&rd=&ce=0&cb=0&ca=0&ar=1&mar=&st=Enroll%20Now" width="450" height="600" align="center" scrolling="auto"></iframe>
          </>
        )}
        {alternatingContentSection && (
          <ContentWithImage
            alternatingContentSections={alternatingContentSection}
          />
        )}
        {additionalPageContent && (
          <section className="container">
            <RichTextRenderer
              richText={additionalPageContent}
              className="additional-content"
            />
          </section>
        )}
      </section>
    </Layout>
  )
}

export default GenericInterior

export const pageQuery = graphql`
  query GenericInteriorQuery($slug: String!) {
    allContentfulGenericInteriorPage(filter: { slug: { eq: $slug } }) {
      nodes {
        banner {
          ...SimpleHeroFragment
        }
        basicContent {
          ...BasicContentFragment
        }
        alternatingContentSection {
          ...ContentWithImageFragment
        }
        additionalPageContent {
          raw
          references {
            ... on ContentfulEntry {
              ... on ContentfulVideoEmbed {
                __typename
                contentful_id
                embedCode {
                  embedCode
                }
              }
              ... on ContentfulButton {
                contentful_id
                __typename
                ...Button
              }
              ... on ContentfulButtonGroup {
                contentful_id
                __typename
                ...ButtonGroupFragment
              }
            }
          }
        }
        slug
      }
    }
  }
`
