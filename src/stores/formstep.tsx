import { create } from 'zustand'
 
type TFormData ={
    name: string,
    email:string,
    address:string,
}
type tFormStore = {
    formData:TFormData,
    setFormData:(newData:Partial<TFormData>) => void
}
 
export const useFormStore= create<tFormStore>((set)=> ({
    formData:{
        name:'',
        email:'',
        address:'',
    },
    setFormData :(newData) => {
        set((state) => ({formData:{...state.formData,...newData}}))
    }
}))