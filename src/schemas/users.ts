import {z} from 'zod'

export const userSchema = z.object({
    name:z.string().min(3,{error: 'please enter your name'}),
    email :z.email({error:'please enter your email'}),
    address:z.string().min(1, { error: "Please enter your address" }),
    age:z.number({error:'please enter your age'}).min(12,{error:'age must be 12 or above'})
    })



    
export type TuserSchema = z.infer<typeof userSchema>

