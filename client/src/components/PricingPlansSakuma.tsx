import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * Pricing Plans Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Bold sticker-like cards
 * - High contrast colors
 * - Playful rotation and scale
 */

const plans = [
  {
    name: '体験クラス',
    price: '1,000円',
    description: '初めての方向け',
    features: [
      '60分のクラス体験',
      'トレーナーによるカウンセリング',
      'ジム見学ツアー',
      '初心者向けサポート',
    ],
    cta: 'LINE で予約',
    color: 'bg-[#FF006E]',
    rotation: '-2deg',
    popular: false,
  },
  {
    name: '月4回プラン',
    price: '8,800円',
    description: '週1回のペース',
    features: [
      '月4回のクラス受講',
      '女性専用クラス優先予約',
      'オーナーあいかの指導',
      '産後ダイエットサポート',
      '子連れ参加OK',
    ],
    cta: 'LINE で相談',
    color: 'bg-[#00D9FF]',
    rotation: '2deg',
    popular: true,
  },
  {
    name: '月8回プラン',
    price: '16,500円',
    description: '週2回のペース',
    features: [
      '月8回のクラス受講',
      '全クラス受講可能',
      'オーナーあいかの個別指導',
      '24時間ジム利用',
      '栄養相談付き',
    ],
    cta: 'LINE で相談',
    color: 'bg-[#FFD700]',
    rotation: '-1deg',
    popular: false,
  },
];

export default function PricingPlansSakuma() {
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
    <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-white relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="sakuma-title text-[#1A1F3A] mb-4">
          料金プラン
        </h2>
        <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
          あなたのペースに合わせて選べる、3つのプラン。
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`${plan.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${plan.rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-2xl`}
          >
            {/* Badge */}
            {plan.popular && (
              <div className="absolute -top-4 -right-4 bg-[#FF006E] text-white px-4 py-2 rounded-full font-black text-sm border-4 border-white transform rotate-12">
                人気
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-3xl font-black text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-white/80 font-bold mb-4">{plan.description}</p>

            {/* Price */}
            <div className="mb-6 pb-6 border-b-4 border-white">
              <p className="text-5xl font-black text-white">
                {plan.price}
              </p>
              <p className="text-white/80 text-sm font-bold mt-1">/月</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, fidx) => (
                <div key={fidx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white font-black flex-shrink-0 mt-0.5" />
                  <span className="text-white font-bold text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-white text-[#1A1F3A] py-4 rounded-none font-black text-lg border-4 border-[#1A1F3A] hover:bg-[#1A1F3A] hover:text-white transition-all duration-300 transform hover:scale-105">
                {plan.cta}
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sakuma-body text-[#1A1F3A] mb-6">
          体験クラスは <span className="font-black text-[#FF006E]">30秒で予約完了</span>。<br />
          見学だけでも大歓迎です。
        </p>
      </motion.div>
    </section>
  );
}
