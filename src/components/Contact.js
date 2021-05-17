import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();

    const onSubmit = (data) => {

        emailjs.send('SERVICE', 'test_template', data, 'user_TJIpDPl9Uo4BzRuUyOBau')
          .then((result) => {
              console.log(result);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Contact Form</legend>
                <label>Name</label>
                <input defaultValue="Testing" type="text" name="username" {...register("username")}/>
                <label>Subject</label>
                <input defaultValue="Subject" type="text" name="subject" {...register("subject")}/>
                <label>Email</label>
                <input defaultValue="example@email.com" type="email" name="email" {...register("email")}/>
                <label>Message</label>
                <textarea defaultValue="Have any questions?" name="message" {...register("message")}/>
                <input type="submit" value="Submitting"></input>
            </fieldset>
            </form>
        </div>
    )
}

export default Contact;
