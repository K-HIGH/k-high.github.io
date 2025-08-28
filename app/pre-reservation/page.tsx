"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowLeft, Gift, Star, Clock, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { toast } from "@/hooks/use-toast"

export default function PreReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    preferredFeatures: [] as string[],
    additionalNotes: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const preferredFeaturesOptions = [
    "길찾기",
    "대중교통 정보",
    "안전 알림",
    "응급 상황 대응",
    "가족과의 연락",
    "건강 관리"
  ]

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      preferredFeatures: prev.preferredFeatures.includes(feature)
        ? prev.preferredFeatures.filter(f => f !== feature)
        : [...prev.preferredFeatures, feature]
    }))
  }

  const handlePreReservation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const supabase = createClient()

      // 필수 필드 검증
      if (!formData.name || !formData.phone) {
        throw new Error("이름과 연락처는 필수 입력 항목입니다.")
      }

      // 전화번호 형식 검증
      const phoneRegex = /^[0-9-]+$/
      if (!phoneRegex.test(formData.phone)) {
        throw new Error("올바른 전화번호 형식을 입력해주세요.")
      }

      // 이메일 형식 검증 (선택사항이지만 입력된 경우)
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("올바른 이메일 형식을 입력해주세요.")
      }

      // 나이 검증
      const age = formData.age ? parseInt(formData.age) : null
      if (age && (age < 1 || age > 120)) {
        throw new Error("올바른 나이를 입력해주세요.")
      }

      const { data, error: insertError } = await supabase
        .from('pre_reservations')
        .insert([{
          name: formData.name,
          email: formData.email || null,
          phone: formData.phone,
          age: age,
          preferred_features: formData.preferredFeatures.length > 0 ? formData.preferredFeatures : null,
          additional_notes: formData.additionalNotes || null
        }])
        .select()

      if (insertError) {
        throw new Error(insertError.message)
      }

      setIsSubmitted(true)
      toast({
        title: "사전 예약 완료!",
        description: "돋보길 출시 소식을 가장 먼저 알려드리겠습니다.",
      })

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "예약 처리 중 오류가 발생했습니다."
      setError(errorMessage)
      toast({
        title: "오류 발생",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-700">{error}</span>
                  </div>
                )}

                <form onSubmit={handlePreReservation} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg font-medium text-gray-900">
                      성함 *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
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
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
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
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-14 text-lg border-2 border-gray-300 focus:border-yellow-400"
                      placeholder="example@email.com (선택사항)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-lg font-medium text-gray-900">
                      나이
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="h-14 text-lg border-2 border-gray-300 focus:border-yellow-400"
                      placeholder="나이 (선택사항)"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-lg font-medium text-gray-900">
                      관심 있는 기능 (선택사항)
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {preferredFeaturesOptions.map((feature) => (
                        <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.preferredFeatures.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes" className="text-lg font-medium text-gray-900">
                      추가 요청사항
                    </Label>
                    <textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      className="w-full h-24 p-3 text-lg border-2 border-gray-300 rounded-lg focus:border-yellow-400 resize-none"
                      placeholder="추가로 요청하시는 사항이 있으시면 적어주세요 (선택사항)"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-16 text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-2 border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "처리 중..." : "사전 예약하기"}
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
