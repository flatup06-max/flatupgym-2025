import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

/**
 * Pricing Plans Component - V2 (Updated)
 * 
 * Design Philosophy:
 * - 3 main plans: Kids, Ladies, Mens
 * - Visitor & ticket options
 * - Campaign banner
 */

const mainPlans = [
  {
    name: 'キッズプラン',
    subtitle: '小1〜中3',
    price: '7,700',
    period: '/月',
    description: '週3回のレッスン',
    features: [
      '週3回（火・木・土）',
      '護身術の基礎を学べる',
      '体力向上・礼儀指導',
      'いじめ対策にも効果的',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#00D9FF]',
    rotation: '-2deg',
    popular: false,
  },
  {
    name: 'レディースプラン',
    subtitle: '女性専用',
    price: '8,800',
    period: '/月',
    description: '通い放題で美ボディへ',
    features: [
      '通い放題',
      '美容・シェイプアップ',
      '子連れOK',
      'ダイエット実績多数',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#FF006E]',
    rotation: '2deg',
    popular: true,
  },
  {
    name: '初心者クラス',
    subtitle: '全年代対応',
    price: '8,800',
    period: '/月',
    description: '基礎から丁寧に学べる',
    features: [
      '通い放題',
      '格闘技の基礎を習得',
      '体力向上',
      '初心者大歓迎',
    ],
    cta: '今すぐ申し込む',
    color: 'bg-[#FFD700]',
    rotation: '-1deg',
    popular: false,
  },
];

const visitorPlans = [
  {
    name: 'ビジター',
    price: '3,000',
    period: '1回',
    description: 'お試し利用',
  },
  {
    name: '6回券',
    price: '15,000',
    period: '1年有効',
    description: 'お得なセット',
  },
  {
    name: '12回券',
    price: '30,000',
    period: '1年有効・最安',
    description: '最もお得',
  },
];

export default function PricingPlansV2() {
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
      {/* Campaign Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] p-6 rounded-none border-6 border-[#1A1F3A] transform -rotate-1 text-center sticker-ui shadow-xl"
      >
        <p className="text-white font-black text-2xl">
          🎉 入会金半額キャンペーン中
        </p>
        <p className="text-white/90 font-bold mt-2">
          手ぶらで体験OK（レンタル無料）
        </p>
      </motion.div>

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

      {/* Main Pricing Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {mainPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`${plan.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${plan.rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-2xl relative`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 -right-4 bg-[#FFD700] text-[#1A1F3A] px-4 py-2 rounded-full font-black text-sm border-4 border-white transform rotate-12 shadow-lg">
                人気No.1
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-3xl font-black text-white mb-1">
              {plan.name}
            </h3>
            <p className="text-white/80 font-bold text-sm mb-4">{plan.subtitle}</p>

            {/* Price */}
            <div className="mb-6 pb-6 border-b-4 border-white">
              <p className="text-5xl font-black text-white">
                ¥{plan.price}
              </p>
              <p className="text-white/80 text-sm font-bold mt-1">{plan.period}</p>
              <p className="text-white/70 text-xs font-bold mt-2">{plan.description}</p>
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

      {/* Visitor & Ticket Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-black text-[#1A1F3A] text-center mb-8">
          ビジター・回数券
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visitorPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-[#1A1F3A] p-6 rounded-none text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h4 className="text-2xl font-black text-[#1A1F3A] mb-2">
                {plan.name}
              </h4>
              <p className="text-4xl font-black text-[#FF006E] mb-2">
                ¥{plan.price}
              </p>
              <p className="text-sm font-bold text-[#666666] mb-4">
                {plan.period}
              </p>
              <p className="text-xs font-bold text-[#999999]">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>
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
          入会金は無料です。見学だけでも大歓迎です。
        </p>
        <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
          <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
        </a>
      </motion.div>
    </section>
  );
}
