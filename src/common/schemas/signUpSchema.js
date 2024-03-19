import * as Yup from 'yup';
import { nameRegex, passwordRegex } from '../regex';

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(20, "Введіть своє ім'я, будь ласка")
    .trim("Введіть своє ім'я, будь ласка")
    .matches(nameRegex, "Введіть своє ім'я, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
  lastName: Yup.string()
    .min(2, 'Введіть своє прізвище, будь ласка')
    .max(30, 'Введіть своє прізвище, будь ласка')
    .trim('Введіть своє прізвище, будь ласка')
    .matches(nameRegex, 'Введіть своє прізвище, будь ласка')
    .required('Введіть своє прізвище, будь ласка'),
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .matches(
      passwordRegex,
      'Пароль має містити великі і малі літери, цифри та символи. Прикад: Testing193!'
    )
    .required('Введіть пароль, будь ласка'),
});
