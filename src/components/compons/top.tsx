import { Button } from "../ui/button"


const Top = () => {
  return (
    <div className="p-10 flex justify-between items-center ">
    <div><p className="text-5xl font-bold">📱 Каталог телефонов</p><p className="p-3 text-neutral-400 text-xl">Управляйте вашей коллекцией смартфонов</p></div>
     <Button>+ Добавить телефонов</Button>
    </div>
  )
}

export default Top