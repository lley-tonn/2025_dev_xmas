import { motion } from 'framer-motion'
import './Elves.css'

const Elves = () => {
  return (
    <div className="elves-container">
      {/* Left Elf - Waving */}
      <motion.div
        className="elf elf-left"
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          y: [0, -3, 0, -2, 0]
        }}
        transition={{
          x: { duration: 1.5, delay: 1.2, type: "spring", stiffness: 80 },
          opacity: { duration: 1.2, delay: 1.2 },
          scale: { duration: 1.5, delay: 1.2, type: "spring", stiffness: 100 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
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
            animate={{
              rotate: [0, -25, -35, -20, -30, 0],
              y: [0, -2, -4, -3, -2, 0]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3.5 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3.5 }
            }}
          />
          <motion.div
            className="elf-arm elf-arm-right"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

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
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: [1, 1.02, 1],
          y: [0, -12, -6, -10, 0],
          rotate: [0, -1, 0, 1, 0]
        }}
        transition={{
          x: { duration: 1.5, delay: 1.4, type: "spring", stiffness: 80 },
          opacity: { duration: 1.2, delay: 1.4 },
          scale: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 3.2 },
          y: { duration: 1, repeat: Infinity, ease: "easeOut", delay: 3.2 },
          rotate: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 3.2 }
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
          <motion.div
            className="elf-arm elf-arm-left"
            animate={{
              rotate: [0, -5, 5, 0],
              y: [0, -1, 1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.2
            }}
          />
          <motion.div
            className="elf-arm elf-arm-right"
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, 1, -1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.2
            }}
          />

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
