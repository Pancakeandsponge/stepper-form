import { useState } from "react";
import { userSchema, type TuserSchema } from "./schemas/users";
import { Controller, Form, useForm, type SubmitHandler   } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Field, 
  FieldError, 
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  
  const form = useForm<TuserSchema>({
    mode:"onChange",
    defaultValues: {
      name: "",
      email: "",
      address:"",
      age:0 
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit :SubmitHandler<TuserSchema>=(data)=>{
    console.log(data);
  }
  const next = async () => {
    let valid = false;

    if (step === 1) valid = await form.trigger(["name",'email']);
if (step === 2) valid = await form.trigger(["address", "age"], { shouldFocus: true });
    if (valid) setStep((prev) => prev + 1);
  };
  const prev = () => setStep((prev) => prev - 1);
 
  const [step, setStep] = useState<number>(1);
  const FirstStepField = () => {
  return (
       <>
       <Badge variant={"outline"}> Step 1</Badge>
       <Progress value={20}  />
       
       <Controller 
      name="name"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} >
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            {...field}
            id="name"
            aria-invalid={fieldState.invalid}
            placeholder="please enter your name"
            autoComplete="off" />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )} />
        
   
        
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              {...field}
              id="email"
              aria-invalid={fieldState.invalid}
              placeholder="please enter your email"
              autoComplete="off" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )} /></>)
  }
  const SecondStepField = () => {
    return(<>
            <Badge variant={"outline"}>Step 2</Badge>
        <Progress value={99} />
       <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="address">address</FieldLabel>
              <Input
                
                {...field}
                id="address"
                
                aria-invalid={fieldState.invalid}
                placeholder="please enter your address"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
           
            </Field>
          )}
        />

        <Controller
          name="age"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="age">age</FieldLabel>
              <Input
                {...field}
                id="age"
                onChange={(e) => field.onChange(+e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="please enter your age"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        /></>)
  }
  return (

    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm ">
  <CardHeader>
    <CardTitle>sign up form</CardTitle>
  </CardHeader>
      
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <CardContent >
      <FieldGroup>
     {step == 1 && <>
     <FirstStepField/>
     <Button type="button" onClick={next}>next step</Button>
     </> }
     {
      step == 2 && <>
        <SecondStepField/>
        <div className="flex justify-center gap-2 ">
          <Button type="button" onClick={prev}>prev step</Button>
          <Button type= "submit" >Submit</Button>
        </div>
      </>
     }
   
  

      </FieldGroup>
    </CardContent>

    <CardFooter className="mt-3">
      <Field orientation="horizontal">
      </Field>
    </CardFooter>
  </form>
</Card>

    
    </div>
  );
}

export default App;

