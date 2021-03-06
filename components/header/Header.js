import { AnimatePresence ,motion } from 'framer-motion'

const Header = ({ text }) => {
    return (
        <AnimatePresence>
            <motion.div 
                className="flex items-center justify-center" 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y:[ 0, -5, 5, -5, 5, 0 ] }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
            >
                <p className="text-white font-poppins-semibold text-center text-feature">{text}</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default Header