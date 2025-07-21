"use client"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Target, Award } from "lucide-react"

export default function HomePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center py-24 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-7xl font-thin tracking-tight text-black mb-8 leading-tight">
                Office <span className="font-bold">306</span>
              </h1>
              <div className="w-24 h-px bg-black mx-auto mb-8"></div>
            </div>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              革新的なソリューションで、あなたのビジネスを次のレベルへ。
              <br />
              私たちは最高品質のサービスを提供し、お客様の成功をサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 font-medium">
                サービスを見る
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-4 border-black text-black hover:bg-black hover:text-white font-medium bg-transparent"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-black mb-6">なぜOffice 306を選ぶのか</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">私たちの強みと特徴をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Building2 className="h-12 w-12 text-black mx-auto mb-6" />
                <CardTitle className="text-black font-light text-xl">確かな実績</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center font-light leading-relaxed">
                  多くの企業様との取引実績があり、信頼できるパートナーとして選ばれています。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Users className="h-12 w-12 text-black mx-auto mb-6" />
                <CardTitle className="text-black font-light text-xl">専門チーム</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center font-light leading-relaxed">
                  経験豊富な専門スタッフが、お客様のニーズに合わせたソリューションを提供します。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Target className="h-12 w-12 text-black mx-auto mb-6" />
                <CardTitle className="text-black font-light text-xl">カスタマイズ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center font-light leading-relaxed">
                  お客様の要求に応じて、柔軟にカスタマイズされたサービスを提供いたします。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200 hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Award className="h-12 w-12 text-black mx-auto mb-6" />
                <CardTitle className="text-black font-light text-xl">品質保証</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center font-light leading-relaxed">
                  厳格な品質管理のもと、最高水準のサービスをお約束いたします。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light mb-8 text-black">お気軽にお問い合わせください</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl mb-12 text-gray-700 font-light leading-relaxed">
              ご質問やご相談がございましたら、いつでもお気軽にご連絡ください。
              <br />
              専門スタッフが丁寧に対応いたします。
            </p>
            <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 font-medium">
              今すぐ相談する
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
