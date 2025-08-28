"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Shield, Phone, Users, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-screen">
          <img
            src="/elderly-person-using-smartphone-for-navigation-wit.png"
            alt="돋보길 앱을 사용하는 어르신"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="mb-6 text-6xl font-bold md:text-7xl drop-shadow-lg">돋보길</h1>
              <p className="mb-8 text-2xl leading-relaxed md:text-3xl drop-shadow-lg">
                어르신을 위한 안전하고 편리한
                <br />
                길찾기 도우미 앱
              </p>
              <Link href="/pre-reservation">
                <Button className="h-16 px-12 text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-2 border-yellow-500 shadow-lg">
                  사전 예약하기
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 md:text-5xl">돋보길과 함께하는 일상</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img
                src="/elderly-person-confidently-walking-in-park-using-s.png"
                alt="공원에서 돋보길 앱으로 길찾기하는 어르신"
                className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전한 산책</h3>
              <p className="text-gray-600">공원이나 동네를 안전하게 산책하세요</p>
            </div>
            <div className="text-center">
              <img
                src="/elderly-person-at-bus-stop-checking-smartphone-app.png"
                alt="버스정류장에서 돋보길 앱을 확인하는 어르신"
                className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">대중교통 이용</h3>
              <p className="text-gray-600">버스와 지하철을 쉽게 이용하세요</p>
            </div>
            <div className="text-center">
              <img
                src="/elderly-person-with-family-members-looking-at-smar.png"
                alt="가족과 함께 돋보길 앱으로 위치를 공유하는 어르신"
                className="w-full h-64 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">가족과 소통</h3>
              <p className="text-gray-600">가족들과 위치를 공유하고 소통하세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-yellow-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 md:text-5xl">왜 돋보길인가요?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">쉬운 길찾기</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  큰 글씨와 명확한 안내로
                  <br />
                  누구나 쉽게 길을 찾을 수 있어요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">안전 보장</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  응급상황 시 자동으로
                  <br />
                  가족에게 알림을 보내드려요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">24시간 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  언제든지 도움이 필요하면
                  <br />
                  전화 한 통으로 해결해요
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-yellow-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">가족 연결</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                  가족들과 위치를 공유하고
                  <br />
                  안전하게 소통할 수 있어요
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">지금 바로 시작하세요!</h2>
          <p className="mb-12 text-xl text-gray-700 leading-relaxed">
            돋보길과 함께 더 안전하고 편리한 일상을 만들어보세요.
            <br />
            사전 예약하시면 특별 혜택을 드립니다.
          </p>
          <Link href="/pre-reservation">
            <Button className="h-16 px-12 text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-2 border-yellow-500">
              무료 사전 예약하기
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
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
