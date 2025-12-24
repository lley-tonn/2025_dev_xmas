import { motion } from 'framer-motion'
import './Elves.css'

const Elves = () => {
  return (
    <div className="elves-container">
      {/* Left Elf - Waving */}
      <motion.div
        className="elf elf-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="elf-body">
          {/* Hat */}
          <motion.div
            className="elf-hat"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hat-top"></div>
            <div className="hat-pompom"></div>
          </motion.div>

          {/* Head */}
          <div className="elf-head">
            <div className="elf-eyes">
              <div className="elf-eye"></div>
              <div className="elf-eye"></div>
            </div>
            <div className="elf-nose"></div>
            <div className="elf-smile"></div>
            <div className="elf-ears">
              <div className="elf-ear elf-ear-left"></div>
              <div className="elf-ear elf-ear-right"></div>
            </div>
          </div>

          {/* Body */}
          <div className="elf-torso">
            <div className="elf-belt"></div>
          </div>

          {/* Arms - Waving */}
          <motion.div
            className="elf-arm elf-arm-left"
            animate={{ rotate: [0, -30, 0, -30, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="elf-arm elf-arm-right" />

          {/* Legs */}
          <div className="elf-legs">
            <div className="elf-leg"></div>
            <div className="elf-leg"></div>
          </div>
        </div>
      </motion.div>

      {/* Right Elf - Bouncing */}
      <motion.div
        className="elf elf-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -10, 0]
        }}
        transition={{
          x: { duration: 1, delay: 1.7 },
          opacity: { duration: 1, delay: 1.7 },
          y: { duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 2.7 }
        }}
      >
        <div className="elf-body">
          {/* Hat */}
          <div className="elf-hat elf-hat-green">
            <div className="hat-top"></div>
            <div className="hat-pompom"></div>
          </div>

          {/* Head */}
          <div className="elf-head">
            <div className="elf-eyes">
              <motion.div
                className="elf-eye"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.div
                className="elf-eye"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>
            <div className="elf-nose"></div>
            <div className="elf-smile"></div>
            <div className="elf-ears">
              <div className="elf-ear elf-ear-left"></div>
              <div className="elf-ear elf-ear-right"></div>
            </div>
          </div>

          {/* Body */}
          <div className="elf-torso elf-torso-green">
            <div className="elf-belt"></div>
          </div>

          {/* Arms */}
          <div className="elf-arm elf-arm-left" />
          <div className="elf-arm elf-arm-right" />

          {/* Legs */}
          <div className="elf-legs">
            <div className="elf-leg"></div>
            <div className="elf-leg"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Elves
