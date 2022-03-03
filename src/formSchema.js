// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  "name-input": yup
    .string()
    .trim()
    .min(2, "name must be at least 2 characters"),
  size: yup
  .string()
  .oneOf(['small', 'medium', 'large'], 'size is required')
  ,
  pepperoni: yup.boolean()
  ,
  extraCheese: yup.boolean()
  ,
  sausage: yup.boolean()
  ,
  mushroom: yup.boolean()
  ,
  "special-text": yup
  .string()
  .trim()

})

export default formSchema;