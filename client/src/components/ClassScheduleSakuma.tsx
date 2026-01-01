import { motion } from 'framer-motion';
import { Clock, Users, Zap, Star } from 'lucide-react';

/**
 * Class Schedule Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Clear, bold schedule display
 * - Color-coded by class type
 * - Emphasis on women-first approach
 * - Easy to understand layout
 */

const schedule = [
  {
    day: '月',
    classes: [
      { time: '18:00-19:00', name: 'レディースインストラクター常駐 初心者クラス', level: '女性が最優先', color: 'bg-[#FF006E]', badge: '👩‍🏫 女性優先' },
      { time: '19:30-20:30', name: '初心者クラス', level: '男女混合', color: 'bg-[#00D9FF]', badge: '👩‍🏫 女性優先' },
    ],
  },
  {
    day: '火',
    classes: [
      { time: '16:00-17:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]', badge: null },
      { time: '18:00-19:00', name: 'レディースインストラクター常駐 初心者クラス', level: '女性が最優先', color: 'bg-[#FF006E]', badge: '👩‍🏫 女性優先' },
      { time: '19:30-20:30', name: '初心者クラス', level: '男女混合', color: 'bg-[#00D9FF]', badge: '👩‍🏫 女性優先' },
    ],
  },
  {
    day: '水',
    classes: [
      { time: '18:00-19:00', name: 'レディースインストラクター常駐 初心者クラス', level: '女性が最優先', color: 'bg-[#FF006E]', badge: '👩‍🏫 女性優先' },
      { time: '19:30-20:30', name: '初心者クラス', level: '男女混合', color: 'bg-[#00D9FF]', badge: '👩‍🏫 女性優先' },
    ],
  },
  {
    day: '木',
    classes: [
      { time: '16:00-17:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]', badge: null },
      { time: '18:00-19:00', name: 'レディースインストラクター常駐 初心者クラス', level: '女性が最優先', color: 'bg-[#FF006E]', badge: '👩‍🏫 女性優先' },
      { time: '19:30-20:30', name: '初心者クラス', level: '男女混合', color: 'bg-[#00D9FF]', badge: '👩‍🏫 女性優先' },
    ],
  },
  {
    day: '金',
    classes: [
      { time: '18:00-19:00', name: 'レディースインストラクター常駐 初心者クラス', level: '女性が最優先', color: 'bg-[#FF006E]', badge: '👩‍🏫 女性優先' },
      { time: '19:30-20:30', name: '初心者クラス', level: '男女混合', color: 'bg-[#00D9FF]', badge: '👩‍🏫 女性優先' },
    ],
  },
  {
    day: '土',
    classes: [
      { time: '10:00-11:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]', badge: null },
      { time: '14:00-15:00', name: 'レディースクラス（限定開催）', level: '女性専用・初心者向け', color: 'bg-[#FF006E]', badge: '⭐ 限定開催' },
    ],
  },
];

export default function ClassScheduleSakuma() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const dayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#FAFAF8] relative overflow-hidden">
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
              ⏰ クラススケジュール
            </p>
          </div>
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            あなたにぴったりなクラスを選ぼう
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto mb-6">
            すべてのクラスで女性が最優先。<br />
            女性オーナーだからこそできる、女性に寄り添ったレッスンをご体験ください。
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] p-6 rounded-none border-6 border-[#1A1F3A] mb-12 shadow-lg transform -rotate-1"
        >
          <div className="flex items-center gap-4">
            <Star className="w-8 h-8 text-white flex-shrink-0 fill-white" />
            <div>
              <p className="text-white font-black text-lg mb-1">
                🌟 女性が最優先のレッスン
              </p>
              <p className="text-white/90 font-bold">
                すべてのクラスで、女性のニーズを最優先に考えたレッスンを実施しています。女性オーナーだからこそできる、心配りと配慮をお約束します。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {schedule.map((daySchedule, dayIdx) => (
            <motion.div
              key={dayIdx}
              variants={dayVariants}
              className="bg-white border-6 border-[#1A1F3A] rounded-none p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Day Header */}
              <h3 className="text-4xl font-black text-[#FF006E] mb-6 text-center">
                {daySchedule.day}曜日
              </h3>

              {/* Classes */}
              <div className="space-y-4">
                {daySchedule.classes.map((classItem, classIdx) => (
                  <motion.div
                    key={classIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: classIdx * 0.1 }}
                    className={`${classItem.color} p-4 rounded-none border-4 border-[#1A1F3A] transform -rotate-1 hover:rotate-0 transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Badge */}
                    {classItem.badge && (
                      <div className="absolute top-2 right-2 px-3 py-1 bg-white rounded-none border-2 border-[#1A1F3A] text-xs font-black text-[#1A1F3A]">
                        {classItem.badge}
                      </div>
                    )}

                    {/* Time */}
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-white font-black" />
                      <p className="text-white font-black text-sm">{classItem.time}</p>
                    </div>

                    {/* Class Name */}
                    <p className="text-white font-black text-lg mb-1 pr-20">
                      {classItem.name}
                    </p>

                    {/* Level */}
                    <p className="text-white/80 font-bold text-xs">
                      {classItem.level}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A] p-8 rounded-none border-8 border-[#FF006E] transform -rotate-1 mb-12"
        >
          <h3 className="text-white font-black text-xl mb-6 text-center">
            クラス種別
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF006E] border-4 border-white rounded-none" />
              <div>
                <p className="text-white font-black">レディースクラス</p>
                <p className="text-white/70 text-sm">女性専用・土曜限定</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00D9FF] border-4 border-white rounded-none" />
              <div>
                <p className="text-white font-black">初心者クラス</p>
                <p className="text-white/70 text-sm">👩‍🏫 女性優先</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFD700] border-4 border-white rounded-none" />
              <div>
                <p className="text-white font-black">キッズクラス</p>
                <p className="text-white/70 text-sm">小1〜中3対象</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Women-First Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-none border-8 border-[#FF006E] shadow-lg mb-12 transform rotate-1"
        >
          <h3 className="text-2xl font-black text-[#FF006E] mb-4 text-center">
            💪 女性オーナーだからこそできる
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">👩‍🏫</div>
              <div>
                <p className="font-black text-[#1A1F3A] mb-1">レディースインストラクター常駐</p>
                <p className="text-[#666666] text-sm">すべてのクラスで女性トレーナーがサポート。女性ならではの悩みや目標に寄り添います。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌟</div>
              <div>
                <p className="font-black text-[#1A1F3A] mb-1">女性が最優先のレッスン</p>
                <p className="text-[#666666] text-sm">男女混合クラスでも、女性のニーズを最優先に考えたレッスン内容で実施しています。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <p className="font-black text-[#1A1F3A] mb-1">初心者向けの丁寧な指導</p>
                <p className="text-[#666666] text-sm">恐怖心や不安を払拭し、楽しくトレーニングできる環境を整えています。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">❤️</div>
              <div>
                <p className="font-black text-[#1A1F3A] mb-1">産後ダイエット実績</p>
                <p className="text-[#666666] text-sm">オーナーあいかの-25kg成功事例。ママたちの目標達成をサポートします。</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="sakuma-body text-[#1A1F3A] mb-6">
            ご都合に合わせて、いつでも体験クラスにご参加いただけます。<br />
            <span className="font-black text-[#FF006E]">初心者さんも大歓迎！</span>
          </p>
          <a href="https://liff.line.me/2008276179-XxwM2QQD" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
