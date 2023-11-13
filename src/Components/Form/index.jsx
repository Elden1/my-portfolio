import './assets/style.scss'
import React from 'react';
import { useForm } from 'react-hook-form';

let Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
          
          return (
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="NomPrenom">Nom et Prénom</label>
              <input type="text" id="NomPrenom" placeholder='First and last name' {...register("First name", {required: true, maxLength: 80})} />
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" placeholder='Email' {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
              <label htmlFor="mobileNumb">Numéro de téléphone</label>
              <input type="tel" id="mobileNumb" placeholder='Mobile number'{...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
              <input type="text" id="Message" placeholder="Message" {...register("Message", {required: true, min: 0, maxLength: 999999})} />
        
              <input type="submit" />
            </form>
          );
        }

  export default Form;  