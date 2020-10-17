import { createId } from "~/utils/utils"
import { generateStateManagementTools } from "~/utils/state"

type SnsType = {
  github: string
  qiita: string
  portfolio: string
}

export type WorkType = {
  id: number
  period: string
  name: string[]
  charge: string
  tool: string
  comment: string
}

export type WorksVitaeType = {
  period: string
  company: string
  works: WorkType[]
}

type EducationType = {
  id: number
  name: string
  major: string
  graduation: string
}

type SkillType = {
  id: number
  name: string
  period: string
  desc: string
}

type SkillSetType = {
  id: number
  name: string
  period: string
  overview: string
  skills: SkillType[]
}

export type StateType = {
  name: string
  sns: SnsType
  summary: ""
  worksVitae: WorksVitaeType
  education: EducationType[]
  skillSet: SkillSetType[]
  pr: string
}

const getInitialState = (): StateType => {
  return {
    name: "",
    sns: {
      github: "",
      qiita: "",
      portfolio: "",
    },
    summary: "",
    worksVitae: {
      period: "",
      company: "トランスコスモス",
      works: [
        {
          id: createId(),
          period: "",
          name: [""],
          charge: "",
          tool: "",
          comment: "",
        },
      ],
    },
    education: [
      {
        id: createId(),
        name: "",
        major: "",
        graduation: "",
      },
    ],
    skillSet: [
      {
        id: createId(),
        name: "",
        period: "",
        overview: "",
        skills: [
          {
            id: createId(),
            period: "",
            name: "",
            desc: "",
          },
        ],
      },
    ],
    pr: "",
  }
}

export const { useAppState, useAppActions } = generateStateManagementTools({
  getInitialState,
  getActions: (setState) => ({
    setName: (name: StateType["name"]) => {
      setState((state) => ({
        ...state,
        name,
      }))
    },

    setSns: (sns: StateType["sns"]) => {
      setState((state) => ({
        ...state,
        sns,
      }))
    },

    setSummary: (summary: StateType["summary"]) => {
      setState((state) => ({
        ...state,
        summary,
      }))
    },

    updateWorksVitae: (worksVitae: WorksVitaeType) => {
      setState((state) => {
        return {
          ...state,
          worksVitae,
        }
      })
    },
  }),
})
