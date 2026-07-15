  import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
  import { Button } from "../ui/button";
  import { Eye, SquarePen, Trash2 } from "lucide-react";
  import { deleteMobile, getMobiles } from "@/lib/api/api";
 
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import CreateModal from "./CreateModal";

  interface ISearch {
    search: string;
  }
  interface IMobile {
    id: number;
    name: string;
    price: number;
    storage: number;
    color: string;
    title: string;
    logo: string;
    brand: string
  }

  const Items = ({ search }: ISearch) => {
    const [selectedMobile, setSelectedMobile] = useState<IMobile | null>(null);
    const [open, setOpen] = useState(false);
    const [openCreateModal, setOpenCreateModal] = useState(false)
      const queryClient = useQueryClient();
    const { data } = useQuery({
      queryFn: () => getMobiles(search),
      queryKey: ["getMobiles", search],
    });
    const { mutate: deletingUser } = useMutation({
      mutationFn: deleteMobile,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getMobiles", search] });
      },
    });
    return (
      <>
        {data?.map((el) => (
          <div
            key={el.id}
            className="w-150 h-105 bg-input rounded-xl hadow shadow-primary"
          >
            <div className="p-7 flex justify-between">
              <div>
                <img src={el.logo} alt="" className="w-10" />
              </div>
              <div className="flex justify-center items-center gap-5">
                <Eye
                  onClick={() => {
                    setSelectedMobile(el);
                    setOpen(true);
                  }}
                  className="text-blue-600 cursor-pointer hover:text-blue-600/50 duration-300"
                />
                <SquarePen className="text-green-600 cursor-pointer hover:text-green-600/50 duration-300" onClick={()=>setOpenCreateModal(true)}/>
                <Trash2
                  className="text-red-600 cursor-pointer hover:text-red-600/50 duration-300"
                  onClick={() => deletingUser(el.id)}
                />
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
              <Button
                onClick={() => {
                  setSelectedMobile(el);
                  setOpen(true);
                }}
                variant="ghost"
              >
                Подробнее
              </Button>
            </div>
          </div>
        ))}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogTitle>Информация о телефоне</DialogTitle>
            <div>
              <div className=" flex justify-center items-center flex-col">
                <img src={selectedMobile?.logo} alt="" className="w-10" />
                <p className="pt-3 text-xl">{selectedMobile?.name}</p>
              </div>
              <div className=" grid grid-cols-2 gap-5 mt-7">
                <div className=" h-15 bg-sidebar-primary  rounded-md shadow">
                  <p className="pl-3 pt-1 text-neutral-300">Цена:</p>
                  <p className="text-xl font-black text-chart-4 pl-3">
                    {selectedMobile?.price} $
                  </p>
                </div>
                <div className=" h-15 bg-sidebar-primary  rounded-md shadow">
                  <p className="pl-3 pt-1 text-neutral-300">Память:</p>
                  <p className="text-xl font-black  pl-3">
                    {selectedMobile?.storage} $
                  </p>
                </div>
                <div className=" h-15 bg-sidebar-primary  rounded-md shadow">
                  <p className="pl-3 pt-1 text-neutral-300">Цвет:</p>
                  <p className="text-xl font-black  pl-3">
                    {selectedMobile?.color} $
                  </p>
                </div>
                <div className=" h-15 bg-sidebar-primary  rounded-md shadow">
                  <p className="pl-3 pt-1 text-neutral-300">Бренд:</p>
                  <p className="text-xl font-black  pl-3">
                    {selectedMobile?.brand} $
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p className="p-2">Описание</p>
                <div className="h-18 bg-sidebar-primary rounded-md shadow p-2">
                  <p>{selectedMobile?.title}</p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-5">
              <Button variant="outline" onClick={()=>setOpen(false)}>Закрыть</Button>
              <Button variant="ghost">Редактировать</Button>
            </div>
          </DialogContent>
        </Dialog>
        <CreateModal openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal}/>
      </>
    );
  };

  export default Items