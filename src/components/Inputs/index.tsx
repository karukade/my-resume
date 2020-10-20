import React from "react"
import { StateType } from "~/containers/app/type"
import { ConfigType } from "~/containers/inputs/config"
import { Section } from "../Section"
import { Form } from "./Form"

type Props = {
  initialValue: StateType
  configs: ConfigType
}

export const InputsComponent: React.FC<Props> = ({ initialValue, configs }) => {
  return (
    <>
      {configs.map((config) => (
        <Section key={config.name} title={config.title}>
          <Form initialValue={initialValue[config.name]} {...config} />
        </Section>
      ))}
    </>
  )
}
