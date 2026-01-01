import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

/**
 * Instagram Feed Component - Sakuma Design
 * 
 * Design Philosophy:
 * - Real-time social proof
 * - Community engagement showcase
 * - Dynamic, fresh content display
 * - Bold typography and visual impact
 */

interface InstagramPost {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Instagram Business Account ID for FLATUPGYM
        const businessAccountId = '17841401823689624';
        
        // Using Instagram Graph API (requires access token)
        // Note: In production, this should be called from a backend server
        // to keep the access token secure
        
        // For now, we'll use mock data to demonstrate the component
        // In production, replace with actual API call:
        // const response = await fetch(
        //   `https://graph.instagram.com/${businessAccountId}/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${accessToken}`
        // );
        
        // Mock Instagram posts for demonstration
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            caption: '🔥 今日のキックボクシングクラス！女性専用クラスで楽しく汗をかきました。初心者さんも大歓迎です！ #FLATUPGYM #キックボクシング #女性専用 #初心者向け',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/IMG_6883.JPG?updatedAt=1767137487657&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 42,
            comments_count: 8,
          },
          {
            id: '2',
            caption: '💪 オーナーあいかの産後ダイエット成功ストーリー！-25kg達成！女性オーナーだからこそできるサポートがあります。 #産後ダイエット #ダイエット成功 #女性オーナー',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/sango2.png?updatedAt=1756897194981&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 156,
            comments_count: 24,
          },
          {
            id: '3',
            caption: '✨ 子連れ参加OK！お子さんを見守りながらママもトレーニング。安心できる環境でママも自分時間を大切に。 #子連れOK #ママ向け #キックボクシング',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/IMG_6884.JPG?updatedAt=1767137483813&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 89,
            comments_count: 15,
          },
          {
            id: '4',
            caption: '🌟 新しいメンバーさん大歓迎！無料体験クラスで雰囲気を感じてください。LINEで簡単予約できます。 #無料体験 #初心者向け #成田市',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/2.jpg?updatedAt=1751535141684&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 67,
            comments_count: 12,
          },
          {
            id: '5',
            caption: '💝 会員さんの変身ストーリー！3ヶ月で-8kg達成！楽しく続けられるから結果が出ます。 #ダイエット #変身ストーリー #成功事例',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/1.jpg?updatedAt=1751535141785&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 123,
            comments_count: 31,
          },
          {
            id: '6',
            caption: '🎯 今月のキャンペーン！入会金半額！この機会にぜひ。女性が安心して通えるジムです。 #キャンペーン #入会金半額 #格闘技ジム',
            media_type: 'IMAGE',
            media_url: 'https://ik.imagekit.io/FLATUPGYM/3.jpg?updatedAt=1751535141772&tr=w-400,h-400,q-80,f-webp',
            permalink: 'https://www.instagram.com/flatup.narita',
            timestamp: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
            like_count: 98,
            comments_count: 18,
          },
        ];

        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Instagram投稿の読み込みに失敗しました');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const postVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

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
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-[#E1306C] to-[#833AB4] border-4 border-white rounded-none transform -rotate-2 shadow-xl">
            <p className="text-sm font-black text-white tracking-wider">
              📸 Instagram 最新投稿
            </p>
          </div>
          <h2 className="sakuma-title text-[#1A1F3A] mb-4">
            ジムの最新情報
          </h2>
          <p className="sakuma-body text-[#666666] max-w-2xl mx-auto mb-6">
            FLATUPGYM の最新情報をInstagramでチェック！
          </p>
          <a
            href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white font-black rounded-none border-4 border-[#1A1F3A] hover:shadow-lg transition-all duration-300"
          >
            🔗 Instagram をフォロー
          </a>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-[#FF006E] border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-[#666666] font-bold mt-4">投稿を読み込み中...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#FFE5E5] border-4 border-[#FF006E] p-6 rounded-none text-center"
          >
            <p className="text-[#FF006E] font-bold">{error}</p>
            <p className="text-[#666666] text-sm mt-2">
              <a
                href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#FF006E]"
              >
                Instagram を直接確認
              </a>
            </p>
          </motion.div>
        )}

        {/* Posts Grid */}
        {!loading && posts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                variants={postVariants}
                whileHover="hover"
                className={`group relative rounded-none border-6 border-[#1A1F3A] overflow-hidden shadow-lg transform ${
                  idx % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
              >
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#F5F5F5]">
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E1306C] font-bold"
                        title="いいね"
                      >
                        <Heart className="w-6 h-6 fill-current" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1F3A] font-bold"
                        title="コメント"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </motion.button>
                      <motion.a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1F3A] font-bold"
                        title="投稿を見る"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 bg-white">
                  <p className="text-sm text-[#666666] font-bold line-clamp-2 mb-3">
                    {post.caption}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex gap-4 text-xs text-[#999999] font-bold">
                    {post.like_count !== undefined && (
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-current text-[#E1306C]" />
                        {post.like_count}
                      </span>
                    )}
                    {post.comments_count !== undefined && (
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {post.comments_count}
                      </span>
                    )}
                  </div>

                  {/* Timestamp */}
                  <p className="text-xs text-[#CCCCCC] mt-2 font-bold">
                    {new Date(post.timestamp).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#666666] font-bold">投稿がありません</p>
            <a
              href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-[#1A1F3A] text-white font-bold rounded-none border-2 border-[#1A1F3A] hover:bg-white hover:text-[#1A1F3A] transition-all duration-300"
            >
              Instagram を確認
            </a>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E1306C] to-[#833AB4] p-8 rounded-none border-8 border-[#1A1F3A] shadow-2xl text-center transform rotate-1"
        >
          <h3 className="text-3xl font-black text-white mb-4">
            最新情報をチェック！
          </h3>
          <p className="text-white/90 font-bold mb-6 max-w-2xl mx-auto">
            Instagram では、毎日のクラス風景、会員さんの変身ストーリー、キャンペーン情報などを発信中！
          </p>
          <a
            href="https://www.instagram.com/flatup.narita?igsh=MXZsdWIzcHN0dTc1NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#E1306C] font-black rounded-none border-4 border-white hover:bg-[#1A1F3A] hover:text-white transition-all duration-300"
          >
            📸 Instagram をフォロー
          </a>
        </motion.div>
      </div>
    </section>
  );
}
