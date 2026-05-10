import React, { useState } from "react";

const Contact = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    description:'',
  });

  const handleChange = (e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch(import.meta.env.VITE_SERVER_URI,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({text:formData})
      });

      if(response.ok){
        console.log('Message sent sucessfully');
        setFormData({name:'',email:'',description:''});
      }
    }
    catch(error){
      console.log(`Error sending message`,error)
    }

  }
  return (
    <div className="mx-auto my-10 rounded-xl bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold leading-none tracking-tight text-center">
          Contact Me
        </h3>
        <p className="text-sm text-muted-foreground text-center">
          Send a message and I'll get back to you.
        </p>
      </div>

      <form
        className="p-4 sm:p-6 sm:pt-0 flex flex-col gap-4"
        onSubmit={handleSubmit}
        
        >
        <div className="space-y-2">
          <label
           
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Name
          </label>
          <input
            name="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label  className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            name="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">
            Message
          </label>
          <textarea
            name="description"
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type='text'
            value={formData.description}
            onChange={handleChange}
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-black text-white hover:bg-black/90 h-10 py-2 px-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}


export default Contact;
