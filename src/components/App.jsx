import '/src/styles/app.scss'
import React, { useEffect, useState } from 'react'
import { useData } from '/src/providers/DataProvider.jsx'
import Portfolio from '/src/components/Portfolio.jsx'
import { AnimatedCursor } from '/src/components/feedbacks/AnimatedCursor'
import ActivitySpinner from '/src/components/feedbacks/ActivitySpinner.jsx'
import ImageCache from '/src/components/generic/ImageCache.jsx'
import YoutubeModal from '/src/components/modals/YoutubeModal.jsx'
import GalleryModal from '/src/components/modals/GalleryModal.jsx'
import Notifications from '/src/components/feedbacks/Notifications.jsx'
import ConfirmationWindow from '/src/components/modals/ConfirmationWindow.jsx'
import { useFeedbacks } from '/src/providers/FeedbacksProvider.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom'
import TimeSeriesImputation from './blogs/TimeSeriesImputation'
import OptimizeCLV from './blogs/OptimizeCLV'
import FuzzyClustering from './blogs/FuzzyClustering'

function App() {
  const { listImagesForCache } = useData()

  const imageList = listImagesForCache()

  return (
    // <HashRouter>
    /* <Routes>
        <Route
          path="/"
          element={ */
    <div className={`app-wrapper`}>
      <AppFeedbacks />
      <ImageCache urls={imageList} />
      <Portfolio />
    </div>
    /* }
        />
        <Route
          path="/blog/time-series-imputation"
          element={<TimeSeriesImputation />}
        />
        <Route path="/blog/optimize-clv" element={<OptimizeCLV />} />
        <Route path="/blog/fuzzy-clustering" element={<FuzzyClustering />} />
      </Routes> */
    // </HashRouter>
  )
}

function AppFeedbacks() {
  const {
    listSpinnerActivities,
    isAnimatedCursorEnabled,
    isAnimatedCursorActive,
    isModalOpen,
    displayingNotification,
    killNotification,
    displayingYoutubeVideo,
    hideYoutubeVideo,
    displayingGallery,
    hideGallery,
    pendingConfirmation,
    hideConfirmationDialog,
  } = useFeedbacks()

  const spinnerActivities = listSpinnerActivities()
  const animatedCursorEnabled = isAnimatedCursorEnabled()
  const animatedCursorActive = isAnimatedCursorActive()
  const modalOpen = isModalOpen()

  return (
    <>
      {spinnerActivities && <ActivitySpinner activities={spinnerActivities} />}

      {isAnimatedCursorEnabled() && (
        <AnimatedCursor
          enabled={animatedCursorEnabled}
          active={animatedCursorActive}
          modalOpen={modalOpen}
        />
      )}

      {displayingNotification && (
        <Notifications
          displayingNotification={displayingNotification}
          killNotification={killNotification}
        />
      )}

      <YoutubeModal
        displayingYoutubeVideo={displayingYoutubeVideo}
        hideYoutubeVideo={hideYoutubeVideo}
      />

      <GalleryModal
        displayingGallery={displayingGallery}
        hideGallery={hideGallery}
      />

      <ConfirmationWindow
        pendingConfirmation={pendingConfirmation}
        hideConfirmationDialog={hideConfirmationDialog}
      />
    </>
  )
}

export default App
