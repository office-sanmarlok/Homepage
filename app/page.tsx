"use client"
import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function HomePage() {
  // レイヤー1: ホームページロゴ
  const logoLayer = {
    src: "/306-logo-homepage.png",
    width: 1200,
    height: 1000,
  }

  // レイヤー2: ビネット効果
  const vignetteLayer = {
    opacity: 0.6, // 透明度 (0-1)
    size: '100%', // グラデーションのサイズ
    color: 'rgba(0, 0, 0, 0.8)', // ビネットの色
  }

  // レイヤー3: アニメーションフィルムグレイン（最上層）
  const filmGrainLayer = {
    opacity: 1, // グレイン効果の透明度 (0-1)
    animationDuration: 1, // アニメーション周期（秒）
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png', // ノイズテクスチャ画像
  }

  return (
    <PageLayout>
      <div className="relative min-h-screen overflow-hidden">
        {/* レイヤー1: ホームページロゴ */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="relative max-w-[90vw]" style={{ transform: 'scale(min(1, 100vw / 900))' }}>
            <Image
              src={logoLayer.src}
              alt="306 Homepage Logo"
              width={logoLayer.width}
              height={logoLayer.height}
            />
          </div>
        </div>
        
        {/* レイヤー2: ビネット効果 */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, ${vignetteLayer.color} ${vignetteLayer.size})`,
            opacity: vignetteLayer.opacity,
          }}
        ></div>
        
        {/* レイヤー3: アニメーションフィルムグレイン（最上層） */}
        <div className="film-grain-container"></div>
      </div>
    </PageLayout>
  )
}
