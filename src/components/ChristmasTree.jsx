import { motion } from 'framer-motion'
import './ChristmasTree.css'

const ChristmasTree = () => {
  const lights = Array.from({ length: 25 }, (_, i) => {
    const colors = ['#ff0000', '#ffd700', '#00ff00', '#0066ff', '#ff6b9d', '#ff8c00']
    return {
      id: i,
      left: `${15 + Math.random() * 70}%`,
      top: `${10 + Math.random() * 75}%`,
      delay: Math.random() * 3,
      duration: 1 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  })

  const ornaments = Array.from({ length: 8 }, (_, i) => {
    const colors = ['#ff0000', '#ffd700', '#0066ff', '#ff00ff', '#00ff00', '#ff69b4']
    return {
      id: i,
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 65}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 15 + Math.random() * 10,
      delay: Math.random() * 2
    }
  })

  return (
    <motion.div
      className="christmas-tree"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        rotate: [0, -0.5, 0.5, 0]
      }}
      transition={{
        scale: { duration: 1.5, delay: 0.3, type: "spring", stiffness: 80, damping: 12 },
        opacity: { duration: 1.5, delay: 0.3 },
        y: { duration: 1.5, delay: 0.3, type: "spring", stiffness: 80 },
        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
      }}
    >
      {/* Tree layers with gentle sway */}
      <motion.div
        className="tree-layer tree-layer-1"
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="tree-layer tree-layer-2"
        animate={{ rotate: [-0.8, 0.8, -0.8] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />
      <motion.div
        className="tree-layer tree-layer-3"
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="tree-layer tree-layer-4"
        animate={{ rotate: [-0.4, 0.4, -0.4] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Tree trunk */}
      <div className="tree-trunk"></div>

      {/* Star on top with realistic twinkle */}
      <motion.div
        className="tree-star"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.15, 0.95, 1],
          filter: [
            'brightness(1) drop-shadow(0 0 10px #ffd700)',
            'brightness(1.3) drop-shadow(0 0 20px #ffd700)',
            'brightness(1) drop-shadow(0 0 10px #ffd700)'
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      {/* Animated lights with realistic twinkling */}
      {lights.map(light => (
        <motion.div
          key={`light-${light.id}`}
          className="tree-light"
          style={{
            left: light.left,
            top: light.top,
            backgroundColor: light.color
          }}
          animate={{
            opacity: [0.4, 1, 0.6, 1, 0.4],
            scale: [0.9, 1.1, 0.95, 1.05, 0.9],
            boxShadow: [
              `0 0 5px ${light.color}`,
              `0 0 15px ${light.color}`,
              `0 0 8px ${light.color}`,
              `0 0 12px ${light.color}`,
              `0 0 5px ${light.color}`
            ]
          }}
          transition={{
            duration: light.duration,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Ornaments with subtle swing */}
      {ornaments.map(ornament => (
        <motion.div
          key={`ornament-${ornament.id}`}
          className="ornament"
          style={{
            left: ornament.left,
            top: ornament.top,
            backgroundColor: ornament.color,
            width: ornament.size,
            height: ornament.size
          }}
          animate={{
            rotate: [-2, 2, -2],
            y: [0, -2, 0]
          }}
          transition={{
            rotate: { duration: 2 + ornament.delay, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 1.5 + ornament.delay, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}
    </motion.div>
  )
}

export default ChristmasTree
