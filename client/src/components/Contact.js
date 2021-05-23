import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { TextField, Button, Slide } from '@material-ui/core';

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
            <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit>
                <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Contact Form</legend>
                    {/* <label>Name</label> */}
                    {/* <input defaultValue="Testing" type="text" name="username" {...register("username")}/> */}         
                    {/* <label>Subject</label>
                    <input defaultValue="Subject" type="text" name="subject" {...register("subject")}/> */}
                    {/* <label>Email</label>
                    <input defaultValue="example@email.com" type="email" name="email" {...register("email")}/> */}
                    {/* <label>Message</label>
                    <textarea defaultValue="Have any questions?" name="message" {...register("message")}/> */}
                    {/* <input type="submit" value="Submitting"></input> */}
                    <p>
                    <TextField id="standard-basic" label="Name" name="username" type="text" {...register("username")}/>
                    </p>
                    <p>
                    <TextField id="standard-basic" label="Email" name="email" type="email" {...register("email")}/>   
                    </p>
                    <p>
                    <TextField id="standard-basic" label="Subject" name="subject" type="text" {...register("subject")}/>
                    </p>
                    <p>             
                    <TextField multiline rows={4} style={{width: 600}} id="standard-multiline-static" label="Message" name="message" type="text" placeholder="Have any questions?" {...register("message")}/>           
                    </p>
                    <p>     
                    <Button type="submit">Submitting</Button>
                    </p>
                </fieldset>
                </form>
            </Slide>
        </div>
    )
}

export default Contact;
