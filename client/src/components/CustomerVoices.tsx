import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Customer Voices Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Social proof through real customer testimonials
 * - Emotional storytelling
 * - Trust-building through authentic voices
 */

const voices = [
  {
    name: 'A.Mさん',
    age: '30代女性',
    title: '自分に自信が持てるようになりました！',
    content:
      '運動経験が全くなく不安でしたが、トレーナーさんが優しく丁寧に教えてくれるので、楽しく続けられています。体重が減っただけでなく、気持ちも前向きになり、自分に自信が持てるようになりました。',
    image: 'https://ik.imagekit.io/FLATUPGYM/VOICE1.png?updatedAt=1756897198273',
  },
  {
    name: 'K.Tさん',
    age: '20代女性',
    title: 'ストレス発散に最高です！',
    content:
      '仕事のストレスが溜まっていましたが、キックボクシングのミット打ちは最高のストレス発散になります。今では週2回通うのが楽しみです。',
    image: 'https://ik.imagekit.io/FLATUPGYM/VOICE2.png?updatedAt=1756897200414',
  },
  {
    name: 'S.Yさん',
    age: '40代女性',
    title: '産後の体型戻しに成功しました',
    content:
      '産後太りがなかなか解消されませんでしたが、パーソナルトレーニングで効率的に体を絞ることができました。子連れでもOKなのが嬉しいです。',
    image: 'https://ik.imagekit.io/FLATUPGYM/VOICE3.png?updatedAt=1756897201430',
  },
];

export default function CustomerVoices() {
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
    <section className="section-padding bg-gradient-to-b from-[#E6F5FF] to-[#FAFAF8] relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">FLATUPGYMの信頼性</span>
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            多くの方に支持されています
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="floating-card text-center"
          >
            <p className="text-5xl font-bold gradient-text mb-2">
              1,221人
            </p>
            <p className="text-lg text-[#666666]">LINE友だち突破！</p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="floating-card text-center"
          >
            <p className="text-5xl font-bold gradient-text mb-2">
              30件
            </p>
            <p className="text-lg text-[#666666]">Google口コミ 高評価！</p>
          </motion.div>
        </motion.div>

        {/* Customer Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {voices.map((voice, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="floating-card"
            >
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden h-48">
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF006E] text-[#FF006E]"
                  />
                ))}
              </div>

              {/* Content */}
              <h4 className="font-poppins font-bold text-lg text-[#1A1F3A] mb-2">
                {voice.title}
              </h4>
              <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                {voice.content}
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-[#E5E5E5]">
                <p className="font-poppins font-semibold text-[#FF006E]">
                  {voice.name}
                </p>
                <p className="text-xs text-[#666666]">{voice.age}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
