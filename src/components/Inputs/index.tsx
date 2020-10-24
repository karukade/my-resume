import React from "react"
import { StateType } from "~/containers/app/type"
import { config } from "~/config/inputs"
import { Section } from "../Section"
import { Form } from "./Form"

type Props = {
  initialValue: StateType
}

export const InputsComponent: React.FC<Props> = ({ initialValue }) => {
  return (
    <>
      {config.map((config) => (
        <Section key={config.name} title={config.title}>
          <Form initialValue={initialValue[config.name]} {...config} />
        </Section>
      ))}
    </>
  )
}
