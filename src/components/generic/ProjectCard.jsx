import './ProjectCard.scss'
import React from 'react'
import CircleAvatar from '/src/components/generic/CircleAvatar.jsx'
import { Card, CardBody } from 'react-bootstrap'
import Tags from '/src/components/generic/Tags.jsx'
import CircularButtonList from '/src/components/generic/CircularButtonList.jsx'
import { useWindow } from '/src/providers/WindowProvider.jsx'
import { useFeedbacks } from '/src/providers/FeedbacksProvider.jsx'
import { useNavigate } from 'react-router-dom'

function ProjectCard({
  className,
  img,
  fallbackIcon,
  fallbackIconColors,
  title,
  subtitle,
  text,
  links,
  options,
  tags,
  href,
}) {
  const { displayYoutubeVideo, displayGallery } = useFeedbacks()
  const { isBreakpoint } = useWindow()

  const hasLinks = Boolean(links && links.length)

  const _onOptionClicked = (option) => {
    switch (option.id) {
      case 'youtube':
        displayYoutubeVideo(option.target, title, text)
        break

      case 'gallery':
        displayGallery(
          option.target.images || [],
          option.target.aspectRatio,
          title,
          text
        )
        break
    }
  }

  // const navigate = useNavigate()

  return (
    <Card className={`grid-item ${className}`}>
      <CardBody>
        <div className={`title-wrapper`}>
          <h5
            onClick={() => {
              window.open(links[0].href, '_blank')
            }}
            style={{ cursor: 'pointer' }}
            className={` title fw-bold mb-0 text-highlight`}
          >
            {title}
          </h5>
          <span
            className={`font-family-subheadings fw-bold text-muted text-1 ms-1`}
          >
            {subtitle}
          </span>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProjectCard
