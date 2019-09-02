import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router'

// Code taken from https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    key,
    className,
    ...rest
  } = props
  return (
    <button
      className={props.className}
      {...rest}
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)