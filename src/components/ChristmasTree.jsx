import { motion } from 'framer-motion'
import './ChristmasTree.css'

const ChristmasTree = () => {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 85 + 5}%`,
    delay: Math.random() * 2,
    color: ['#ff0000', '#ffd700', '#00ff00', '#0066ff', '#ff00ff'][Math.floor(Math.random() * 5)]
  }))

  return (
    <motion.div
      className="christmas-tree"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Tree layers */}
      <div className="tree-layer tree-layer-1"></div>
      <div className="tree-layer tree-layer-2"></div>
      <div className="tree-layer tree-layer-3"></div>
      <div className="tree-layer tree-layer-4"></div>

      {/* Tree trunk */}
      <div className="tree-trunk"></div>

      {/* Star on top */}
      <motion.div
        className="tree-star"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⭐
      </motion.div>

      {/* Animated lights */}
      {lights.map(light => (
        <motion.div
          key={light.id}
          className="tree-light"
          style={{
            left: light.left,
            top: light.top,
            backgroundColor: light.color
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Ornaments */}
      <div className="ornament ornament-1" style={{ backgroundColor: '#ff0000' }}></div>
      <div className="ornament ornament-2" style={{ backgroundColor: '#ffd700' }}></div>
      <div className="ornament ornament-3" style={{ backgroundColor: '#0066ff' }}></div>
      <div className="ornament ornament-4" style={{ backgroundColor: '#ff00ff' }}></div>
      <div className="ornament ornament-5" style={{ backgroundColor: '#00ff00' }}></div>
    </motion.div>
  )
}

export default ChristmasTree
