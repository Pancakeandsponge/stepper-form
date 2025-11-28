import {z} from 'zod'

export const userSchema = z.object({
    name:z.string().min(3,{error: 'please enter your name'}),
    email :z.email({error:'please enter your email'}),
    address:z.string({error:'please enter your address'})
    });
    
export type TuserSchema = z.infer<typeof userSchema>