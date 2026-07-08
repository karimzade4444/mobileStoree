import { getMobiles } from "@/lib/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Items from "./Items";





const Bottom = () => {
    
 const [search, setSearch] = useState("");
  const queryClient = useQueryClient();
  return (
    <div className=" grid grid-cols-2 place-items-center gap-10">
      <Items search={search}/>
    </div>
  );
};

export default Bottom;
