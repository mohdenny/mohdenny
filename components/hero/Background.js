import { motion } from "framer-motion"

const HeroBackground = () => {
    return (
        <motion.div 
            id="bg-image" 
            className="bg-space-img bg-center bg-no-repeat bg-contain h-full w-full"
            animate={{
                x: [-20, 0],
                y: [0, -30],
            }}
            transition={{x: { yoyo: Infinity, duration: 5.25 },
                y: { yoyo: Infinity, duration: 4, ease: "easeOut" },
            }}
        />
    )
}

export default HeroBackground