import { getMobiles } from "@/lib/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface ISearch {
  search: string;
}

const Bottom = ({ search }: ISearch) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryFn: () => getMobiles(search),
    queryKey:["getMobiles", search],
  });
  return <div className=" grid grid-cols-2 place-items-center gap-10">
   
   {data?.map((el)=>(
    <div key={el.id} className="w-150 h-100 bg-input rounded-xl">
      <div><div></div><div></div></div>
    </div>
   ))}


  </div>
};

export default Bottom;
