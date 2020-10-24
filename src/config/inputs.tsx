/* eslint-disable react/display-name */
import React from "react"
import { Input } from "antd"
import {
  StateType,
  PersonType,
  SnsType,
  WorksVitaeType,
  WorkType,
  OverviewType,
  EducationType,
  EducationsType,
  PrType,
  SkillSetType,
  SkillType,
  SkillSetsType,
} from "~/containers/app/type"
import { RenderInputs } from "../components/Inputs/FormFields"

type ConfigBase<T extends string> = {
  name: keyof StateType
  title: string
  labelMap: Record<T, string>
  renderInputs?: RenderInputs
}

export type ConfigType = ConfigBase<string>[]

const worksVitae: ConfigBase<keyof WorksVitaeType | keyof WorkType> = {
  name: "worksVitae",
  title: "職務経歴",
  labelMap: {
    enrollmentPeriod: "在籍期間",
    company: "社名",
    works: "案件",
    workName: "案件概要",
    period: "期間",
    charge: "担当フェーズ",
    tool: "ツール、言語、フレームワーク",
    comment: "コメント",
  },
  renderInputs: (key) => {
    switch (key) {
      case "charge":
      case "comment":
      case "tool":
        return <Input.TextArea rows={5} />
      default:
        return <Input />
    }
  },
}

const person: ConfigBase<keyof PersonType | keyof SnsType> = {
  name: "person",
  title: "個人データ",
  labelMap: {
    born: "生年",
    name: "名前",
    sns: "SNS",
    serviceName: "SNS名",
    url: "URL",
  },
}

const summary: ConfigBase<keyof OverviewType> = {
  title: "職務経歴概要",
  name: "overview",
  labelMap: {
    overview: "概要",
  },
  renderInputs: () => <Input.TextArea rows={5} />,
}

const education: ConfigBase<keyof EducationType | keyof EducationsType> = {
  title: "学歴",
  name: "education",
  labelMap: {
    educations: "学歴",
    name: "学校名",
    major: "専攻",
    graduation: "卒業年",
  },
}

const skillSet: ConfigBase<
  keyof SkillSetType | keyof SkillType | keyof SkillSetsType
> = {
  title: "スキルセット",
  name: "skillSet",
  labelMap: {
    skillSets: "スキルセット",
    lang: "言語",
    overview: "概要",
    langPeriod: "言語使用期間",
    skills: "フレームワーク, 周辺技術",
    name: "フレームワーク, 周辺技術名",
    period: "利用期間",
    desc: "どれくらいのレベル感か？",
  },
  renderInputs: (key) => {
    switch (key) {
      case "overview":
      case "desc":
        return <Input.TextArea rows={5} />
      default:
        return <Input />
    }
  },
}

const pr: ConfigBase<keyof PrType> = {
  title: "自己PR",
  name: "pr",
  labelMap: {
    pr: "自己PR",
  },
  renderInputs: () => <Input.TextArea rows={5} />,
}

export const config: ConfigType = [
  person,
  summary,
  worksVitae,
  skillSet,
  education,
  pr,
]
