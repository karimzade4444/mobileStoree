import { updateMobile } from "@/lib/api/api";
import type { ICreateMobiles } from "@/lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";


interface IEditModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}

const EditModal = ({openEditModal, setOpenEditModal}:IEditModal) => {
    const queryClient = useQueryClient();
    const { mutate: updatingMobile } = useMutation({
      mutationFn: ({ id, data }: { id: number; data: ICreateMobiles }) =>
        updateMobile(id, data),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getMobiles"],
        });

        setOpenEditModal(false);
      },
    });
  return (
    <div>EditModal</div>
  )
}

export default EditModal