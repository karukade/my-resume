import React from "react"
import { Form, Button, Input } from "antd"
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { colors } from "~/styles/"

export type UnitProps = {
  field: {
    name: number
    key: number
    fieldKey: number
  }
  remove: (index: number | number[]) => void
}

type Props = {
  name: string | (string | number)[]
  unit: (param: UnitProps) => React.ReactNode
  addDefaultValue?: any
}

export const MultipleInputs: React.FC<Props> = ({
  unit,
  name,
  addDefaultValue,
}) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div>
          <UnitWrapper>
            {fields.map((field) => {
              return (
                <div className="unit" key={field.key}>
                  {unit({ field, remove })}
                </div>
              )
            })}
          </UnitWrapper>
          <Form.Item style={{ marginTop: "1.5em" }}>
            <Button
              type="dashed"
              onClick={() => {
                add(addDefaultValue)
              }}
              block
            >
              <PlusOutlined /> Add field
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  )
}

const UnitWrapper = styled.div`
  > .unit {
    padding: 2em;
    border-radius: 4px;
    border: 1px solid ${colors.border};
    background-color: ${colors.grayLL};
  }
  > * + * {
    margin-top: 1.5em;
  }
`

export const MultipleInputsUnit: React.FC<UnitProps> = ({
  field,
  remove,
  children,
}) => {
  return (
    <>
      {field.name > 0 && (
        <MinusCircleOutlined
          style={{ fontSize: "1.5em" }}
          onClick={() => {
            remove(field.name)
          }}
        />
      )}
      {children}
    </>
  )
}
