import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './MusicPlayer.css'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  // Sound effects
  const bellSoundRef = useRef(null)
  const chimeSoundRef = useRef(null)

  useEffect(() => {
    // Create audio elements
    audioRef.current = new Audio('/christmas-music.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Create sound effects
    bellSoundRef.current = new Audio('/bell-sound.mp3')
    bellSoundRef.current.volume = 0.4

    chimeSoundRef.current = new Audio('/chime-sound.mp3')
    chimeSoundRef.current.volume = 0.4

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const playBell = () => {
    if (bellSoundRef.current) {
      bellSoundRef.current.currentTime = 0
      bellSoundRef.current.play().catch(error => {
        console.log('Sound effect prevented:', error)
      })
    }
  }

  const playChime = () => {
    if (chimeSoundRef.current) {
      chimeSoundRef.current.currentTime = 0
      chimeSoundRef.current.play().catch(error => {
        console.log('Sound effect prevented:', error)
      })
    }
  }

  return (
    <motion.div
      className="music-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <div className="player-controls">
        <motion.button
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        <span className="player-label">
          {isPlaying ? '🎵 Playing' : '🎵 Music'}
        </span>
      </div>

      <div className="sound-effects">
        <motion.button
          className="sound-btn"
          onClick={playBell}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Ring the bell"
        >
          🔔
        </motion.button>

        <motion.button
          className="sound-btn"
          onClick={playChime}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Play chime"
        >
          🎐
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MusicPlayer
