import { Button } from "../ui/button"
import { Input } from "../ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const Top = () => {
    const items = [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
      { label: "System", value: "system" },
    ];
  return (
    <div className="p-15">
      <div className=" flex justify-between items-center ">
        <div>
          <p className="text-5xl font-bold">📱 Каталог телефонов</p>
          <p className="p-3 text-neutral-400 text-xl">
            Управляйте вашей коллекцией смартфонов
          </p>
        </div>
        <Button className="text-white">+ Добавить телефон</Button>
      </div>
      <div className=" mt-10 flex  w-full h-25 bg-card justify-center items-center rounded-xl shadow shadow-primary gap-15">
        <Input className="w-150 h-15" placeholder="Поиск..." />
        <Select>
          {" "}
          <SelectTrigger className="w-80 h-15!">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          {" "}
          <SelectTrigger className="w-80 h-15!">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Top