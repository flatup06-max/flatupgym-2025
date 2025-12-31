import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * FAQ Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Addressing customer concerns
 * - Building trust through transparency
 * - Reducing friction in decision-making
 */

const faqs = [
  {
    question: '怖い人はいませんか？',
    answer:
      '女性が不安になる行為は即退会。男性の上半身裸禁止、不潔・だらしない・反社会的・ナンパ行為は即退会と徹底管理しています。安心して練習できる環境をお約束します。',
  },
  {
    question: '痛くないですか？',
    answer:
      '初心者設計で無理な練習はありません。トレーナーが丁寧に指導し、あなたのペースに合わせて進めていきます。痛みを感じたら、いつでもトレーナーに相談してください。',
  },
  {
    question: '運動未経験でも大丈夫ですか？',
    answer:
      '9割以上が未経験スタート。初心者専門の指導設計なので、全く心配ありません。むしろ初心者だからこそ、正しい基礎を学べるチャンスです。',
  },
  {
    question: '女性は多いですか？',
    answer:
      'はい、女性・キッズが中心です。女性が最優先で守られるジムなので、女性会員が圧倒的多数派です。女性同士で励まし合える環境です。',
  },
  {
    question: '1人でも大丈夫ですか？',
    answer:
      'もちろんです。スタッフが必ずサポートします。初めての方には、丁寧なオリエンテーションを行い、安心して始められるようにサポートします。',
  },
  {
    question: '痩せたいです',
    answer:
      'ダイエット実績多数あります。食事指導も行っており、運動と栄養の両面からサポートします。オーナーあいか自身が産後−25kgを達成した経験を活かし、効率的なダイエットプログラムを提供します。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#FAFAF8] to-[#F5E6F0] relative overflow-hidden">
      <div className="container max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">よくある質問</span>
          </h2>
          <p className="text-lg text-[#666666]">
            不安なことはありませんか？ここで解決！
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border-2 border-[#E5E5E5] rounded-xl overflow-hidden hover:border-[#FF006E]/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F0F0F0] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#1A1F3A] text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF006E] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t-2 border-[#E5E5E5] bg-gradient-to-r from-[#FF006E]/5 to-[#00D9FF]/5 px-6 py-4"
                >
                  <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
