"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, BarChart3, Shield, Headphones } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Webシステム開発",
      description: "お客様のニーズに合わせたカスタムWebアプリケーションの開発を行います。",
      features: ["レスポンシブデザイン", "データベース設計", "API開発", "セキュリティ対策"],
    },
    {
      icon: Smartphone,
      title: "モバイルアプリ開発",
      description: "iOS・Android対応のモバイルアプリケーションを開発いたします。",
      features: ["ネイティブアプリ", "クロスプラットフォーム", "UI/UXデザイン", "アプリストア申請"],
    },
    {
      icon: Cloud,
      title: "クラウドソリューション",
      description: "AWS、Azure、GCPを活用したクラウドインフラの構築・運用を支援します。",
      features: ["インフラ設計", "マイグレーション", "運用監視", "コスト最適化"],
    },
    {
      icon: BarChart3,
      title: "データ分析・BI",
      description: "ビッグデータの分析とビジネスインテリジェンスツールの導入を行います。",
      features: ["データ可視化", "予測分析", "レポート作成", "ダッシュボード構築"],
    },
    {
      icon: Shield,
      title: "セキュリティ対策",
      description: "情報セキュリティの強化とリスク管理をトータルサポートします。",
      features: ["脆弱性診断", "セキュリティ監査", "従業員教育", "インシデント対応"],
    },
    {
      icon: Headphones,
      title: "ITサポート",
      description: "システム運用・保守からヘルプデスクまで包括的なサポートを提供します。",
      features: ["24時間監視", "ヘルプデスク", "定期メンテナンス", "障害対応"],
    },
  ]

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-thin tracking-tight text-black mb-8">サービス</h1>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Office 306では、お客様のビジネス成長を支援する幅広いITサービスを提供しています。
              <br />
              専門チームが最適なソリューションをご提案いたします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gray-100 border-gray-200 hover:bg-gray-50">
                  <CardHeader>
                    <Icon className={`h-12 w-12 text-black mb-4`} />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <section className="bg-gray-100 rounded-lg shadow-sm p-8 text-center border border-gray-200">
            <h2 className="text-3xl font-semibold text-black mb-4">お客様に最適なソリューションをご提案</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              どのサービスがお客様のニーズに最適かわからない場合でも、
              お気軽にご相談ください。専門スタッフが丁寧にヒアリングし、 最適なソリューションをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 bg-blue-500 hover:bg-blue-600">
                無料相談を申し込む
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                資料をダウンロード
              </Button>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}
