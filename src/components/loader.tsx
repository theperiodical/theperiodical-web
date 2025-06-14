import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md"
    >
      <div className="relative">
        {/* Animated logo container */}
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary/40 border-b-primary/10 border-l-primary/70"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-primary"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Loading text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-xl font-semibold text-foreground"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading
        </motion.h2>
        <p className="text-sm text-muted-foreground mt-2">Please wait while we prepare your experience</p>
      </motion.div>
    </motion.div>
  );
};