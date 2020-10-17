import React, { useCallback, memo } from "react"

import { useAppActions } from "~/containers/app/logics"
import { Section } from "~/components/Section"
import { WorksVitaeForm } from "./WorksVitaeForm"

import { WorksVitaeType } from "~/containers/app/logics"

export const WorksVitae: React.FC<{
  initialValue: WorksVitaeType
}> = memo(function WorksVitae({ initialValue }) {
  const { updateWorksVitae } = useAppActions()
  const onUpdate = useCallback((value: WorksVitaeType) => {
    updateWorksVitae(value)
  }, [])

  return (
    <Section title="職務経歴">
      <WorksVitaeForm initialValue={initialValue} onUpdate={onUpdate} />
    </Section>
  )
})
