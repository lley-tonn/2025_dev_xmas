import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './Snowfall.css'

const Snowfall = ({ intensity = 'heavy' }) => {
  const snowflakes = useMemo(() => {
    const count = intensity === 'heavy' ? 50 : 20

    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 8 + 3
      const depth = Math.random() // 0-1, for parallax effect

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: size,
        duration: 5 + Math.random() * 10 + (depth * 5),
        delay: Math.random() * 5,
        opacity: intensity === 'heavy'
          ? 0.4 + (depth * 0.6)
          : 0.3 + (depth * 0.4),
        // Horizontal drift
        drift: (Math.random() - 0.5) * 100,
        // Depth affects blur and z-index
        blur: depth < 0.3 ? 2 : depth < 0.6 ? 1 : 0,
        zIndex: depth < 0.3 ? 1 : depth < 0.6 ? 2 : 3
      }
    })
  }, [intensity])

  return (
    <div className="snowfall-container">
      {snowflakes.map(flake => (
        <motion.div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: flake.blur > 0 ? `blur(${flake.blur}px)` : 'none',
            zIndex: flake.zIndex
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, flake.drift, 0, -flake.drift, 0],
            rotate: [0, 360]
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: flake.delay
            },
            x: {
              duration: flake.duration * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: flake.delay
            },
            rotate: {
              duration: flake.duration * 0.3,
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
