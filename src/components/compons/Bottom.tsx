import { getMobiles } from "@/lib/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface ISearch {
  search: string;
}

const Bottom = ({ search }: ISearch) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: () => getMobiles(search),
    queryKey: ["getMobiles", search],
  });
  return (
    <div className=" grid grid-cols-2 place-items-center gap-10">
      {data?.map((el) => (
        <div key={el.id} className="w-150 h-105 bg-input rounded-xl">
          <div className="p-7 flex justify-between">
            <div>
              <img src={el.logo} alt="" className="w-10" />
            </div>
            <div className="flex justify-center items-center gap-5">
              <Eye className="text-blue-600 cursor-pointer hover:text-blue-600/50" />
              <SquarePen className="text-green-600 cursor-pointer hover:text-green-600/50" />
              <Trash2 className="text-red-600 cursor-pointer hover:text-red-600/50" />
            </div>
          </div>
          <p className="text-primary text-3xl font-bold pl-7 ">{el.name}</p>
          <div className=" flex justify-between items-center pl-8 pr-8 pt-5">
            <p className="text-xl text-neutral-400">Память:</p>
            <p className="text-2xl font-bold">{el.storage} ГБ</p>
          </div>
          <div className=" flex justify-between items-center pl-8 pr-8 pt-5">
            <p className="text-xl text-neutral-400">Цвет:</p>
            <p className="text-2xl font-bold">{el.color} </p>
          </div>
          <p className="pl-8 pr-8 pt-5 h-15">{el.title}</p>
          <div className=" flex justify-between p-8 items-center">
            <p className="text-4xl font-bold text-blue-700">{el.price} $</p>{" "}
            <Button variant="ghost">Подробнее</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
