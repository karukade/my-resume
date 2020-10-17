import React from "react"
import { Form, Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
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
}) => (
  <Form.List name={name}>
    {(fields, { add, remove }) => (
      <div>
        <UnitWrapper>
          {fields.map((field) => (
            <div className="unit" key={field.key}>
              {unit({ field, remove })}
            </div>
          ))}
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

const UnitWrapper = styled.div`
  > .unit {
    padding: 2em;
    border-radius: 4px;
    border: 1px solid ${colors.border};
  }
  > * + * {
    margin-top: 1.5em;
  }
`
