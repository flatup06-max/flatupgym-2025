import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Before/After Story Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Powerful transformation stories
 * - Interactive before/after slider
 * - Emotional connection with real results
 * - Bold typography and visual impact
 */

interface TransformationStory {
  id: number;
  name: string;
  age: string;
  beforeImage: string;
  afterImage: string;
  beforeText: string;
  afterText: string;
  duration: string;
  weight: string;
  story: string;
  className: string;
}

const stories: TransformationStory[] = [
  {
    id: 1,
    name: '田中 美咲さん',
    age: '32歳',
    beforeImage: 'https://ik.imagekit.io/FLATUPGYM/sango1.jpeg?updatedAt=1756897186137&tr=w-400,h-500,q-80,f-webp',
    afterImage: 'https://ik.imagekit.io/FLATUPGYM/sango2.png?updatedAt=1756897194981&tr=w-400,h-500,q-80,f-webp',
    beforeText: 'ビフォー',
    afterText: 'アフター',
    duration: '6ヶ月',
    weight: '-25kg',
    story: '産後の体型変化に悩んでいました。FLATUPGYM に出会い、女性オーナーあいかの親身なサポートで、無理なく続けられました。今は子どもと一緒に来ることもできて、心も体も元気になりました！',
    className: 'transform -rotate-1',
  },
  {
    id: 2,
    name: '鈴木 由紀さん',
    age: '28歳',
    beforeImage: 'https://ik.imagekit.io/FLATUPGYM/IMG_6883.JPG?updatedAt=1767137487657&tr=w-400,h-500,q-80,f-webp',
    afterImage: 'https://ik.imagekit.io/FLATUPGYM/IMG_6884.JPG?updatedAt=1767137483813&tr=w-400,h-500,q-80,f-webp',
    beforeText: 'ビフォー',
    afterText: 'アフター',
    duration: '3ヶ月',
    weight: '-8kg',
    story: '初心者でしたが、女性トレーナーの丁寧な指導で、恐怖心なく始められました。キックボクシングの楽しさにハマり、今ではジムが生活の一部です。体が引き締まっただけでなく、心も強くなった気がします。',
    className: 'transform rotate-1',
  },
  {
    id: 3,
    name: '佐藤 香織さん',
    age: '35歳',
    beforeImage: 'https://ik.imagekit.io/FLATUPGYM/2.jpg?updatedAt=1751535141684&tr=w-400,h-500,q-80,f-webp',
    afterImage: 'https://ik.imagekit.io/FLATUPGYM/3.jpg?updatedAt=1751535141772&tr=w-400,h-500,q-80,f-webp',
    beforeText: 'ビフォー',
    afterText: 'アフター',
    duration: '4ヶ月',
    weight: '-12kg',
    story: '仕事のストレスで体重が増えていました。FLATUPGYM は女性が安心して通える環境で、同じ目標を持つ仲間たちとの出会いも最高です。今は自分に自信が持てるようになりました。',
    className: 'transform -rotate-1',
  },
];

export default function BeforeAfterStory() {
  const [activeStory, setActiveStory] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentStory = stories[activeStory];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-6 py-3 bg-[#FF006E] border-4 border-white rounded-none transform -rotate-2 shadow-xl">
            <p className="text-sm font-black text-white tracking-wider">
              🌟 会員の変身ストーリー
            </p>
          </div>
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            あなたの理想の体へ
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
            FLATUPGYM で実現した、会員たちの感動的な変身事例をご紹介します。
          </p>
        </motion.div>

        {/* Main Story Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Before/After Slider */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="relative w-full aspect-square rounded-none border-8 border-[#1A1F3A] overflow-hidden shadow-2xl bg-white">
                {/* After Image (Background) */}
                <img
                  src={currentStory.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Before Image (Overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentStory.beforeImage}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${(100 / sliderPosition) * 100}%` }}
                    loading="lazy"
                  />
                </div>

                {/* Slider Handle */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                  style={{ cursor: 'col-resize' }}
                />

                {/* Visual Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#FF006E] shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FF006E] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M9 19l7-7-7-7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Before/After Labels */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-[#1A1F3A] border-2 border-white rounded-none font-black text-white text-sm">
                  {currentStory.beforeText}
                </div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-[#FF006E] border-2 border-white rounded-none font-black text-white text-sm">
                  {currentStory.afterText}
                </div>

                {/* Weight Loss Badge */}
                <motion.div
                  className="absolute bottom-4 right-4 px-6 py-3 bg-[#FF006E] border-4 border-white rounded-none font-black text-white text-xl shadow-lg transform rotate-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentStory.weight}
                </motion.div>
              </div>
            </motion.div>

            {/* Story Details */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <div className="bg-white p-8 rounded-none border-8 border-[#1A1F3A] shadow-xl transform -rotate-1">
                <h3 className="text-3xl font-black text-[#1A1F3A] mb-2">
                  {currentStory.name}
                </h3>
                <p className="text-sm text-[#666666] mb-6 font-bold">
                  {currentStory.age} • {currentStory.duration}で達成
                </p>

                <div className="mb-6 p-4 bg-[#FFF0F5] border-4 border-[#FF006E] rounded-none">
                  <p className="text-[#1A1F3A] font-bold leading-relaxed">
                    {currentStory.story}
                  </p>
                </div>

                <div className="flex gap-2 mb-6">
                  <div className="flex-1 text-center p-3 bg-[#F5F5F5] border-2 border-[#1A1F3A] rounded-none">
                    <p className="text-xs text-[#666666] font-bold mb-1">期間</p>
                    <p className="text-lg font-black text-[#1A1F3A]">{currentStory.duration}</p>
                  </div>
                  <div className="flex-1 text-center p-3 bg-[#FF006E] border-2 border-[#1A1F3A] rounded-none">
                    <p className="text-xs text-white font-bold mb-1">体重減</p>
                    <p className="text-lg font-black text-white">{currentStory.weight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {stories.map((story, idx) => (
            <motion.button
              key={story.id}
              onClick={() => setActiveStory(idx)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 font-black rounded-none border-4 transition-all duration-300 ${
                activeStory === idx
                  ? 'bg-[#FF006E] text-white border-[#1A1F3A] shadow-lg'
                  : 'bg-white text-[#1A1F3A] border-[#1A1F3A] hover:shadow-lg'
              }`}
            >
              {story.name}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] p-8 rounded-none border-8 border-[#1A1F3A] shadow-2xl text-center transform rotate-1"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            あなたも変身できる！
          </h3>
          <p className="text-white/90 font-bold mb-6 max-w-2xl mx-auto">
            FLATUPGYM では、女性オーナーあいかと女性トレーナーが、あなたの目標達成を全力でサポートします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://liff.line.me/2008276179-XxwM2QQD" target="_blank" rel="noopener noreferrer">
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
            </a>
            <a href="tel:07090353485" className="px-8 py-3 bg-white text-[#FF006E] font-black rounded-none border-4 border-white hover:bg-[#1A1F3A] hover:text-white transition-all duration-300">
              📞 電話で相談
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
