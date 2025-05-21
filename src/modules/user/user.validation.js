import z from 'zod';


const CretateUserZodSchema=z.object({
    body:z.object({
        name:z.string({
            required_error:"Name is required"
        }),
        email: z
      .string({ required_error: 'Email is required' })
      .email('Email must be a valid email'),
  }),
    
})


export const UserValidationSchema={CretateUserZodSchema}