"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-thin tracking-tight text-black mb-8">お問い合わせ</h1>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
              <br />
              専門スタッフが迅速に対応いたします。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-100 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black font-light text-xl">お問い合わせフォーム</CardTitle>
                  <CardDescription className="text-gray-600">
                    下記フォームにご記入の上、送信ボタンを押してください。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">姓 *</Label>
                      <Input id="lastName" placeholder="田中" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">名 *</Label>
                      <Input id="firstName" placeholder="太郎" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">会社名</Label>
                    <Input id="company" placeholder="株式会社サンプル" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input id="email" type="email" placeholder="example@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input id="phone" type="tel" placeholder="03-1234-5678" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input id="subject" placeholder="お問い合わせの件名" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      placeholder="お問い合わせの詳細をご記入ください"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                    送信する
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gray-100 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black font-light">連絡先情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">電話番号</p>
                      <p className="text-gray-600">03-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">メールアドレス</p>
                      <p className="text-gray-600">info@office306.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">住所</p>
                      <p className="text-gray-600">
                        〒150-0013
                        <br />
                        東京都渋谷区恵比寿3-6-1
                        <br />
                        恵比寿ガーデンプレイス306号室
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">営業時間</p>
                      <p className="text-gray-600">
                        平日 9:00 - 18:00
                        <br />
                        土日祝日は休業
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-100 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black font-light">アクセス</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>JR恵比寿駅</strong> 東口より徒歩5分
                    </p>
                    <p>
                      <strong>東京メトロ日比谷線</strong> 恵比寿駅より徒歩7分
                    </p>
                    <p className="pt-2 text-xs">恵比寿ガーデンプレイス内にございます。 1階受付にてお声がけください。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
