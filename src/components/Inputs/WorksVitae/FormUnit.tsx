import React from "react"
import { Form, Input } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

import { MultipleInputs, UnitProps } from "../MultipleInputs"

const NameUnit: React.FC<UnitProps> = ({ field, remove }) => {
  return (
    <>
      <Form.Item name={field.name} fieldKey={field.fieldKey}>
        <Input />
      </Form.Item>
      {field.name > 0 && (
        <MinusCircleOutlined
          style={{ fontSize: "1.5em" }}
          onClick={() => {
            remove(field.name)
          }}
        />
      )}
    </>
  )
}

export const FormUnit: React.FC<UnitProps> = ({ field, remove }) => {
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
      <Form.Item
        label="期間"
        name={[field.name, "period"]}
        fieldKey={[field.fieldKey, "period"]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="タイトル">
        <MultipleInputs
          addDefaultValue=""
          name={[field.name, "name"]}
          unit={({ field, remove }) => (
            <NameUnit field={field} remove={remove} />
          )}
        />
      </Form.Item>
      <Form.Item
        label="担当フェーズ"
        name={[field.name, "charge"]}
        fieldKey={[field.fieldKey, "charge"]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="使用フレームワーク・言語・ツールなど"
        name={[field.name, "tool"]}
        fieldKey={[field.fieldKey, "tool"]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="コメント"
        name={[field.name, "comment"]}
        fieldKey={[field.fieldKey, "comment"]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  )
}
