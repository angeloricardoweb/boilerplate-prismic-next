import { Label } from './Label'
import { LabelError } from './LabelError'

interface SelectInputProps {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  disabled?: boolean
  options: {
    value: string
    label: string
  }[]
}

export function SelectInput(props: SelectInputProps) {
  return (
    <div>
      <Label label={props.label} name={props.name} />
      <select
        className="input-text"
        id={props.name}
        value={props.register.state}
        disabled={props.disabled}
        {...props.register(props.name, { required: props.required })}
      >
        {props.options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <LabelError
        msg={props.errors[props.name]?.message as string}
        hasError={props.errors[props.name] as any}
      />
    </div>
  )
}

// implements

{
  /* <SelectInput
register={register}
errors={errors}
label={'Gerência'}
name={'gerencia'}
options={[
  { value: '1', label: 'Gerência 1' },
  { value: '2', label: 'Gerência 2' },
  { value: '3', label: 'Gerência 3' },
]}
/> */
}
