export type SnsType = {
  github: string
  qiita: string
  portfolio: string
}

export type PersonType = {
  name: string
  born: string
  sns: SnsType
}

export type SummaryType = {
  summary: string
}

export type WorkType = {
  period: string
  workName: string[]
  charge: string
  tool: string
  comment: string
}

export type WorksVitaeType = {
  enrollmentPeriod: string
  company: string
  works: WorkType[]
}

export type EducationType = {
  name: string
  major: string
  graduation: string
}

export type EducationsType = {
  educations: EducationType[]
}

export type SkillType = {
  name: string
  period: string
  desc: string
}

export type SkillSetType = {
  lang: string
  langPeriod: string
  overview: string
  skills: SkillType[]
}

export type SkillSetsType = {
  skillSets: SkillSetType[]
}

export type PrType = {
  pr: string
}

export type StateType = {
  person: PersonType
  summary: SummaryType
  worksVitae: WorksVitaeType
  education: EducationsType
  skillSet: SkillSetsType
  pr: PrType
}
