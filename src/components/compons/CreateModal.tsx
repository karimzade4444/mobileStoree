import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import type { ICreateMobiles } from "@/lib/types/types";
import FormSelect from "../form/FormSelect";
import FormInput from "../form/FormInput";

interface ICreateModal {
  openCreateModal: boolean;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
}
const CreateModal = ({ openCreateModal, setOpenCreateModal }: ICreateModal) => {
  const { control, handleSubmit } = useForm<ICreateMobiles>();

  return (
    <>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogContent>
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
            <FormInput control={control} name="name"  placeholder="Ввелите модель"/>
          </div>
          <div>
            <p className=" text-neutral-400">Цена ($)</p>
            <FormInput control={control} name="price" />
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
            <FormInput control={control} name="color" />
          </div>
          <div>
            <p className=" text-neutral-400">Лого</p>
            <FormInput control={control} name="logo" />
          </div>
          <div>
            <p className=" text-neutral-400">Описание</p>
            <FormInput control={control} name="title" />
          </div>
          <div className=" grid grid-cols-2 gap-10">
            <Button variant="outline" onClick={() => setOpenCreateModal(false)}>
              Закрыть
            </Button>
            <Button variant="ghost">Добавить</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateModal;
