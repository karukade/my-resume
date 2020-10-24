export type SnsType = {
  serviceName: string
  url: string
}

export type PersonType = {
  name: string
  born: string
  sns: SnsType[]
}

export type OverviewType = {
  overview: string
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
  overview: OverviewType
  worksVitae: WorksVitaeType
  education: EducationsType
  skillSet: SkillSetsType
  pr: PrType
}
