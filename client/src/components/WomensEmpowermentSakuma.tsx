import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';

/**
 * Women's Empowerment Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Bold, colorful sticker cards
 * - Playful rotation and scale
 * - High contrast typography
 */

const benefits = [
  {
    icon: Heart,
    title: '女性トレーナーが\n一寸一寸を大切に',
    description: '産後ダイエット成功者のあいかが直接指導。あなたの目標を全力でサポート。',
    color: 'bg-[#FF006E]',
    rotation: '-3deg',
  },
  {
    icon: Shield,
    title: '安心・安全が\n最優先',
    description: '女性が不安になる行為は即退会。徹底した環境管理で、心置きなく練習できます。',
    color: 'bg-[#00D9FF]',
    rotation: '2deg',
  },
  {
    icon: Users,
    title: '女性同士で\n励まし合える',
    description: '女性会員が圧倒的多数派。同じ目標を持つ仲間との出会いが、続ける力に。',
    color: 'bg-[#FFD700]',
    rotation: '-2deg',
  },
  {
    icon: Zap,
    title: '産後ダイエット・\nシェイプアップ',
    description: 'オーナーあいかの−25kg成功経験を活かした、効率的なプログラム。',
    color: 'bg-[#FF9A9E]',
    rotation: '3deg',
  },
];

export default function WomensEmpowermentSakuma() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#FF006E]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            女性が一番輝ける場所
          </h2>
          <p className="sakuma-body text-[#666666] max-w-3xl mx-auto">
            FLATUPGYM は、女性のための格闘技ジムです。<br />
            <span className="font-black text-[#FF006E]">安心・楽しさ・強さ</span>を同時に手に入れられます。
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
                className={`${benefit.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${benefit.rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-xl`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-none flex items-center justify-center mb-6 border-4 border-white">
                  <Icon className="w-8 h-8 text-white font-black" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-4 whitespace-pre-line leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-bold text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A] p-12 rounded-none border-8 border-[#FF006E] transform -rotate-1 text-center"
        >
          <h3 className="sakuma-title text-white mb-4">
            女性の「なりたい自分」を応援します
          </h3>
          <p className="sakuma-body text-white/80 max-w-2xl mx-auto mb-8">
            初心者・未経験者大歓迎。あなたのペースで、あなたらしく。<br />
            <span className="font-black text-[#FF9A9E]">女性トレーナーが全力でサポートします。</span>
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
