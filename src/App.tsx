import { useState } from "react";
import { userSchema, type TuserSchema } from "./schemas/users";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Input } from "./components/ui/input";
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

  const [step, setStep] = useState<number>(0);

  return (

    <div className="h-screen flex justify-center items-center">
      
            <Card  className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Form</CardTitle>
  </CardHeader>
  <CardContent>
    <FieldSet>

  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input placeholder="please enter your name" id="name" />
      
    </Field>
    <Field>
      <FieldLabel htmlFor="email">Emial</FieldLabel>
      <Input id="email" placeholder="please enter your email" aria-invalid />
     
    </Field>
    <Field orientation="">
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
  </CardContent>
  <CardFooter>
  </CardFooter>
</Card>
    
    </div>
  );
}

export default App;
