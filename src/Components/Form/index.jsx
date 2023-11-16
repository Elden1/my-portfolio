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
              <input type="text" id="NomPrenom" {...register("First name", {required: true, maxLength: 80})} />
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
              <label htmlFor="mobileNumb">Numéro de téléphone</label>
              <input type="tel" id="mobileNumb" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
              <label htmlFor="Message">Message</label>
              <textarea type="text" id="Message"{...register("Message", {required: true})} />
        
              <input type="submit" />
            </form>
          );
        }

  export default Form;  