import { motion } from 'framer-motion'
import './Santa.css'

const Santa = () => {
  return (
    <motion.div
      className="santa-container"
      initial={{ x: 200, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        y: [0, -8, 0]
      }}
      transition={{
        x: { duration: 1.5, delay: 2 },
        opacity: { duration: 1.5, delay: 2 },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
      }}
    >
      <div className="santa-body">
        {/* Hat */}
        <motion.div
          className="santa-hat"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
          animate={{ rotate: [0, 25, 0, 25, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 4 }}
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
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1.2, 1.2, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4,
          delay: 5
        }}
      >
        Ho Ho Ho!
      </motion.div>
    </motion.div>
  )
}

export default Santa
