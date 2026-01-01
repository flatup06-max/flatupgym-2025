import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

/**
 * Access Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Clear access information
 * - Google Map integration
 * - Easy to find location
 */

export default function AccessSakuma() {
  const accessInfo = [
    {
      icon: MapPin,
      title: '住所',
      content: '千葉県成田市...',
      color: 'text-[#FF006E]',
    },
    {
      icon: Phone,
      title: '電話番号',
      content: '090-XXXX-XXXX',
      color: 'text-[#00D9FF]',
    },
    {
      icon: Clock,
      title: '営業時間',
      content: '平日 18:00-21:00\n土曜 10:00-15:00',
      color: 'text-[#FFD700]',
    },
    {
      icon: Mail,
      title: 'LINE',
      content: '公式LINEで予約',
      color: 'text-[#FF9A9E]',
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            アクセス
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto">
            FLATUPGYM への行き方。成田駅から徒歩5分の好立地。
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-none border-8 border-[#1A1F3A] overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5234567890123!2d140.31234567890123!3d35.76543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60228d5a5a5a5a5b%3A0x1234567890abcdef!2sFLATUPGYM!5e0!3m2!1sja!2sjp!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Access Info Cards */}
            {accessInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border-6 border-[#1A1F3A] p-6 rounded-none hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`w-8 h-8 ${info.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h3 className="text-[#1A1F3A] font-black text-lg mb-2">
                        {info.title}
                      </h3>
                      <p className="text-[#666666] font-bold whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-gradient-to-r from-[#FF006E] to-[#FF9A9E] text-white py-4 rounded-none font-black text-lg border-4 border-[#1A1F3A] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  LINEで予約する
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Access Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1F3A] p-12 rounded-none border-8 border-[#00D9FF] transform rotate-1"
        >
          <h3 className="text-white font-black text-2xl mb-6 text-center">
            成田駅からのアクセス
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-[#00D9FF] font-black text-3xl mb-2">1</p>
              <p className="text-white font-bold">成田駅を出て</p>
              <p className="text-white/70 text-sm">南口方面へ</p>
            </div>
            <div className="text-center">
              <p className="text-[#00D9FF] font-black text-3xl mb-2">2</p>
              <p className="text-white font-bold">徒歩5分</p>
              <p className="text-white/70 text-sm">直進してください</p>
            </div>
            <div className="text-center">
              <p className="text-[#00D9FF] font-black text-3xl mb-2">3</p>
              <p className="text-white font-bold">到着！</p>
              <p className="text-white/70 text-sm">ピンク色の看板が目印</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
