import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ChristmasTree from './components/ChristmasTree'
import Elves from './components/Elves'
import Santa from './components/Santa'
import Snowfall from './components/Snowfall'
import MusicPlayer from './components/MusicPlayer'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [snowIntensity, setSnowIntensity] = useState('heavy') // 'heavy' or 'minimal'
  const [showCountdown, setShowCountdown] = useState(false)

  // Auto-switch to countdown mode closer to New Year
  useEffect(() => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const newYear = new Date(currentYear + 1, 0, 1)
    const daysUntilNewYear = (newYear - now) / (1000 * 60 * 60 * 24)

    // Show countdown if within 7 days of New Year
    if (daysUntilNewYear <= 7 && daysUntilNewYear > 0) {
      setShowCountdown(true)
    }
  }, [])

  return (
    <div className="app">
      <Snowfall intensity={snowIntensity} />

      <div className="content">
        <motion.div
          className="greeting-container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="main-title"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            Merry Christmas to my friends and family 🎄✨
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Wishing you love, peace, and happiness this season.
          </motion.p>
        </motion.div>

        {showCountdown && <Countdown />}

        <div className="scene">
          <ChristmasTree />
          <Elves />
          <Santa />
        </div>

        <div className="controls">
          <MusicPlayer />

          <motion.div
            className="snow-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <button
              className={`snow-btn ${snowIntensity === 'heavy' ? 'active' : ''}`}
              onClick={() => setSnowIntensity('heavy')}
            >
              ❄️ Heavy Snow
            </button>
            <button
              className={`snow-btn ${snowIntensity === 'minimal' ? 'active' : ''}`}
              onClick={() => setSnowIntensity('minimal')}
            >
              ❄ Light Snow
            </button>
          </motion.div>

          <motion.div
            className="mode-control"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <button
              className="mode-btn"
              onClick={() => setShowCountdown(!showCountdown)}
            >
              {showCountdown ? '🎄 Christmas Mode' : '🎉 New Year Countdown'}
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
