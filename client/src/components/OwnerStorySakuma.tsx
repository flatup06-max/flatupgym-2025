import { motion } from 'framer-motion';

/**
 * Owner Story Component - Sakuma Design (Pop-Tech Brutalism)
 * 
 * Design Philosophy:
 * - Extreme typography (超大型テキスト)
 * - High contrast (厚いコントラスト)
 * - Sticker-like UI elements (ステッカー風UI)
 */

export default function OwnerStorySakuma() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Bold Background Shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#FF006E] opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D9FF] opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Left: Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border-8 border-[#FF006E] transform -rotate-3">
              <img
                src="https://ik.imagekit.io/FLATUPGYM/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-01-28%2014.03.22.png?"
                alt="オーナーあいか - 産後−25kg成功"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FFD700] rounded-full opacity-30 blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* Right: Image - Additional */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-3"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border-8 border-[#00D9FF] transform rotate-3">
              <img
                src="https://ik.imagekit.io/FLATUPGYM/sango1.jpeg?updatedAt=1756897186137"
                alt="オーナーあいか - ビフォーアフター"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-[#FF006E] rounded-full opacity-30 blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="sakuma-title text-[#FF006E]">
                オーナー
              </h2>
              <h2 className="sakuma-title text-[#1A1F3A]">
                あいか
              </h2>
            </div>

            {/* Story */}
            <p className="sakuma-body text-[#1A1F3A]">
              産後からキックボクシングを始め、<br />
              <span className="font-black text-3xl text-[#FF006E]">−25kg</span>
              のダイエットに成功。
            </p>

            {/* Sticker UI */}
            <div className="sticker-ui">
              <p className="text-white font-black text-lg">
                その経験が、人生を劇的に変えてくれました。
              </p>
            </div>

            {/* Description */}
            <p className="sakuma-body text-[#1A1F3A] leading-relaxed">
              自身のダイエット経験から資格を取得し、現在は産後のダイエットクラスも直接指導しています。
            </p>

            {/* Philosophy */}
            <div className="space-y-3 pt-4">
              <p className="sakuma-subtitle text-[#1A1F3A]">
                <span className="text-[#FF006E]">子どもには自信を、</span>
              </p>
              <p className="sakuma-subtitle text-[#1A1F3A]">
                <span className="text-[#00D9FF]">女性には強さと美しさを、</span>
              </p>
              <p className="sakuma-subtitle text-[#1A1F3A]">
                <span className="text-[#FFD700]">初心者には安心と成長を。</span>
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t-4 border-[#FF006E]"
        >
          {[
            { label: '産後ダイエット成功', value: '-25kg', color: 'bg-[#FF006E]' },
            { label: 'LINE友だち', value: '1,221人', color: 'bg-[#00D9FF]' },
            { label: 'Google口コミ', value: '高評価30件', color: 'bg-[#FFD700]' },
            { label: '営業時間', value: '24時間', color: 'bg-[#FF9A9E]' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`${stat.color} p-6 rounded-none border-4 border-[#1A1F3A] transform rotate-1`}
            >
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
