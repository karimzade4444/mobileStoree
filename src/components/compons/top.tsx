import { Button } from "../ui/button"
import { Input } from "../ui/input";
import { Select } from "../ui/select";


const Top = () => {
  return (
    <div>
      <div className="p-10 flex justify-between items-center ">
        <div>
          <p className="text-5xl font-bold">📱 Каталог телефонов</p>
          <p className="p-3 text-neutral-400 text-xl">
            Управляйте вашей коллекцией смартфонов
          </p>
        </div>
        <Button className="text-white">+ Добавить телефон</Button>
      </div>
      <div className="flex">
        <Input />
        <Select />
        <Select />
      </div>
    </div>
  );
}

export default Top