import { StateType } from "./type"

export const initialState: StateType = {
  person: {
    name: "",
    born: "",
    sns: [
      {
        serviceName: "",
        url: "",
      },
    ],
  },
  overview: {
    overview: "",
  },
  worksVitae: {
    enrollmentPeriod: "",
    company: "",
    works: [
      {
        period: "",
        workName: [""],
        charge: "",
        tool: "",
        comment: "",
      },
    ],
  },
  education: {
    educations: [
      {
        name: "",
        major: "",
        graduation: "",
      },
    ],
  },
  skillSet: {
    skillSets: [
      {
        lang: "",
        langPeriod: "",
        overview: "",
        skills: [
          {
            period: "",
            name: "",
            desc: "",
          },
        ],
      },
    ],
  },
  pr: {
    pr: "",
  },
}
