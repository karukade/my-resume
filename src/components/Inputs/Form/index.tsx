import React, { useCallback, memo } from "react"
import { Form as AntdForm } from "antd"

import { FormFields } from "../FormFields"
import { StateType } from "~/containers/app/type"
import { debounce } from "~/utils/utils"
import { RenderInputs, LabelMap } from "../FormFields"
import { useAppActions } from "~/containers/app/logics"

type Props = {
  initialValue: StateType[keyof StateType]
  name: keyof StateType
  labelMap: LabelMap
  renderInputs?: RenderInputs
}

export const Form: React.FC<Props> = memo(function Form({
  initialValue,
  name,
  renderInputs,
  labelMap,
}) {
  const { setState } = useAppActions()
  const [form] = AntdForm.useForm()
  const onUpdate = useCallback(
    debounce(() => {
      setState(form.getFieldsValue(), name)
    }),
    []
  )

  return (
    <AntdForm
      initialValues={initialValue}
      layout="vertical"
      form={form}
      onFieldsChange={onUpdate}
    >
      <FormFields
        value={initialValue}
        labelMap={labelMap}
        renderInputs={renderInputs}
      />
    </AntdForm>
  )
})
