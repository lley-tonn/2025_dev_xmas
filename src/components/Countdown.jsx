import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Countdown.css'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isNewYear, setIsNewYear] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0)
      const difference = newYear - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
        setIsNewYear(false)
      } else {
        setIsNewYear(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="countdown-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {isNewYear ? (
          <motion.div
            key="new-year"
            className="new-year-message"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.h2
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎉 Happy New Year! 🎊
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Wishing you a year full of joy and success!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="countdown"
            className="countdown-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="countdown-title">New Year Countdown 🎉</h3>

            <div className="countdown-grid">
              <div className="countdown-unit">
                <motion.div
                  className="countdown-value"
                  key={timeLeft.days}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(timeLeft.days).padStart(2, '0')}
                </motion.div>
                <div className="countdown-label">Days</div>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-unit">
                <motion.div
                  className="countdown-value"
                  key={timeLeft.hours}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(timeLeft.hours).padStart(2, '0')}
                </motion.div>
                <div className="countdown-label">Hours</div>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-unit">
                <motion.div
                  className="countdown-value"
                  key={timeLeft.minutes}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(timeLeft.minutes).padStart(2, '0')}
                </motion.div>
                <div className="countdown-label">Minutes</div>
              </div>

              <div className="countdown-separator">:</div>

              <div className="countdown-unit">
                <motion.div
                  className="countdown-value"
                  key={timeLeft.seconds}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(timeLeft.seconds).padStart(2, '0')}
                </motion.div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Countdown
