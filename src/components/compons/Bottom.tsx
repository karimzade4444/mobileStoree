
import Items from "./Items";
import {  type Dispatch, type SetStateAction } from "react";



interface ICreateModal {
  search: string,
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const Bottom = ({openCreateModal, setOpenCreateModal, search}:ICreateModal) => {
    
 
  
  return (
    <div className=" grid grid-cols-2 place-items-center gap-10">
      <Items search={search} openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal}/>
    </div>
  );
};

export default Bottom;
