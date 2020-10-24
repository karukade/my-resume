import { StateType } from "../containers/app/type"
type ConfigType = {
  name: keyof StateType
  title?: string
}
export const config: ConfigType[] = [
  {
    name: "person",
  },
  {
    name: "overview",
    title: "職務要約",
  },
  {
    name: "worksVitae",
    title: "職務経歴",
  },
  {
    name: "education",
    title: "学歴",
  },
  {
    name: "skillSet",
    title: "スキル",
  },
  {
    name: "pr",
    title: "自己PR",
  },
]
