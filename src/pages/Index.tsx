import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Compass,
  Search,
  Lightbulb,
  TrendingUp,
  Rocket,
  Star,
} from "lucide-react";
import { submitEmail } from "@/api/email";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      await submitEmail(data.email);
      setSubmitted(true);
      setError(null);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("이메일 제출 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:pt-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl md:text-2xl text-gray-900">
              해커톤 호라이즌
            </span>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              <span className="text-indigo-600">가장 먼저</span> 새로운
              아이디어를 탐색해보세요!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              수많은 해커톤과 탄생한 아이디어와 프로젝트를 한 곳에서 쉽게
              찾아보세요.
              <br />
              흩어진 정보를 찾아 헤매는 시간을 절약하고, 영감을 쉽게 얻을 수
              있습니다.
            </p>

            <div
              id="signup-form"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                서비스 출시 알림 신청
              </h3>
              {submitted ? (
                <div className="text-center py-4">
                  <Star className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
                  <p className="text-green-600 font-medium">
                    알림 신청이 완료되었습니다!
                  </p>
                  <p className="text-gray-600 mt-2">
                    출시 소식을 가장 먼저 알려드릴게요.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="이메일을 입력하세요"
                              type="email"
                              required
                              className="focus:border-indigo-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      알림 신청하기
                    </Button>
                  </form>
                </Form>
              )}
              <p className="text-sm text-gray-500 mt-3">
                * 개인정보는 서비스 출시 알림에만 사용되며, 그 외 용도로
                활용되지 않습니다.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-gray-800">
                      아이디어 탐색기
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    {
                      title: "AI 기반 수화 번역기",
                      tag: "접근성",
                      year: "2023",
                    },
                    {
                      title: "블록체인 기반 기부 플랫폼",
                      tag: "소셜임팩트",
                      year: "2022",
                    },
                    {
                      title: "개인 맞춤형 학습 도우미",
                      tag: "에듀테크",
                      year: "2023",
                    },
                    {
                      title: "친환경 라스트마일 배송 솔루션",
                      tag: "그린테크",
                      year: "2023",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">
                          {item.title}
                        </h4>
                        <div className="flex items-center mt-1 space-x-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
                            {item.tag}
                          </span>
                          <span className="text-xs text-gray-500">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-100">
                        <span className="text-xs font-medium group-hover:text-indigo-600">
                          →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="bg-gray-50 py-20 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            흩어진 정보를 찾아{" "}
            <span className="text-indigo-600">헤매고 계신가요?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-indigo-600" />,
                title: "정보 접근성 문제",
                description:
                  "해커톤 정보는 여러 사이트에 흩어져 있어, 관련 프로젝트를 찾는 데 많은 시간이 소요됩니다.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-indigo-600" />,
                title: "트렌드 파악 어려움",
                description:
                  "어떤 아이디어가 주목받고 있는지, 어떤 기술이 떠오르고 있는지 한눈에 파악하기 어렵습니다.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-indigo-600" />,
                title: "영감 얻기의 한계",
                description:
                  "다양한 분야의 혁신적인 프로젝트를 쉽게 접할 수 없어 새로운 아이디어 발상에 한계가 있습니다.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
            중앙 집중식{" "}
            <span className="text-indigo-600">아이디어 검색 허브</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            해커톤 호라이즌은 과거 해커톤의 모든 프로젝트를 한곳에 모아,
            여러분이 필요한 정보를 쉽고 빠르게 찾을 수 있도록 도와드립니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 relative overflow-hidden">
              <div className="relative z-10">
                <Rocket className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  아이디어 영감의 보고
                </h3>
                <p className="text-gray-700 mb-6">
                  다양한 분야의 혁신적인 프로젝트를 탐색하며 새로운 아이디어
                  영감을 받아보세요. 인공지능, 환경, 교육 등 분야별 우수
                  프로젝트를 한눈에 확인할 수 있습니다.
                </p>
                <ul className="space-y-2">
                  {[
                    "카테고리별 프로젝트 분류",
                    "키워드 기반 검색",
                    "유사 프로젝트 추천",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-200 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                      </span>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-200 rounded-tl-full opacity-50"></div>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 relative overflow-hidden">
              <div className="relative z-10">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  트렌드 파악과 벤치마킹
                </h3>
                <p className="text-gray-700 mb-6">
                  최신 기술 트렌드와 혁신 패턴을 분석하여 제공합니다. 경쟁
                  프로젝트를 벤치마킹하고 자신의 아이디어를 더욱 발전시키는 데
                  활용하세요.
                </p>
                <ul className="space-y-2">
                  {[
                    "연도별 인기 기술 동향",
                    "수상작 분석 리포트",
                    "프로젝트 성공 요인 데이터",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                      </span>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-tl-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            혁신의 여정을 더 쉽게, 더 빠르게
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            더 이상 정보를 찾아 헤매지 마세요. 해커톤 호라이즌과 함께 혁신적인
            아이디어의 세계로 떠나보세요.
          </p>

          <Button
            className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold text-lg py-6 px-8 rounded-lg"
            onClick={() => {
              document
                .getElementById("signup-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            서비스 출시 알림 신청하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Compass className="h-6 w-6 text-indigo-400" />
              <span className="font-bold text-white text-xl">
                해커톤 호라이즌
              </span>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                서비스 소개
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-sm">
            <p>© 2025 해커톤 호라이즌. All rights reserved.</p>
            <p className="mt-2">
              혁신적인 아이디어를 찾는 모든 분들을 위한 플랫폼
            </p>
            <p className="mt-2">문의: devmuromi@gmail.com</p>
          </div>
        </div>
      </footer>

      {/* CSS animations added to index.css file instead */}
    </div>
  );
};

export default Index;
