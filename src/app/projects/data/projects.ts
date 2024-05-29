interface Project {
  title: string;
  description: string;
  imagePath: string;
  home_url?: string;
  github_url?: string;
}

interface Projects {
  contents: Project[]
}

const projects: Projects = {
  contents: [
    {
      title: "welaundry",
      description: "세탁소 웹 포스(POS) 애플리케이션을 소개합니다.",
      imagePath: "/assets/data/project/welaundry.png",
      home_url: "https://hxxtae.github.io/we-laundry-desc/",
      github_url: "https://github.com/hxxtae/we-laundry-client"
    },
    {
      title: "nomflix",
      description: "Netflix가 아닌 Nomflix 입니다.",
      imagePath: "/assets/data/project/nomflix.png",
      home_url: "https://hxxtae.github.io/nomflix/",
      github_url: "https://github.com/hxxtae/nomflix"
    },
    {
      title: "bbbick",
      description: "온라인 북(Book) 커머스 플랫폼을 소개합니다.",
      imagePath: "/assets/data/project/bbbick.png",
      home_url: "https://bbbick.vercel.app/",
      github_url: "https://github.com/hxxtae/bbbick"
    }
  ]
}

export default projects;