import AboutHero from '@/components/about/AboutHero'
import Apart from '@/components/about/Apart'
import Mission from '@/components/about/Mission'
import Vision from '@/components/about/Vision'
import React from 'react'

function About() {
  return (
    <div>
      <AboutHero/>
      <Mission/>
      <Vision/>
      <Apart/>
    </div>
  )
}

export default About