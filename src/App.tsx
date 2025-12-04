import { useState } from "react";
import { userSchema, type TuserSchema } from "./schemas/users";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./components/ui/button";


function App() {
  const form = useForm<TuserSchema>({
    defaultValues: {
      name: "",
      email: "",
      address:'',
      age:0
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const [step, setStep] = useState<number>(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen border">
      <Button className="">submit</Button>
    </div>
  );
}

export default App;
