interface Skills {
  clientSide: string[];
  serverSide: string[];
  others: string[];
}

interface About {
  content: string[];
  skills: Skills;
};

const about: About = {
  content: [
    "저는 어디서나 뛰어난 사람이 아니라 어디서든 잘 녹아드는 사람입니다.",
    "개발 중 마주친 문제를 해결하기 위해 최대한 노력하며, 시간은 걸리지만 해결한 과정을 기록합니다. 개발 기술 스택을 늘리고 알고리즘 문제 풀이를 즐기며, 그 과정에서 얻은 지식을 공유하는 것을 좋아합니다.",
    "그러므로 좋은 개발자로 성장하기 위해 기록에 따른 문서화를 통해 사람들과 인사이트를 공유하고자 노력합니다.",
    "많은 사람들과 의견 충돌을 피하기보다는 의견을 나누고, 좋은 시너지를 만들기 위해 노력하며, 같이 일하고 싶은 개발자가 되기위해 노력하고 있습니다.",
  ],
  skills: {
    clientSide: [
      "html",
      "css",
      "scss",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "react-native"
    ],
    serverSide: [
      "node.js",
      "express"
    ],
    others: [
      "git",
      "github",
      "figma",
      "oracle",
      "mongoDB",
      "jest"
    ]
  }
};

export default about;