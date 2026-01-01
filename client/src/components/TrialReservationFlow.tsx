import { motion } from 'framer-motion';
import { Check, MessageCircle, Calendar, Zap } from 'lucide-react';

/**
 * Trial Reservation Flow Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Clear step-by-step flow
 * - Easy to understand process
 * - Strong CTA
 */

const steps = [
  {
    number: 1,
    title: 'LINE友だち追加',
    description: 'まずは公式LINEを友だち追加してください',
    icon: MessageCircle,
    color: 'bg-[#00D9FF]',
  },
  {
    number: 2,
    title: '体験クラスを選択',
    description: '希望の日時とクラスを選んでください',
    icon: Calendar,
    color: 'bg-[#FFD700]',
  },
  {
    number: 3,
    title: '確認メール受取',
    description: '予約確認メールが届きます',
    icon: Check,
    color: 'bg-[#FF9A9E]',
  },
  {
    number: 4,
    title: 'ジムに来館',
    description: '当日、手ぶらでご来館ください',
    icon: Zap,
    color: 'bg-[#FF006E]',
  },
];

export default function TrialReservationFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40, rotate: 0 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-white relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            体験予約の流れ
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
            簡単4ステップで、あなたの新しい挑戦がスタートします。
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={stepVariants}
                className={`${step.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-xl relative`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white border-6 border-[#1A1F3A] rounded-full flex items-center justify-center">
                  <p className="text-[#1A1F3A] font-black text-3xl">{step.number}</p>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <Icon className="w-12 h-12 text-white font-black" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 font-bold text-sm text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 text-[#1A1F3A] text-3xl font-black"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A] p-12 rounded-none border-8 border-[#FF006E] transform -rotate-1 text-center mb-12"
        >
          <h3 className="sakuma-title text-white mb-6">
            体験クラスは完全無料！
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-white/60 font-bold text-sm mb-2">入会金</p>
              <p className="text-[#FF9A9E] font-black text-2xl">半額</p>
            </div>
            <div>
              <p className="text-white/60 font-bold text-sm mb-2">レンタル</p>
              <p className="text-[#FF9A9E] font-black text-2xl">無料</p>
            </div>
            <div>
              <p className="text-white/60 font-bold text-sm mb-2">体験クラス</p>
              <p className="text-[#FF9A9E] font-black text-2xl">無料</p>
            </div>
          </div>
          <p className="text-white/80 font-bold mb-8">
            手ぶらでご来館いただけます。<br />
            運動着やシューズはすべてレンタル可能です。
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="sakuma-body text-[#1A1F3A] mb-8">
            今すぐLINEで体験予約をしましょう！
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] text-white px-12 py-6 rounded-none border-6 border-[#1A1F3A] font-black text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 sticker-ui">
              LINE で体験予約
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
