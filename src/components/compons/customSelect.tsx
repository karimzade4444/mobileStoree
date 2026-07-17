import type { SelectRootChangeEventDetails } from "@base-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CustomSelectProps {
  options: {
    label: string;
    value: string;
  }[];
  onValueChange?: (
    value: string | null,
    eventDetails: SelectRootChangeEventDetails,
  ) => void;
}

const CustomSelect = ({ options, onValueChange }: CustomSelectProps) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-80 h-15!">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
