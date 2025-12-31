import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Instagram } from 'lucide-react';

/**
 * Fixed Footer Buttons Component - Empathetic Dynamism
 * 
 * Design Philosophy:
 * - Always-accessible contact options
 * - Seamless user journey to action
 * - Multiple touchpoints for different preferences
 */

const buttons = [
  {
    icon: MessageCircle,
    label: 'LINE',
    href: 'https://lin.ee/cTSDajPz',
    color: 'from-[#00B900] to-[#00D900]',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(0,217,0,0.4)]',
  },
  {
    icon: MapPin,
    label: 'Google Map',
    href: 'https://maps.app.goo.gl/QFwaBoKdzMRWus1z8?g_st=ipc',
    color: 'from-[#EA4335] to-[#FBBC04]',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(234,67,53,0.4)]',
  },
  {
    icon: Phone,
    label: '電話',
    href: 'tel:07090353485',
    color: 'from-[#FF006E] to-[#FF9A9E]',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(255,0,110,0.4)]',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ==',
    color: 'from-[#E1306C] to-[#833AB4]',
    hoverColor: 'hover:shadow-[0_0_20px_rgba(225,48,108,0.4)]',
  },
];

export default function FixedFooterButtons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
    >
      {buttons.map((btn, idx) => {
        const Icon = btn.icon;
        return (
          <motion.a
            key={idx}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${btn.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 ${btn.hoverColor} group`}
            title={btn.label}
          >
            <Icon className="w-6 h-6" />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 px-3 py-2 bg-[#1A1F3A] text-white text-sm font-semibold rounded-lg whitespace-nowrap pointer-events-none"
            >
              {btn.label}
            </motion.div>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
