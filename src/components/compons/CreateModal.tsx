import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}
const CreateModal = ({openCreateModal, setOpenCreateModal}:ICreateModal) => {

  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent>
          <DialogTitle>Информация о телефоне</DialogTitle>
      
            <Button variant="outline" onClick={() => setOpenCreateModal(false)}>
              Закрыть
            </Button>
            <Button variant="ghost">Редактировать</Button>
          
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateModal