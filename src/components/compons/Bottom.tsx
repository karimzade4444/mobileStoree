
import Items from "./Items";
import { useState, type Dispatch, type SetStateAction } from "react";



interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const Bottom = ({openCreateModal, setOpenCreateModal}:ICreateModal) => {
    
 const [search, setSearch] = useState("");
  
  return (
    <div className=" grid grid-cols-2 place-items-center gap-10">
      <Items search={search} openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal}/>
    </div>
  );
};

export default Bottom;
