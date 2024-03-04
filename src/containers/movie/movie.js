import React from 'react'
import { FeaturedMovie } from '@/components/featured-movie/featured'

export default function MovieCantainer({movie}) {
  return (
    <div>
      <FeaturedMovie movie={movie} isCompact={false}/>
    </div>
  )
}
