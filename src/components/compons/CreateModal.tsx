import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { ICreateMobiles } from "@/lib/types/types";
import FormSelect from "../form/FormSelect";
import FormInput from "../form/FormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "@/lib/api/api";

interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}
const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
  const { control, handleSubmit } = useForm<ICreateMobiles>();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getMobiles"],
      });

      setOpenCreateModal(false);
    },
  });
const onSubmit = (data: ICreateMobiles) => {
  mutate(data);
};
  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Добавление телефона</DialogTitle>
          <div>
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
          <div>
            <p className=" text-neutral-400">Модель</p>
            <FormInput
              control={control}
              name="name"
              placeholder="Ввелите модель"
            />
          </div>
          <div>
            <p className=" text-neutral-400">Цена ($)</p>
            <FormInput
              control={control}
              name="price"
              placeholder="Введите цену"
            />
          </div>
          <div>
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
          <div>
            <p className=" text-neutral-400">Цвет</p>
            <FormInput
              control={control}
              name="color"
              placeholder="Введите цвет"
            />
          </div>
          <div>
            <p className=" text-neutral-400">Лого</p>
            <FormInput
              control={control}
              name="logo"
              placeholder="https://..."
            />
          </div>
          <div>
            <p className=" text-neutral-400">Описание</p>
            <FormInput
              control={control}
              name="title"
              placeholder="Введите описание"
            />
          </div>
          <div className=" grid grid-cols-2 gap-10">
            <Button
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateModal;
