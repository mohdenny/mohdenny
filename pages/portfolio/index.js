import React from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { squareVariants } from '../../helpers/variants'

export const data = [
  { thumb: 'devgram-thumb.png', title: 'Devgram', desc: 'Devgram is a social media for developers, they can create developer profiles/portfolios, share posts and get help from other developers. Built with: NodeJS (ExpressJS), ReactJS (React Router, Redux, Axios), Vanilla CSS, JWT, MongoDB.', url: 'http://54.174.103.156/' },
  { thumb: 'marketin-thumb.png', title: 'Marketin', desc: 'Marketin is a web landing page for CRM software products. Built with: ReactJS, Tailwindcss.', url: 'https://competent-fermi-55a3bc.netlify.app/' },
  { thumb: 'Bisnis.com-Spirit-Indonesia-thumb.png', title: 'Bisnis.com', desc: 'This is part of the 75th edition of Bisnis.com Indonesian Independence landing page with the theme "\Spirit Membangun Indonesia Maju!"\ in 2020. Built with: ReactJS, Tailwindcss.', url: 'https://blissful-perlman-ba1151.netlify.app/' },
  { thumb: 'aligbola-thumb.png', title: 'Aligbola', desc: 'Alig Bola is a web application that uses the API from football-data.org. Football fans can follow the football clubs they like with favourites, view player list, club details, fixtures and league standings. Built with: Vanilla JS, Materialize, Webpack, IndexedDB, PWA (Workbox-SW).', url: 'https://alig-bola.web.app/' },
  { thumb: 'gitrepos-thumb.png', title: 'Gitrepos', desc: 'Gitrepos is a web that uses the API from github, so it can search someones github repository. Built with: ReactJS (React Router, Redux, Axios), Tailwindcss.', url: 'https://infallible-poincare-6ad975.netlify.app/' },
  { thumb: 'denpic-thumb.png', title: 'Denpic', desc: 'Denpic is a web that uses the stock photography provider API from Unsplash, so it can search for beautiful free stock photos. Built with: ReactJS (Axios), Vanilla CSS.', url: 'https://relaxed-hodgkin-3cfeb1.netlify.app/' },
  { thumb: 'laparcom-thumb.png', title: 'Laparcom', desc: 'Laparcom is a web application that uses the restaurant data API from Dicoding, so people can find the best restaurants to eat based on ratings and menus. And people can also favorite and review restaurants. Built with: Vanilla JS, Vanilla CSS, Webpack, IndexedDB, PWA (ServiceWorker).', url: 'https://adoring-keller-e29a10.netlify.app/' },
  { thumb: 'porto-semantic-thumb.png', title: 'Semantic Web Portfolio', desc: 'Semantic Web Portfolio is a website for developers to show portfolio listings, education, and work experience lists. Built with: ReactJS, SemanticUI.', url: 'https://eloquent-murdock-69203b.netlify.app/' },
]

const Portfolio = () => {
  return (
    <>
      <main className="mx-auto h-full lg:px-120px sm:px-6 pt-0 px-1 w-full">
        <div className="flex justify-center">
            <Header text={'Portfolio'} />
        </div>

        <motion.div 
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-rows-auto gap-4 py-4 px-2"
          variants={squareVariants}
          initial="hidden"
          animate="visible"
        >
          { 
            data.map((item, index) => {
              return (
                <Card key={index} data={item} />
              )
            })  
          }
        </motion.div>
      </main>
    </>
  )
}

export default Portfolio