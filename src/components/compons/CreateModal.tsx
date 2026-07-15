import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { ICreateMobiles } from "@/lib/types/types";
import FormSelect from "../form/FormSelect";
import FormInput from "../form/FormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "@/lib/api/api";
import { createMobileSchema, type ICreateMobileSchema } from "@/lib/schemas/createMobile";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}
const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
  const { control, handleSubmit, reset } = useForm<ICreateMobileSchema>({
    resolver: zodResolver(createMobileSchema),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getMobiles"],
      });
      reset();
      setOpenCreateModal(false);
    },
  });
  const onSubmit = (data: ICreateMobileSchema) => {
    mutate(data);
  };
  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Добавление телефона</DialogTitle>
            <div className="mt-5">
              <p className=" text-neutral-400">Бренд</p>
              <FormSelect
                control={control}
                name="brand"
                placeholder="Выберите бренд"
                options={[
                  {
                    label: "Apple",
                    value: "Apple",
                  },
                  {
                    label: "Samsung",
                    value: "Samsung",
                  },
                  {
                    label: "Xiaomi",
                    value: "Xiaomi",
                  },
                  {
                    label: "Honor",
                    value: "Honor",
                  },
                  {
                    label: "Huawei",
                    value: "Huawei",
                  },
                ]}
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Модель</p>
              <FormInput
                control={control}
                name="name"
                placeholder="Ввелите модель"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Цена ($)</p>
              <FormInput
                control={control}
                name="price"
                placeholder="Введите цену"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Память (ГБ)</p>
              <FormSelect
                control={control}
                name="storage"
                placeholder="Выберите память"
                options={[
                  {
                    label: "64",
                    value: "64",
                  },
                  {
                    label: "128",
                    value: "128",
                  },
                  {
                    label: "256",
                    value: "256",
                  },
                  {
                    label: "512",
                    value: "512",
                  },
                  {
                    label: "1024",
                    value: "1024",
                  },
                ]}
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Цвет</p>
              <FormInput
                control={control}
                name="color"
                placeholder="Введите цвет"
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Лого</p>
              <FormInput
                control={control}
                name="logo"
                placeholder="https://..."
              />
            </div>
            <div className="mt-3">
              <p className=" text-neutral-400">Описание</p>
              <FormInput
                control={control}
                name="title"
                placeholder="Введите описание"
              />
            </div>
            <div className=" grid grid-cols-2 gap-10 mt-5">
              <Button
              type="button"
                variant="outline"
                className="h-10"
                onClick={() => setOpenCreateModal(false)}
              >
                Закрыть
              </Button>
              <Button variant="ghost" className="h-10" type="submit">
                Добавить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateModal;
