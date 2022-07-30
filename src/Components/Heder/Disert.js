import style from './Disert.module.css'
import React from "react";
import { useForm,SubmitHandler } from 'react-hook-form';



export default function Disert() { 
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

    return (
     <div className={style.disert}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.window}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
      </form>
     </div>
  );
}