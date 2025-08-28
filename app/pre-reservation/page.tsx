"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowLeft, Gift, Star, Clock } from "lucide-react"

export default function PreReservationPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePreReservation = (e: React.FormEvent) => {
    e.preventDefault()
    // Since Supabase is not connected, we'll just show a success message
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="text-lg">돌아가기</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">돋보길 사전 예약</h1>
          <p className="mb-8 text-xl text-gray-700 leading-relaxed md:text-2xl">
            출시 소식을 가장 먼저 받아보시고
            <br />
            특별 혜택도 함께 받으세요!
          </p>
          <div className="mb-12">
            <img
              src="/elderly-person-excitedly-looking-at-smartphone-sho.png"
              alt="돋보길 사전 예약 완료 화면을 보는 어르신"
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">사전 예약 특별 혜택</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Gift className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">무료 프리미엄</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  출시 후 3개월간
                  <br />
                  프리미엄 기능을 무료로 이용하세요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">우선 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  고객 지원팀의
                  <br />
                  우선 상담 서비스를 받으세요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-yellow-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">조기 접근</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  정식 출시 전
                  <br />
                  베타 버전을 먼저 체험하세요
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-reservation Form */}
      <section className="px-4 py-16 bg-yellow-50">
        <div className="mx-auto max-w-2xl">
          {!isSubmitted ? (
            <Card className="border-2 border-yellow-300 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">무료 사전 예약</CardTitle>
                <CardDescription className="text-lg text-gray-600">간단한 정보만 입력해주세요</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePreReservation} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-medium text-gray-900">
                      성함 *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-14 text-lg border-2 border-gray-300 focus:border-yellow-400"
                      placeholder="홍길동"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-lg font-medium text-gray-900">
                      연락처 *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="h-14 text-lg border-2 border-gray-300 focus:border-yellow-400"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg font-medium text-gray-900">
                      이메일
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 text-lg border-2 border-gray-300 focus:border-yellow-400"
                      placeholder="example@email.com (선택사항)"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-16 text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-2 border-yellow-500"
                  >
                    사전 예약하기
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-green-300 bg-green-50 shadow-xl">
              <CardContent className="text-center py-12">
                <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-600" />
                <h3 className="mb-4 text-3xl font-bold text-green-800">예약이 완료되었습니다!</h3>
                <p className="text-xl text-green-700 leading-relaxed mb-8">
                  돋보길 출시 소식을 가장 먼저 알려드리겠습니다.
                  <br />
                  특별 혜택도 함께 준비해두었어요!
                </p>
                <Link href="/">
                  <Button className="h-14 px-8 text-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-2 border-yellow-500">
                    홈으로 돌아가기
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-4 text-3xl font-bold">돋보길</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            어르신의 안전하고 편리한 일상을 위한
            <br />
            스마트 길찾기 솔루션
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">© 2024 돋보길. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
