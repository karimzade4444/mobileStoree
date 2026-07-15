import { Controller, type Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IOption {
  label: string;
  value: string;
}

interface IFormSelect {
  name: string;
  control: Control;
  placeholder?: string;
  options: IOption[];
}

const FormSelect = ({ control, name, placeholder, options }: IFormSelect) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Select value={field.value} onValueChange={field.onChange} cl>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder || "Выберите значение"} />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className="text-red-500 text-sm">{fieldState.error?.message}</p>
        </>
      )}
    />
  );
};

export default FormSelect;
