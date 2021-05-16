import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
// import { Forms } from './Forms';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        emailjs.send('SERVICE', 'test_template', data, 'user_TJIpDPl9Uo4BzRuUyOBau')
          .then((result) => {
              console.log(result);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        // data.reset();
    }

    // const createFormInputs = () => {
    //     console.log(Forms);
    //     return Forms.map((formInput, i) => {
    //         return (
    //             <div key={i}>
    //                 <label>{formInput.label}</label>
    //                 <input defaultValue={formInput.defaultValue} type={formInput.type} name={formInput.name} {...register(formInput.name, formInput.requirements)}/>
    //             </div>
    //         )
    //     })
    // }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Contact Form</legend>
                {/* {createFormInputs()} */}
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
