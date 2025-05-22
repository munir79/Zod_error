import z from 'zod'

const CretateUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Email must be valid'),
    password: z
      .string({ required_error: 'Password is required' })
  }),
});

export const UserValidationSchema={CretateUserZodSchema}