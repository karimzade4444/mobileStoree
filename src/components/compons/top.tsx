import type { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTheme } from "next-themes";


import CustomSelect from "./customSelect";

interface ICreateModal {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const Top = ({ search, setSearch, setOpenCreateModal }: ICreateModal) => {
  const { setTheme } = useTheme();

  const items = [
    { label: "light", value: "light" },
    { label: "dark", value: "dark" },
    { label: "system", value: "system" },
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
        <Button className="text-white" onClick={() => setOpenCreateModal(true)}>
          + Добавить телефон
        </Button>
      </div>
      <div className=" mt-10 p-5 flex  w-full h-25 bg-card justify-between items-center rounded-xl shadow shadow-primary gap-15">
        <Input
          className="w-150 h-15"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CustomSelect
          options={items}
          onValueChange={(value) => setTheme(value as string)}
        />
      </div>
    </div>
  );
};

export default Top;
