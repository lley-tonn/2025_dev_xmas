import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 2 }}
    >
      <p className="footer-text">lley-tonn</p>
    </motion.footer>
  )
}

export default Footer
