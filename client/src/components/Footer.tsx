import { motion } from 'framer-motion';

/**
 * Footer Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Clear contact information
 * - Final CTA
 * - Brand reinforcement
 */

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1A1F3A] to-[#2D3142] text-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-[#FF006E]/10 to-[#00D9FF]/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">FLATUPGYM</h3>
            <p className="text-[#A0A0A0] leading-relaxed">
              女性・子ども・初心者が主役の、最も安全で最も楽しく、最も強くなれる格闘技ジム。
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">アクセス</h4>
            <div className="space-y-3 text-[#A0A0A0]">
              <p>
                <span className="font-semibold">住所</span>
                <br />
                千葉県成田市土屋516-4 青柳ビル204
              </p>
              <p>
                <span className="font-semibold">電話</span>
                <br />
                <a href="tel:07090353485" className="hover:text-[#FF006E] transition-colors">
                  070-9035-3485
                </a>
              </p>
              <p>
                <span className="font-semibold">営業時間</span>
                <br />
                24時間営業
                <br />
                <span className="text-sm">
                  平日スタッフ滞在: 10:00-12:00 / 18:00-21:00
                  <br />
                  土曜スタッフ滞在: 10:00-15:00
                </span>
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">リンク</h4>
            <div className="space-y-2">
              <a
                href="https://liff.line.me/2008276179-XxwM2QQD"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#A0A0A0] hover:text-[#FF006E] transition-colors"
              >
                💬 LINE公式アカウント
              </a>
              <a
                href="https://maps.app.goo.gl/QFwaBoKdzMRWus1z8?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#A0A0A0] hover:text-[#FF006E] transition-colors"
              >
                🗺️ Google Map
              </a>
              <a
                href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#A0A0A0] hover:text-[#FF006E] transition-colors"
              >
                📸 Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[#2D3142] pt-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">次は、あなたの</span>
            <br />
            <span>人生を変える番です。</span>
          </h2>
          <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
            世界一初心者に優しい場所で、お待ちしています。
          </p>
          <a href="https://lin.ee/cTSDajPz" target="_blank" rel="noopener noreferrer">
            <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[#2D3142] mt-12 pt-8 text-center text-[#666666] text-sm"
        >
          <p>© 2025 FLATUPGYM. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
