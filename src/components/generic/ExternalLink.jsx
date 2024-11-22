import React, { useEffect, useState } from 'react'
import { useLanguage } from '/src/providers/LanguageProvider.jsx'
import { useUtils } from '/src/helpers/utils.js'
import { useFeedbacks } from '/src/providers/FeedbacksProvider.jsx'
import { Link } from 'react-router-dom'

function ExternalLink({ href, className, children }) {
  const { showConfirmationDialog } = useFeedbacks()
  const { getString } = useLanguage()
  const utils = useUtils()

  return (
    // <Link to={href} className={className}>
    //   {children}
    // </Link>
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
