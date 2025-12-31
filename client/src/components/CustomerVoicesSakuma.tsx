import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Customer Voices Component - Sakuma Design
 */

const testimonials = [
  {
    name: '田中美咲さん',
    age: '32歳',
    goal: '産後ダイエット',
    quote: 'オーナーあいかが同じ産後の経験者だから、本当に心強い。3ヶ月で−8kg達成しました！',
    rating: 5,
    color: 'bg-[#FF006E]',
    rotation: '-2deg',
  },
  {
    name: '鈴木由美さん',
    age: '28歳',
    goal: '初心者向け',
    quote: '初めてのキックボクシング。女性トレーナーだから質問しやすく、楽しく続けられています。',
    rating: 5,
    color: 'bg-[#00D9FF]',
    rotation: '2deg',
  },
  {
    name: '佐藤優子さん',
    age: '35歳',
    goal: 'ストレス解消',
    quote: '子連れで通えるので、子どもを見守りながら自分の時間が作れる。これ以上ないです。',
    rating: 5,
    color: 'bg-[#FFD700]',
    rotation: '-1deg',
  },
];

export default function CustomerVoicesSakuma() {
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
    <section className="section-padding bg-gradient-to-b from-white to-[#FAFAF8] relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="sakuma-title text-[#1A1F3A] mb-4">
          お客様の声
        </h2>
        <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
          FLATUPGYM に通う女性たちの、リアルな声。
        </p>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`${testimonial.color} p-8 rounded-none border-6 border-[#1A1F3A] transform ${testimonial.rotation} transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer sticker-ui shadow-xl`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-white text-white"
                  />
                ))}
            </div>

            {/* Quote */}
            <p className="text-white font-bold text-lg mb-6 leading-relaxed">
              {testimonial.quote}
            </p>

            {/* Author */}
            <div className="border-t-4 border-white pt-4">
              <p className="text-white font-black text-lg">{testimonial.name}</p>
              <p className="text-white/80 font-bold text-sm">
                {testimonial.age} / {testimonial.goal}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1A1F3A] p-12 rounded-none border-8 border-[#FF006E] transform rotate-1 text-center"
      >
        <p className="sakuma-body text-white/80 mb-4">
          Google口コミ平均評価
        </p>
        <div className="flex justify-center gap-2 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-[#FFD700] text-[#FFD700]"
              />
            ))}
        </div>
        <p className="text-white font-black text-2xl">4.9 / 5.0</p>
        <p className="text-white/60 font-bold text-sm mt-2">30件以上のレビュー</p>
      </motion.div>
    </section>
  );
}
