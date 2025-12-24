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

      <motion.div
        className="greeting-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        <motion.h1
          className="main-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 150
          }}
        >
          Merry Christmas to my friends and family 🎄✨
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Wishing you love, peace, and happiness this season.
        </motion.p>

        {showCountdown && <Countdown />}
      </motion.div>

      <div className="scene">
        <ChristmasTree />
        <Elves />
        <Santa />
      </div>

      <div className="controls">
        <MusicPlayer />

        <motion.div
          className="control-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <button
            className={`control-btn ${snowIntensity === 'heavy' ? 'active' : ''}`}
            onClick={() => setSnowIntensity('heavy')}
          >
            ❄️
          </button>
          <button
            className={`control-btn ${snowIntensity === 'minimal' ? 'active' : ''}`}
            onClick={() => setSnowIntensity('minimal')}
          >
            ❄
          </button>
          <button
            className="control-btn"
            onClick={() => setShowCountdown(!showCountdown)}
          >
            {showCountdown ? '🎄' : '🎉'}
          </button>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default App
