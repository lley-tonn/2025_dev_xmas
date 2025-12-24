import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './Snowfall.css'

const Snowfall = ({ intensity = 'heavy' }) => {
  const snowflakes = useMemo(() => {
    const count = intensity === 'heavy' ? 80 : 30

    return Array.from({ length: count }, (_, i) => {
      const depth = Math.random()
      const size = depth < 0.3 ? 2 + Math.random() * 3 :
                   depth < 0.6 ? 4 + Math.random() * 4 :
                   6 + Math.random() * 6

      // More realistic fall speed based on size
      const fallDuration = 8 + (12 - size) * 1.5 + Math.random() * 5

      // Realistic horizontal movement (wind effect)
      const windStrength = 50 + Math.random() * 80
      const swayDuration = 3 + Math.random() * 4

      return {
        id: i,
        left: `${-10 + Math.random() * 120}%`,
        size: size,
        duration: fallDuration,
        delay: Math.random() * -20, // Negative delay for immediate animation
        opacity: intensity === 'heavy'
          ? 0.5 + (depth * 0.5)
          : 0.4 + (depth * 0.4),
        // Wind creates horizontal drift
        windDrift: (Math.random() - 0.3) * windStrength,
        swayDuration: swayDuration,
        // Depth affects blur and z-index for parallax
        blur: depth < 0.25 ? 1.5 : depth < 0.5 ? 0.8 : 0,
        zIndex: Math.floor(depth * 5),
        // Random rotation for realism
        rotation: Math.random() * 360,
        rotationSpeed: 2 + Math.random() * 6
      }
    })
  }, [intensity])

  return (
    <div className="snowfall-container">
      {snowflakes.map(flake => (
        <motion.div
          key={`snow-${flake.id}`}
          className="snowflake"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: flake.blur > 0 ? `blur(${flake.blur}px)` : 'none',
            zIndex: flake.zIndex
          }}
          initial={{
            y: '-10vh',
            x: 0,
            rotate: flake.rotation
          }}
          animate={{
            y: '110vh',
            x: [0, flake.windDrift * 0.3, flake.windDrift * 0.7, flake.windDrift, flake.windDrift * 0.8],
            rotate: [flake.rotation, flake.rotation + (flake.rotationSpeed * 360)]
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: flake.delay
            },
            x: {
              duration: flake.swayDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: flake.delay
            },
            rotate: {
              duration: flake.rotationSpeed,
              repeat: Infinity,
              ease: 'linear',
              delay: flake.delay
            }
          }}
        />
      ))}
    </div>
  )
}

export default Snowfall
