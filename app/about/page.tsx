"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, MapPin, Trophy } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-thin tracking-tight text-black mb-8">会社概要</h1>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          {/* Company Overview */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-black mb-8 text-center">Office 306について</h2>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  Office 306は、革新的なビジネスソリューションを提供する企業として2015年に設立されました。
                  私たちは、お客様のビジネス成長を支援し、デジタル変革を推進することを使命としています。
                </p>
                <p>
                  高品質なサービスと専門的な知識を組み合わせ、お客様の課題解決に取り組んでいます。
                  私たちのチームは、常に最新の技術とトレンドを追求し、最適なソリューションを提供いたします。
                </p>
              </div>
            </div>
          </section>

          {/* Company Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Calendar className="h-10 w-10 text-black mx-auto mb-4" />
                <CardTitle className="text-black font-light">設立年</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center text-lg font-light">2015年4月1日</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Users className="h-10 w-10 text-black mx-auto mb-4" />
                <CardTitle className="text-black font-light">従業員数</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center text-lg font-light">
                  45名（2024年現在）
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center">
                <MapPin className="h-10 w-10 text-black mx-auto mb-4" />
                <CardTitle className="text-black font-light">本社所在地</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center text-lg font-light">
                  東京都渋谷区恵比寿3-6-1
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Trophy className="h-10 w-10 text-black mx-auto mb-4" />
                <CardTitle className="text-black font-light">取引実績</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center text-lg font-light">
                  200社以上の企業様
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Mission & Vision */}
          <section className="text-center">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-light text-black mb-6">ミッション</h3>
                <div className="w-12 h-px bg-black mx-auto mb-6"></div>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  革新的な技術とサービスを通じて、お客様のビジネス成長を支援し、社会の発展に貢献することです。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-black mb-6">ビジョン</h3>
                <div className="w-12 h-px bg-black mx-auto mb-6"></div>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  デジタル変革のリーディングカンパニーとして、お客様と共に未来を創造していくことを目指しています。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}
