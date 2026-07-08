import { getMobiles } from "@/lib/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, SquarePen, Trash2 } from "lucide-react";

interface ISearch {
  search: string;
}

const Bottom = ({ search }: ISearch) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: () => getMobiles(search),
    queryKey:["getMobiles", search],
  });
  return (
    <div className=" grid grid-cols-2 place-items-center gap-10">
      {data?.map((el) => (
        <div key={el.id} className="w-150 h-100 bg-input rounded-xl">
          <div className="p-7 flex justify-between">
            <div>
              <img src={el.logo} alt=""  className="w-10"/>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Eye className="text-blue-600 cursor-pointer hover:text-blue-600/50" />
              <SquarePen className="text-green-600 cursor-pointer hover:text-green-600/50" />
              <Trash2 className="text-red-600 cursor-pointer hover:text-red-600/50" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bottom;
