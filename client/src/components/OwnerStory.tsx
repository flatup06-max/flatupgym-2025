import { motion } from 'framer-motion';

/**
 * Owner Story Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Personal connection through storytelling
 * - Before/after transformation narrative
 * - Warm, inspiring imagery
 * - Emotional resonance with target audience
 */

export default function OwnerStory() {

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
    <section
      className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5E6F0] relative overflow-hidden"
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/owner-story-bg.jpg"
                alt="オーナーあいか - 産後−25kg成功"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] rounded-full opacity-20 blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">「人生を変えたい」</span>
                <br />
                <span className="text-[#1A1F3A]">その想いに寄り添いたい。</span>
              </h2>
            </div>

            <p className="text-lg text-[#666666] leading-relaxed">
              オーナーの「あいか」です。私自身、かつては体型に悩み、自分に自信が持てない時期がありました。
            </p>

            <div className="bg-gradient-to-r from-[#FF006E]/10 to-[#00D9FF]/10 border-l-4 border-[#FF006E] p-6 rounded-lg">
              <p className="text-xl font-semibold text-[#FF006E] mb-2">
                産後からキックボクシングを始め、
              </p>
              <p className="text-3xl font-bold text-[#1A1F3A]">
                25kgのダイエットに成功。
              </p>
            </div>

            <p className="text-lg text-[#666666] leading-relaxed">
              その経験が私の人生を劇的に変えてくれました。自身のダイエット経験から資格を取得し、現在は産後のダイエットクラスも直接指導しています。
            </p>

            <p className="text-lg text-[#1A1F3A] font-semibold leading-relaxed">
              子どもには自信を、女性には強さと美しさを、初心者には安心と成長を、男性には礼儀と覚悟を。
              <br />
              <span className="text-[#FF006E]">誰にとっても「ここなら変われる」という場所。</span>
            </p>

            <div className="pt-4">
              <a href="https://liff.line.me/2008276179-XxwM2QQD" target="_blank" rel="noopener noreferrer">
                <button className="btn-cta">
                  あいかに相談してみる →
                </button>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[#E5E5E5]"
        >
          {[
            { label: '産後ダイエット成功', value: '-25kg' },
            { label: 'LINE友だち', value: '1,221人' },
            { label: 'Google口コミ', value: '高評価30件' },
            { label: '営業時間', value: '24時間営業' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-[#666666]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
