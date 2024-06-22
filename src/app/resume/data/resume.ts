type DoList = {
  do: string;
  content: string[];
  url?: string;
}

type Content = {
  title: string;
  description: string;
  doList: DoList[];
  tech: string[];
  techHighlight: string[];
  link: string | null;
};

type Experience = {
  experienceTitle: string;
  position: string;
  period: string;
  content: Content[];
};

type OtherExperience = {
  name: string;
  content: { title: string; url?: string }[];
};

type Resume = {
  name: string;
  job: string;
  contact: string;
  about: string[];
  experience: Experience[];
  otherExperience?: OtherExperience[];
};

const resume: Resume = {
  name: "김희태",
  job: "Frontend Engineer",
  contact: "fkdlxmfkdl@gmail.com",
  about: [
    "오랫동안 내것으로 만들기 위해 기록하고 문서화하는 것을 좋아합니다.\n이를 통해 이전 회사에서 12명의 개발자 분들에게 개발 가이드 문서를 제공한 경험이 있으며,\n개인 블로그와 기술 블로그를 통해 지식과 문제 해결 과정을 기록하고 있습니다.",
    "기계 보다는 사람이 이해할 수 있는 코드를 작성하기 위해 가독성 향상과 최적화에 관심이 많으며,\n알고리즘 800제를 풀면서 지속적으로 코드 작성의 기본기를 탄탄히 다지고 있습니다. (백준 플래티넘5)",
    "개발 지식을 공유하고 함께 성장하는 문화를 지향하며, GitHub Repo의 레거시 코드를 리팩토링 하여 코드의 부채를 줄이고,\n코드 한 줄 한 줄에 책임을 다하는 개발자로 성장하고 있습니다."
  ],
  experience: [
    {
      experienceTitle: "개인프로젝트",
      position: "Frontend Engineer",
      period: "22.04 ~ 24.05",
      content: [
        {
          title: "BBBick",
          description: "온라인 북(Book) 커머스 플랫폼 입니다.",
          doList: [
            {
              do: "유연한 상품 결제 과정을 위한 결제 퍼널 도입",
              content: [
                "[문제] 결제 과정에 요구사항 변동이 생겨도 유연한 수정이 가능한 방법 필요",
                "Toss의 퍼널 패턴 개념을 활용하여 결제 프로세스 구축",
                "결제 과정에 추가 변동이 생겨도 유연한 결제 프로세스로 유지보수가 용이해짐"
              ],
              url: "https://dev.to/hxxtae/tossyi-peoneolfunnel-paeteon-jeogyonghaebogi-2n7c"
            },
            {
              do: "상품 조회 시 렌더링 성능 개선",
              content: [
                "[문제] 무한 스크롤로 인한 상품 목록 로드 시 마운트된 상품 리렌더링 문제 발견",
                "React Dev Tools를 활용하여 리렌더링 병목구간 확인",
                "react 메모이제이션 기법을 사용하여 리렌더링 발생하는 컴포넌트 문제 해결",
                "컴포넌트 렌더링 속도 50% 개선 / 22.4ms → 11.6ms",
              ],
              url: "https://dev.to/hxxtae/react-dev-toolsyi-profilerreul-hwalyonghan-rendeoring-seongneung-gaeseon-h1g"
            },
            {
              do: "Tree Shaking 및 Code Spliting 으로 번들 사이즈 개선",
              content: [
                "[문제] 프로젝트 빌드 시간이 오래 거리며, 번들 사이즈가 큰 문제 발견",
                "Lighthouse Treemap을 통해 번들링된 큰 사이즈 라이브러리 확인",
                "트리 쉐이킹 기법을 통해 필요한 불필요한 모듈 제거",
                "코드 스플리팅 기법을 통해 큰 라이브러리 청크 파일 사이즈 최적화",
                "빌드 크기 73% 개선 / 1,074KB → 289KB",
                "빌드 시간 94% 개선 / 1m 46s → 5.57s"
              ],
              url: "https://dev.to/hxxtae/lighthousereul-hwalyonghan-tree-shaking-8ie"
            },
            {
              do: "사용자 경험 최적화를 위한 초기 로딩 성능 개선",
              content: [
                "[문제] 사이트 접속 시 최초 렌더링 까지 시간이 오래 걸리는 문제 발견",
                "Lighthouse을 통해 LCP 시간 단축 필요성 및 개선 항목 확인",
                "이미지 최적화, 라우터 페이지 코드 분할 및 지연 로딩으로 LCP 속도 개선",
                "LCP 29% 개선 / 12.4s → 8.7s / 프로덕션 : 1.4s"
              ],
              url: "https://dev.to/hxxtae/lighthousereul-hwalyonghayeo-lcp-jeomsu-gaeseonhagi-3o3i"
            }
          ],
          tech: ["React", "TypeScript", "Vite", "zustand", "React-Query", "styled-components", "mui"],
          techHighlight: ["React", "TypeScript", "Vite", "zustand", "React-Query"],
          link: "https://github.com/hxxtae/bbbick"
        },
        {
          title: "Welaundry",
          description: "세탁소 전용 포스(POS) 웹 애플리케이션 입니다.",
          doList: [
            {
              do: "사용자 인증 토큰 보안 문제점 개선",
              content: [
                "[문제] 쿠키나 localStorage로 사용자 인증 토큰 저장 시 XSS 공격 보안 문제 발견",
                "window.localStorage 와 같이 스트립트로 쉽게 접근할 수 있는 문제 확인",
                "세션을 통한 인증 방법은 서버에 리소스 부담을 주기 때문에 JWT을 사용하여 보안 쿠키에 저장",
                "더 이상 스크립트를 통한 인증 토큰에 접근 불가",
              ]
            },
            {
              do: "CSRF 공격을 고려하여 취약한 보안을 개선",
              content: [
                "[문제] 게시 글 수정 요청 API가 다른 Origin에서도 호출이 가능한 문제 발견",
                "서버에서 승인된 Origin으로만 API 요청이 가능하도록 CORS Origin 설정",
                "CORS Credentials 방식으로 보안 토큰을 함께 서버로 전송하여 무단 요청 방지",
                "지정된 Origin 클라이언트에서 인증 헤더 토큰을 가진 경우에만 API 요청 가능"
              ]
            },
            {
              do: "루트 컴포넌트 생성을 통한 z-index 복잡성 개선",
              content: [
                "[문제] 로딩 컴포넌트 마운트 시 레이아웃이 요소 뒤로 겹치는 문제 발견",
                "z-index의 값을 높여 주는 방법으로는 코드의 복잡성과 유지보수성이 저하됨",
                "React Portal을 사용하여 새로운 루트 노드에 마운트하여 레아아웃 복잡성 제거",
              ]
            },
            {
              do: "CSR 최적화를 위한 컴포넌트 로드 시간 개선",
              content: [
                "[문제] 포스 최초 접속 시 렌더링 시간이 오래 걸리는 문제 발견",
                "최초 로드 시 모든 페이지 컴포넌트를 다운로드하여 blocking 시간이 길어짐 확인",
                "React 18의 lazy,  Suspense를 통해 라우터 기준 코드 분할하여 렌더링 시간 개선",
                "리소스 Finish Time 31% 개선 / 4.12s → 2.82s",
                "Lighthouse Performance 점수 43% 개선 / 60 → 86"
              ]
            },
          ],
          tech: ["React", "TypeScript", "Recoil", "React-Query", "Express", "MongoDB", "HTML", "CSS", "styled-components"],
          techHighlight: ["React", "TypeScript", "Recoil", "React-Query"],
          link: "https://github.com/hxxtae/we-laundry-client"
        },
        {
          title: "Nomflix",
          description: "framer-motion 라이브러리를 활용한 Netflix Clone 웹 사이트 입니다.",
          doList: [
            {
              do: "Suspense사용 시 비동기 직렬 요청 개선",
              content: [
                "[문제] 영화 데이터 조회 비동기 요청이 직렬로 처리되는 문제 발견",
                "react query + Suspense 사용 시 직렬로 water fall 호출이 진행됨을 Network 탭에서 확인",
                "비동기 요청을 병렬로 처리하기 위해 따로 자식 컴포넌트로 분리하여 API 요청",
                "useQueries를 통해 Suspense 병렬 처리가 가능하도록 개선 (react-query ^4.5)",
              ]
            },
            {
              do: "최초 웹 페이지 접속 시 빈 화면이 보여지는 시간 단축",
              content: [
                "[문제] 사용자가 콘텐츠를 보기 까지 흰 화면이 오랫동안 보여지는 문제 발견",
                "Chrome Network 탭에서 모든 페이지 리소스가 다운로드 진행됨을 확인",
                "코드 분할을 통해 Dynamic import하여 필요한 페이지의 컴포넌트 및 파일 다운로드 진행",
                "Lighthouse Performance 점수 93 / LCP 시간 1.4s"
              ]
            },
            {
              do: "수많은 영화 목록 중복 리렌더링 문제 개선",
              content: [
                "[문제] 마운트된 영화 목록 컴포넌트가 목록 개수만큼 리렌더링 되는 문제 발견",
                "컴포넌트에 선언된 console.count 를 통해 불필요한 리렌더링이 일어나는 컴포넌트 확인",
                "고차 컴포넌트 react memo를 사용하여 Virtual DOM에 이전 DOM을 메모이제이션",
                "메모리는 더 사용하지만 렌더링 성능은 개선",
                "컴포넌트 렌더링 속도 62% 개선 / 13.2ms → 4.9ms"
              ]
            },
          ],
          tech: ["React", "TypeScript", "Framer-Motion", "styled-components"],
          techHighlight: ["React", "TypeScript", "Framer-Motion"],
          link: "https://github.com/hxxtae/nomflix"
        },
      ]
    },
    {
      experienceTitle: "WITH INFO",
      position: "Fullstack Engineer",
      period: "19.05 ~ 20.11",
      content: [
        {
          title: "신한은행 부동산 담보 운영체계 개선",
          description: "여신 심사 중 부동산 담보 체계의 종합적인 화면을 담당하여 개발하였습니다.",
          doList: [
            {
              do: "",
              content: [
                "100만건 이상 대량부동산 데이터를 50개의 고유번호로 필터링",
                "영업점 화면에서 10초 이상 소요되는 중복 데이터 확인 작업을 6초 이내로 개선"
              ]
            },
          ],
          tech: ["C", "SQL", "Unix", "IDevTool"],
          techHighlight: ["C", "SQL"],
          link: ""
        },
        {
          title: "국민은행 기업여신자동심사",
          description: "기업 여신 프로세스 중 관리자 화면 개발 및 선도 개발 진행하였습니다.",
          doList: [
            {
              do: "",
              content: [
                "차세대 프로젝트 시작을 준비하기 위한 선도개발을 진행 및 I/O 테스트 및 가이드 문서 제공",
                "은행 내부 인터페이스를 통한 파일 암/복호화 모듈과 공개키 협의"
              ]
            },
          ],
          tech: ["COBOL", "JavaScript", "SQL", "Unix"],
          techHighlight: ["COBOL", "JavaScript", "SQL"],
          link: ""
        }
      ]
    }
  ],
  otherExperience: [
    {
      name: "알고리즘",
      content: [
        {
          title: "solved.ac",
          url: "https://solved.ac/profile/fkdlxmfkdl1"
        },
        {
          title: "atcoder",
          url: "https://atcoder.jp/users/hxxtae"
        },
        {
          title: "algorithm 문제 풀이 블로그 작성",
          url: "https://algorithms-blog.vercel.app"
        },
        {
          title: "프로그래머스 PCCP 테스트 3회",
          url: "",
        }
      ]
    },
    {
      name: "자격증",
      content: [
        {
          title: "정보처리기사",
          url: ""
        }
      ]
    },
    {
      name: "Others",
      content: [
        {
          title: "항해99 취업 리부트 코스 (2024.03 ~ 2024.06)",
          url: ""
        }
      ]
    },
  ]
}

export default resume;