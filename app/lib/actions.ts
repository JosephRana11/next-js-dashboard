'use server'

import {z} from 'zod';

export async function createInvoice(formData : FormData){
   const rawFormData = {
    customerId : formData.get('customerId'),
    amount : formData.get('amount'),
    status : formData.get('status')
   }

   const FormSchema  = z.object({
    id : z.string(),
    customerId : z.string(),
    amount : z.coerce.number(),
    status : z.enum(['pending' , 'paid']),
    date : z.date()
   })

   const createInvoice = FormSchema.omit({ id : true  , date : true})

   console.log(rawFormData)
   console.log(typeof rawFormData.amount)
   console.log(typeof rawFormData.status)
   console.log(typeof rawFormData)

}