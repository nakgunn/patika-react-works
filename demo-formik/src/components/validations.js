import { object, string, ref } from 'yup';


const ValidationSchema = object({
  email: string().email('Geçersiz e-posta formatı. örn: example@gmail.com').required('E-posta boş bırakılamaz.'),
  password: string().min(5, 'Parola en az 5 karakterden oluşmalıdır.').required('Parola boş bırakılamaz.'),
  passwordConfirm: string().oneOf([ref('password')], 'Parolalar eşleşmiyor.').required('Bu alan boş bırakılamaz.')
});

export default ValidationSchema