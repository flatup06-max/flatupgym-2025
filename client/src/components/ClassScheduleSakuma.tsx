import { motion } from 'framer-motion';
import { Clock, Users, Zap } from 'lucide-react';

/**
 * Class Schedule Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Clear, bold schedule display
 * - Color-coded by class type
 * - Easy to understand layout
 */

const schedule = [
  {
    day: '月',
    classes: [
      { time: '18:00-19:00', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '19:30-20:30', name: '初心者クラス', level: '全年代対応', color: 'bg-[#00D9FF]' },
    ],
  },
  {
    day: '火',
    classes: [
      { time: '16:00-17:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]' },
      { time: '18:00-19:00', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '19:30-20:30', name: '初心者クラス', level: '全年代対応', color: 'bg-[#00D9FF]' },
    ],
  },
  {
    day: '水',
    classes: [
      { time: '18:00-19:00', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '19:30-20:30', name: '初心者クラス', level: '全年代対応', color: 'bg-[#00D9FF]' },
    ],
  },
  {
    day: '木',
    classes: [
      { time: '16:00-17:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]' },
      { time: '18:00-19:00', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '19:30-20:30', name: '初心者クラス', level: '全年代対応', color: 'bg-[#00D9FF]' },
    ],
  },
  {
    day: '金',
    classes: [
      { time: '18:00-19:00', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '19:30-20:30', name: '初心者クラス', level: '全年代対応', color: 'bg-[#00D9FF]' },
    ],
  },
  {
    day: '土',
    classes: [
      { time: '10:00-11:00', name: 'キッズクラス', level: '小1〜中3', color: 'bg-[#FFD700]' },
      { time: '11:30-12:30', name: 'レディースキックボクシング', level: '初心者向け', color: 'bg-[#FF006E]' },
      { time: '14:00-15:00', name: 'メンズボクシング', level: '全レベル対応', color: 'bg-[#00D9FF]' },
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
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            クラススケジュール
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
            あなたの都合に合わせてクラスを選べます。<br />
            初心者向けから上級者向けまで、幅広いクラスをご用意。
          </p>
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
                    className={`${classItem.color} p-4 rounded-none border-4 border-[#1A1F3A] transform -rotate-1 hover:rotate-0 transition-all duration-300`}
                  >
                    {/* Time */}
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-white font-black" />
                      <p className="text-white font-black text-sm">{classItem.time}</p>
                    </div>

                    {/* Class Name */}
                    <p className="text-white font-black text-lg mb-1">
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
                <p className="text-white/70 text-sm">女性専用・初心者向け</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00D9FF] border-4 border-white rounded-none" />
              <div>
                <p className="text-white font-black">初心者クラス</p>
                <p className="text-white/70 text-sm">全年代対応</p>
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="sakuma-body text-[#1A1F3A] mb-6">
            ご都合に合わせて、いつでも体験クラスにご参加いただけます。
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
