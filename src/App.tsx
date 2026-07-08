import { Controller, useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserSchema,
  type ICreateUserSchema,
} from "./lib/schemas/createUser";
import FormInput from "./components/form/FormInput";
import Top from "./components/compons/top";
import Bottom from "./components/compons/Bottom";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const { control, handleSubmit } = useForm<ICreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = (data: ICreateUserSchema) => {
    console.log(data);
  };

  return (
    <div>
   <Top/>
   <Bottom search={search}/>
    </div>
  );
};

export default App;
