import React from 'react'
import { graphql } from 'gatsby'
import Buttons from './Buttons'

const ButtonGroup = ({ buttonGroup }) => {
  const { buttons } = buttonGroup[0]
  return (
    <section className='button-group'>
      <Buttons buttons={buttons} variant={'cta-button'} />
    </section>
  )
}

export default ButtonGroup

export const query = graphql`
  fragment ButtonGroupFragment on ContentfulButtonGroup {
    id
    buttons {
      ...Button
    }
  }
`
