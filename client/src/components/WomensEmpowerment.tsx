import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';

/**
 * Women's Empowerment Component
 * 
 * Design Philosophy:
 * - Celebrate women's strength and journey
 * - Build emotional connection
 * - Emphasize safety and community
 */

const benefits = [
  {
    icon: Heart,
    title: '女性トレーナーが一寸一寸を大切に',
    description: '産後ダイエット成功者のあいかが直接指導。あなたの目標を全力でサポート。',
    color: 'from-[#FF006E] to-[#FF9A9E]',
  },
  {
    icon: Shield,
    title: '安心・安全が最優先',
    description: '女性が不安になる行為は即退会。徹底した環境管理で、心置きなく練習できます。',
    color: 'from-[#FF9A9E] to-[#FF006E]',
  },
  {
    icon: Users,
    title: '女性同士で励まし合える',
    description: '女性会員が圧倒的多数派。同じ目標を持つ仲間との出会いが、続ける力に。',
    color: 'from-[#00D9FF] to-[#00B8E6]',
  },
  {
    icon: Zap,
    title: '産後ダイエット・シェイプアップ',
    description: 'オーナーあいかの−25kg成功経験を活かした、効率的なプログラム。',
    color: 'from-[#00B8E6] to-[#00D9FF]',
  },
];

export default function WomensEmpowerment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#F5E6F0] to-[#FAFAF8] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#FF006E]/10 to-[#FF9A9E]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">女性が一番輝ける場所</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            FLATUPGYM は、女性のための格闘技ジムです。<br />
            安心・楽しさ・強さを同時に手に入れられます。
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="floating-card group"
              >
                {/* Icon Background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1A1F3A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-4 group-hover:w-full transition-all duration-300 w-8`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF006E]/10 to-[#00D9FF]/10 border-2 border-[#FF006E]/20 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-[#1A1F3A] mb-4">
            女性の「なりたい自分」を応援します
          </h3>
          <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
            初心者・未経験者大歓迎。あなたのペースで、あならしく。<br />
            女性トレーナーが全力でサポートします。
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
