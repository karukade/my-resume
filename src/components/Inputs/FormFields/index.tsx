import React, { memo } from "react"
import { Form, Input } from "antd"
import {
  MultipleInputs,
  MultipleInputsUnit,
  UnitProps,
} from "../MultipleInputs"

type RecursiveObjType = { [key: string]: RecursiveType }
type RecursiveArrayType = (string | RecursiveObjType)[]
type RecursiveType = string | RecursiveObjType | RecursiveArrayType

export type RenderInputs = (key: string) => JSX.Element
export type LabelMap = { [key: string]: string }

type FormFieldsProps = {
  value: { [key: string]: RecursiveType }
  labelMap: LabelMap
  renderInputs?: RenderInputs
  field?: UnitProps["field"]
}

export const FormFields: React.FC<FormFieldsProps> = memo(function FormFields({
  value,
  labelMap,
  renderInputs,
  field,
}) {
  const entries = Object.entries(value)
  const inputs = entries.map(([key, value]) => {
    // for string
    if (typeof value === "string") {
      const props = {
        key,
        field,
        name: key,
        label: labelMap[key],
        renderInputs,
      }
      return <SingleInput {...props} />
    }

    // for array
    if (Array.isArray(value)) {
      const props = {
        key,
        field,
        value,
        label: key,
        labelMap,
        renderInputs,
      }
      return <MultiInput {...props} />
    }

    // for object
    const props = {
      field,
      value,
      labelMap,
      name: key,
      renderInputs,
    }

    return (
      <Form.Item label={key} key={key} name={key}>
        <FormFields {...props} />
      </Form.Item>
    )
  })

  return <>{inputs}</>
})

/*-----------------
 
 -----------------*/
const SingleInput: React.FC<{
  name: string
  label: string
  renderInputs: FormFieldsProps["renderInputs"]
  field?: UnitProps["field"]
}> = ({ name, field, label, renderInputs = () => <Input /> }) => {
  const props = {
    key: name,
    name: field ? [field.name, name] : name,
    label,
  }
  return (
    <div>
      <Form.Item {...props}>{renderInputs(name)}</Form.Item>
    </div>
  )
}

/*-----------------
 
 -----------------*/
const MultiInput: React.FC<{
  label: string
  value: RecursiveArrayType
  renderInputs: FormFieldsProps["renderInputs"]
  labelMap: FormFieldsProps["labelMap"]
  field?: UnitProps["field"]
}> = ({ label, value, labelMap, renderInputs, field }) => {
  const val = value[0]
  const name = field ? [field.name, label] : label
  const multiInputProps = {
    name,
    addDefaultValue: val,
  }
  const inputUnitProps = {
    labelMap,
    renderInputs,
    name: label,
    value: val,
  }
  return (
    <div>
      <Form.Item label={labelMap[label]}>
        <MultipleInputs
          {...multiInputProps}
          unit={(props) => <InputUnit {...inputUnitProps} props={props} />}
        />
      </Form.Item>
    </div>
  )
}

/*-----------------
 
 -----------------*/
const InputUnit: React.FC<{
  name: string
  props: UnitProps
  value: Exclude<RecursiveType, RecursiveArrayType>
  labelMap: FormFieldsProps["labelMap"]
  renderInputs: FormFieldsProps["renderInputs"]
}> = ({ name, value, props, labelMap, renderInputs = () => <Input /> }) => {
  return (
    <MultipleInputsUnit {...props}>
      {typeof value === "string" ? (
        <Form.Item name={props.field.name}>{renderInputs(name)}</Form.Item>
      ) : (
        // 再起的に呼び出す
        <FormFields
          value={value}
          field={props.field}
          labelMap={labelMap}
          renderInputs={renderInputs}
        />
      )}
    </MultipleInputsUnit>
  )
}
