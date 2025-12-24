import { motion } from 'framer-motion'
import './Santa.css'

const Santa = () => {
  return (
    <motion.div
      className="santa-container"
      initial={{ x: 200, opacity: 0, scale: 0.8 }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
        y: [0, -6, -3, -8, 0],
        rotate: [0, -1, 0, 1, 0]
      }}
      transition={{
        x: { duration: 2, delay: 1.8, type: "spring", stiffness: 60 },
        opacity: { duration: 1.5, delay: 1.8 },
        scale: { duration: 1.5, delay: 1.8, type: "spring", stiffness: 100 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.5 },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3.8 }
      }}
    >
      <div className="santa-body">
        {/* Hat */}
        <motion.div
          className="santa-hat"
          animate={{
            rotate: [-2, 3, -1, 2, -2],
            y: [0, -1, 0, -0.5, 0]
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="santa-hat-top"></div>
          <div className="santa-hat-pompom"></div>
        </motion.div>

        {/* Head */}
        <div className="santa-head">
          {/* Eyes */}
          <div className="santa-eyes">
            <motion.div
              className="santa-eye"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.div
              className="santa-eye"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>

          {/* Nose */}
          <div className="santa-nose"></div>

          {/* Beard */}
          <div className="santa-beard">
            <div className="beard-curl beard-curl-left"></div>
            <div className="beard-curl beard-curl-right"></div>
          </div>

          {/* Mustache */}
          <div className="santa-mustache">
            <div className="mustache-left"></div>
            <div className="mustache-right"></div>
          </div>

          {/* Smile */}
          <motion.div
            className="santa-mouth"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Body */}
        <div className="santa-torso">
          <div className="santa-buttons">
            <div className="santa-button"></div>
            <div className="santa-button"></div>
            <div className="santa-button"></div>
          </div>
          <div className="santa-belt">
            <div className="belt-buckle"></div>
          </div>
        </div>

        {/* Arms - Waving */}
        <motion.div
          className="santa-arm santa-arm-left"
          animate={{
            rotate: [0, 20, 35, 25, 15, 30, 10, 0],
            y: [0, -2, -5, -3, -4, -2, -1, 0]
          }}
          transition={{
            rotate: { duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 4 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        >
          <div className="santa-hand"></div>
        </motion.div>

        <div className="santa-arm santa-arm-right">
          <div className="santa-hand santa-hand-bag">
            {/* Gift bag */}
            <div className="gift-bag">🎁</div>
          </div>
        </div>

        {/* Legs */}
        <div className="santa-legs">
          <div className="santa-leg">
            <div className="santa-boot"></div>
          </div>
          <div className="santa-leg">
            <div className="santa-boot"></div>
          </div>
        </div>
      </div>

      {/* Ho Ho Ho text */}
      <motion.div
        className="ho-ho-ho"
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 1, 0],
          scale: [0, 0.8, 1, 1.1, 1, 0.8],
          y: [0, -5, -10, -12, -10, -5]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 6,
          ease: "easeOut"
        }}
      >
        Ho Ho Ho!
      </motion.div>
    </motion.div>
  )
}

export default Santa
