import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * Pricing Plans Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Clear, transparent pricing structure
 * - Floating cards with hover effects
 * - Popular plan highlighted
 * - Trust-building through value communication
 */

const plans = [
  {
    name: 'キッズプラン',
    target: '小学1年生〜中学3年生',
    price: '¥7,700',
    period: '月額（税込）',
    features: [
      '週3回クラス（火木土）',
      '護身術・体力向上',
      'アマチュア選手育成',
      '礼儀・マナーモラル指導',
    ],
    cta: '体験レッスンを予約',
    popular: false,
  },
  {
    name: 'レディースプラン',
    target: '女性専用',
    price: '¥8,800',
    period: '月額（税込）',
    features: [
      '通い放題',
      '護身術・柔術',
      'キックボクシング',
      'ストレス解消・美容・シェイプアップ',
      '女性専用時間帯',
      '子連れ参加OK',
    ],
    cta: '体験レッスンを予約',
    popular: true,
  },
  {
    name: 'メンズプラン',
    target: '高校生以上の男性',
    price: '¥9,900',
    period: '月額（税込）',
    features: [
      '通い放題',
      '本格キックボクシング',
      'MMA総合格闘技',
      'BJJ柔術',
      'フィットネス／ダイエット',
      'プロ選手対応メニュー',
    ],
    cta: '体験レッスンを予約',
    popular: false,
  },
];

export default function PricingPlans() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#F5E6F0] to-[#E6F5FF] relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">月額制で安心して</span>
            <br />
            <span className="text-[#1A1F3A]">続けられます♪</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            あなたのライフスタイルに合わせて、最適なプランをお選びください。
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`floating-card relative ${plan.popular ? 'md:scale-105 ring-2 ring-[#FF006E]' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    人気No.1
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1A1F3A] mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#666666] mb-4">{plan.target}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[#666666]">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF006E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#666666]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] text-white hover:shadow-lg'
                      : 'bg-[#F0F0F0] text-[#FF006E] hover:bg-[#FF006E]/10'
                  }`}
                >
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
          className="bg-white rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-[#1A1F3A] mb-6">
            ビジター・回数券システム
          </h3>
          <p className="text-[#666666] mb-8">
            まずは気軽に体験したい方におすすめ！
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'ビジター',
                desc: '1回だけ体験したい方',
                price: '¥3,000',
                features: ['全クラス参加可能', 'グローブレンタル込み', '当日予約OK'],
              },
              {
                title: '回数券（6回）',
                desc: '半年間有効',
                price: '¥15,000',
                features: ['1回あたり¥2,500', '自由なペースで通える', 'ビジターより500円お得'],
              },
              {
                title: '回数券（12回）',
                desc: '1年間有効',
                price: '¥30,000',
                features: ['1回あたり¥2,500', '1年間たっぷり使える', 'ビジターより6,000円お得'],
                highlight: true,
              },
            ].map((ticket, idx) => (
              <div key={idx} className={`p-6 rounded-xl border-2 ${ticket.highlight ? 'border-[#FF006E] bg-[#FF006E]/5' : 'border-[#E5E5E5]'}`}>
                <h4 className="font-poppins font-bold text-lg text-[#1A1F3A] mb-1">
                  {ticket.title}
                </h4>
                <p className="text-sm text-[#666666] mb-3">{ticket.desc}</p>
                <p className="text-2xl font-bold gradient-text mb-4">
                  {ticket.price}
                </p>
                <ul className="space-y-2">
                  {ticket.features.map((f, fidx) => (
                    <li key={fidx} className="text-sm text-[#666666] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF006E] rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-br from-[#FF006E]/10 to-[#FF9A9E]/10 rounded-2xl p-8 border border-[#FF006E]/20">
            <h4 className="font-poppins font-bold text-lg text-[#FF006E] mb-3">
              ✨ 入会金半額
            </h4>
            <p className="text-[#666666]">
              通常¥10,000の入会金が今なら半額！体験からそのまま入会でさらにお得に。
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#00D9FF]/10 to-[#00B8E6]/10 rounded-2xl p-8 border border-[#00D9FF]/20">
            <h4 className="font-poppins font-bold text-lg text-[#00D9FF] mb-3">
              🎒 体験時は手ぶらでOK
            </h4>
            <p className="text-[#666666]">
              グローブ・プロテクターは無料レンタル。タオルと飲み物だけお持ちください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
