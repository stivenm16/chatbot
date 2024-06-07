import React, { useEffect, useRef, useState } from 'react'
import { Product } from '../models'

export const useCarousel = ({ products }: { products: Product[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [transition, setTransition] = useState('')
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const MIN_DRAG_DISTANCE = 20 // Minimum distance to be considered a valid drag

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setStartX(e.clientX)
    setTransition('none')
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return
    const dx = e.clientX - startX
    setTranslateX(dx)
  }

  const handleMouseUp = () => {
    if (!dragging) return
    setDragging(false)
    setTransition('transform 0.5s ease')
    if (translateX > MIN_DRAG_DISTANCE && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (
      translateX < -MIN_DRAG_DISTANCE &&
      currentIndex < products.length - 1
    ) {
      setCurrentIndex(currentIndex + 1)
    }
    setTranslateX(0) // Reset translateX after dragging
  }

  useEffect(() => {
    const handleMouseUpGlobal = (e: MouseEvent) => {
      if (dragging) {
        handleMouseUp()
      }
    }

    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUpGlobal)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUpGlobal)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUpGlobal)
    }
  }, [dragging])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 7000) // Change slide every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [products.length])
  return {
    carouselRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    currentIndex,
    translateX,
    transition,
  }
}
