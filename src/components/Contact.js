import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Contact Form</legend>
                <label>Name</label>
                <input defaultValue="Testing" type="text" {...register("username", {required: true})}/>
                <label>Email</label>
                <input defaultValue="example@email.com" type="email" {...register("useremail", {required: true})}/>
                <label>Message</label>
                <textarea defaultValue="Have any questions?" {...register("message", {required: true})}/>

                <input type="submit" value="Submitting"></input>
            </fieldset>
            </form>
        </div>
    )
}

export default Contact;
