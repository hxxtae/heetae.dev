type DoList = {
  do: string;
  content: string[];
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
  job: "Front Engineer",
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
          title: "welaundry",
          description: "세탁소 전용 포스(POS) 웹 애플리케이션 입니다.",
          doList: [
            {
              do: "고유한 포스 데이터에만 접근이 가능하도록 구현",
              content: [
                "[1단계] 웹 포스의 경우 사용자 인증 토큰 필요",
                "localStorage로 사용자 인증 및 사용자 데이터 구분",
                "[2단계] localStorage에 저장 시 XSS 공격 보안 문제 발견",
                "쿠키와 인증 토큰을 활용한 방법으로 문제 해결 시도",
                "Cookie(http-only), JWT 로 XSS 보안 문제 해결 및 인증 관리 개선",
                "인증된 정보가 브라우저에 남아있는 경우, 유효 기간 설정 가능"
              ]
            },
            {
              do: "로딩 컴포넌트의 재사용성을 효과적으로 구현",
              content: [
                "로딩 컴포넌트가 다른 컴포넌트 안에서 복잡한 Layout 문제",
                "React Portal을 사용하여 로딩 컴포넌트 렌더링 시 z-index에 따른 Layout의 복잡성을 낮춤",
                "독립적인 컴포넌트로 재사용성을 높임"
              ]
            },
            {
              do: "최초 로딩 이미지 렌더링 시간 개선",
              content: [
                "이미지 렌더링 시간이 길어지는 문제 발견",
                "이미지 렌더링 시점에서 다운로드를 진행하지 않고, 사전에 이미지 파일을 preload하여 미리 다운로드를 진행",
                "이미지 사이즈 최적화 및 이미지 inline css 크기 할당",
                "로그인 화면에서 이미지 렌더링 시간 단축 및 LCP 개선 (Performance 점수 : 90 → 96)"
              ]
            },
            {
              do: "CSRF 공격을 고려하여 취약한 보안을 개선",
              content: [
                "수정 요청 API가 외부에서도 호출되는 문제 발견",
                "서버에서 승인된 Origin으로 요청 시에만 API 요청이 가능하도록 처리",
                "CORS의 Credentials + 요청 헤더에 Security Token 사용"
              ]
            },
            {
              do: "포스 화면이 렌더링되는 시간 개선",
              content: [
                "포스 최초 렌더링 시간이 길어지는 문제 발견",
                "React 18의 lazy 로딩과  Suspense를 통해 router 코드 분할을 수행",
                "포스 접속 시 최초 렌더링 시간 단축 및 LCP 개선 (Performance 점수 : 60 → 73)"
              ]
            },
          ],
          tech: ["React", "TypeScript", "Recoil", "React-Query", "Express", "MongoDB", "HTML", "CSS", "styled-components"],
          techHighlight: ["React", "TypeScript", "Recoil", "React-Query"],
          link: "https://github.com/hxxtae/we-laundry-client"
        },
        {
          title: "nomflix",
          description: "framer-motion 라이브러리를 활용한 Netflix Clone 웹 사이트 입니다.",
          doList: [
            {
              do: "모바일 앱에서 사용되는 Splash 기능 구현",
              content: [
                "HOC 개념을 활용",
                "[1단계] 특별한 사용자 경험을 높이고, 짧은 LCP를 위해 도입",
                "LCP : 1.6s, FCP : 0.9s",
                "[2단계] 새로 고침으로 Splash가 반복되는 문제 발견",
                "SessionStorage를 사용하여 해결"
              ]
            },
            {
              do: "영화 데이터 비동기 요청 시 시간을 단축",
              content: [
                "영화 목록 비동기 요청이 직렬로 처리되는 문제 발견",
                "부모 컴포넌트와  자식 컴포넌트로 나누고, 자식 컴포넌트에서 API 요청",
                "직렬이 아닌 병렬로 비동기 요청됨",
                "다수 컨텐츠(영화, 시리즈) 비동기 요청 시간 단축"
              ]
            },
            {
              do: "최초 웹 페이지 접속 시 렌더링 시간을 단축",
              content: [
                "사용자가 컨텐츠를 보기 위한 시간이 길어지는 문제 발견",
                "React의 lazy 로딩과 Suspense 를 통해 코드 분할 진행 → Movie와 Series 페이지 코드 분할 진행",
                "현재 렌더링되는 컴포넌트만 다운로드 진행되어 LCP 개선 (Performance 점수 : 93)",
              ]
            },
            {
              do: "수많은 영화 목록을 리렌더링하는 시간을 단축",
              content: [
                "동일한 페이지 리렌더링 문제를 개선해야 하는 문제 발견",
                "한번 렌더링된 영화목록을 React memo를 통해 컴포넌트 메모이제이션",
                "메모리는 더 사용하지만 불필요한 렌더링으로 인한 리소스를 줄임"
              ]
            }
          ],
          tech: ["React", "TypeScript", "Framer-Motion", "styled-components"],
          techHighlight: ["React", "TypeScript", "Framer-Motion"],
          link: "https://github.com/hxxtae/nomflix"
        },
        {
          title: "BBBick",
          description: "온라인 북(Book) 커머스 플랫폼 입니다.",
          doList: [
            {
              do: "유연한 상품 결제 과정을 위한 결제 퍼널 도입",
              content: [
                "결제 과정에 요구사항 변동이 생겨도 유연한 컴포넌트 필요",
                "Toss의 퍼널 개념을 인용하여 결제 과정에 반영 (useFunnel 구현)",
                "결제 과정 사이에 변동이 생겨도 유연한 결제 프로세스 변동 가능"
              ]
            },
            {
              do: "Firebase를 사용하여 인증, CRUD 및 스토리지 기능 활용",
              content: [
                "ServerLess 상태의 클라이언트 개발을 위한 서버 필요",
                "Firebase Firestore을 통해 커머스 DB 스키마 생성 및 CRUD 구현",
                "Authentication 을 통해 구매자 및 판매자 생성",
                "Storage을 통한 상품 이미지 업로드 및 상품 이미지 로드 기능 구현"
              ]
            },
            {
              do: "중복된 상품 조회 시 렌더링 성능 개선",
              content: [
                "무한 스크롤로 인한 상품 목록 로드 시 중복된 상품 리렌더링 발생",
                "React Dev Tools를 활용한 중복 컴포넌트 확인",
                "react.memo를 사용하여 리렌더링 발생하는 컴포넌트 메모이제이션",
                "Before : 자식 컴포넌트 100회 렌더링 시 100회 전체 리렌더링",
                "After : 자식 컴포넌트 단 1회만 렌더링"
              ]
            },
            {
              do: "Tree Shaking 및 Code Spliting 으로 번들 사이즈 개선",
              content: [
                "초기 로드 및 빌드 시간이 오래 걸리는 문제 발생",
                "무거운 라이브러리의 낭비되는 모듈 제거 및 경량화된 라이브러리 사용",
                "코드 분할을 통해 사용자가 필요한 파일만 다운로드 진행",
                "결과적으로 빌드 사이즈 경량화 및 로드 성능 개선",
                "빌드 크기 : 1,074KB → 289KB",
                "빌드 시간 : 1m 46s → 5.57s"
              ]
            }
          ],
          tech: ["React", "TypeScript", "Vite", "zustand", "React-Query", "styled-components", "mui"],
          techHighlight: ["React", "TypeScript", "Vite", "zustand", "React-Query"],
          link: "https://github.com/hxxtae/bbbick"
        }
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
          title: "arena",
          url: "https://solved.ac/profile/fkdlxmfkdl1/arena"
        },
        {
          title: "algorithm 블로그 글 문서 작성",
          url: "https://algorithms-blog.vercel.app"
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
    }
  ]
}

export default resume;