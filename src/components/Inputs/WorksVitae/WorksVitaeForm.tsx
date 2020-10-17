import React, { useCallback, memo } from "react"
import { Form, Input } from "antd"

import { FormUnit } from "./FormUnit"
import { MultipleInputs } from "../MultipleInputs"
import { WorksVitaeType } from "~/containers/app/logics"
import { debounce } from "~/utils/utils"

type Props = {
  initialValue: WorksVitaeType
  onUpdate: (value: WorksVitaeType) => void
}

export const WorksVitaeForm: React.FC<Props> = memo(function WorksVitaeForm({
  initialValue,
  onUpdate,
}) {
  const [form] = Form.useForm()
  const _onUpdate = useCallback(
    debounce(() => {
      onUpdate(form.getFieldsValue())
    }),
    []
  )

  return (
    <Form
      initialValues={initialValue}
      layout="vertical"
      form={form}
      onFieldsChange={_onUpdate}
    >
      <Form.Item label="社名" name="company">
        <Input />
      </Form.Item>
      <Form.Item label="在籍期間" name="period">
        <Input />
      </Form.Item>
      <Form.Item label="仕事">
        <MultipleInputs
          addDefaultValue={{ ...initialValue.works[0] }}
          name="works"
          unit={({ field, remove }) => (
            <FormUnit field={field} remove={remove} />
          )}
        />
      </Form.Item>
    </Form>
  )
})
