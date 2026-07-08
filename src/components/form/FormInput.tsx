import { Controller, type Control } from "react-hook-form";
import { Input } from "../ui/input";

interface IFormInput {
  name: string;
  control: Control;
  label?: string;
}

const FormInput = ({ control, name }: IFormInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Input aria-invalid={!!fieldState.error} {...field} />
          <p>{fieldState.error?.message || ""}</p>
        </>
      )}
    />
  );
};

export default FormInput;
