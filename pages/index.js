import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { squareVariants } from '../helpers/variants'
import Hero from '../components/hero/Hero'
import Header from '../components/header/Header'
import FeatureBox from '../components/featurebox/FeatureBox'

const API_KEY = 'iN5hRjDiWaidJ1VZGdUcncfMcDOLKrDvDiDw1riO'
const COUNT = 1

export const getStaticProps = async () => {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${COUNT}`)
  const data = await res.json()

  return {
      props: { datas: data }
  }
}

const Home = ({ datas }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className='flex flex-col space-y-20'>
      <Hero/>
      <main className="lg:px-120px sm:px-6 px-1 mx-auto h-full w-full">
        <div className="flex justify-center">
          <Header text={'Astronomy Picture of the Day'} />
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <div className="py-4 px-2 h-full w-full">
            {
              datas.map((data, index) => {
                return (
                  <FeatureBox key={index} data={data}/>
                )
              })
            }
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home