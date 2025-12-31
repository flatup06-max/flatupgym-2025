import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * Hero Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Overwhelming visual impact with gradient background
 * - Large, bold typography that conveys strength and accessibility
 * - Smooth animations that guide user attention
 * - Clear CTA buttons for LINE consultation and trial
 */

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(255, 0, 110, 0.3)',
        '0 0 40px rgba(255, 0, 110, 0.5)',
        '0 0 20px rgba(255, 0, 110, 0.3)',
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://ik.imagekit.io/FLATUPGYM/batch_IMG_9600.JPG?updatedAt=1756928169552)',
          filter: 'brightness(0.5) contrast(1.1)',
        }}
      />
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#00D9FF] to-[#00B8E6] rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Main Content */}
      <motion.div
        className="container relative z-10 flex flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="px-6 py-3 bg-[#FF006E] border-4 border-white rounded-none transform -rotate-2 shadow-xl">
            <p className="text-sm font-black text-white tracking-wider">
              🌟 女性オーナーの安心できる格闘技ジム
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6 max-w-5xl text-white drop-shadow-2xl tracking-tight"
          style={{ fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 900 }}
        >
          <span className="gradient-text block">
            世界で一番
          </span>
          <br />
          <span className="text-white block">
            優しい格闘技ジム
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-white/95 max-w-4xl mb-8 leading-relaxed drop-shadow-lg font-bold"
        >
          女性オーナーだからこそできる、
          <br />
          <span className="text-[#FF9A9E] block">女性が安心して通えるジム。</span>
        </motion.p>

        {/* Glowing Accent Line */}
        <motion.div
          className="w-32 h-1 glow-accent-line mx-auto mb-12"
          animate="animate"
          variants={glowVariants}
        />

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full"
        >
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
          <a href="tel:07090353485">
            <Button
              variant="outline"
              className="px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              📞 電話で予約
            </Button>
          </a>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          variants={itemVariants}
          className="text-sm text-white/80 drop-shadow-md"
        >
          <p className="mb-2 font-semibold">✨ 30秒で予約完了！見学だけでも大歓迎</p>
          <p className="text-xs">LINE友だち 1,221人突破 | Google口コミ 高評価30件</p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#FF006E] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#FF006E] rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
