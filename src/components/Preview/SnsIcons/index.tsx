import qiitaIcon from "~/assets/qiita-icon.png"
import githubIcon from "~/assets/github-icon.png"
import portfolioIcon from "~/assets/portfolio-icon.png"

const icons: Record<string, string> = {
  qiita: qiitaIcon,
  github: githubIcon,
  Portfolio: portfolioIcon,
}

export const iconPath = (name: string) => {
  return icons?.[name]
}
