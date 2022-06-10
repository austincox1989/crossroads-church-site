import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Buttons from './Buttons'

const RichTextRenderer = ({ richText, className }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    },
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return <Link to={uri}>{children}</Link>
      },
      [BLOCKS.HEADING_1]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0].value === '') {
          return <br />
        } else {
          return <p>{children}</p>
        }
      },
      [BLOCKS.QUOTE]: (children) => (
        <blockquote>
          <>"{children.content[0].content[0].value}"</>
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target

        return (
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        )
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const { __typename } = node.data.target

        switch (__typename) {
          case 'ContentfulButton':
            const buttons = [node.data.target]
            return <Buttons buttons={buttons} variant={'cta-button'} />
          default:
            return null
        }
      },
    },
  }

  const content = renderRichText(richText, options)

  return <article className={`page-content ${className}`}>{content}</article>
}

export default RichTextRenderer