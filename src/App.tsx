import { Controller, useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserSchema,
  type ICreateUserSchema,
} from "./lib/schemas/createUser";
import FormInput from "./components/form/FormInput";

const App = () => {
  const { control, handleSubmit } = useForm<ICreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = (data: ICreateUserSchema) => {
    console.log(data);
  };

  return (
    <div>
   
    </div>
  );
};

export default App;
