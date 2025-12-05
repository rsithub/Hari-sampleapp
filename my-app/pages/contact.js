'use client'

import { useState } from "react";

export default function Contact() {
    const [name,set_name]=useState("");
    const [email,set_email]=useState("");
    const [message,set_message]=useState("");
    
async   function submit_handler(e) {
        e.preventDefault();
        const data={
            name:name,
            email:email,
            message:message
        }
        console.log("this is the data"+data)
        const a=await fetch("/api/contact",{method: "POST",
            headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)}); 
    }
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl text-center mb-10">
                This is the sample Form
            </h1>

            <form className="flex flex-col gap-6 w-full max-w-md text-xl">

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-2xl font-semibold">Name</label>
                    <input 
                        className="border p-3 rounded-md" 
                        type="text" 
                        name="name" 
                        placeholder="type your name" 
                        required 
                        onChange={(e)=>{set_name(e.target.value)
                            console.log(e.target.value)}
                        }
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-2xl font-semibold">Email</label>
                    <input 
                        className="border p-3 rounded-md" 
                        type="email" 
                        name="email" 
                        placeholder="type your email" 
                        required 
                          onChange={(e)=>{set_email(e.target.value)
                            console.log(e.target.value)}
                        }
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-2xl font-semibold">Message</label>
                    <textarea 
                        className="border p-3 rounded-md h-32 resize-none" 
                        name="message"  
                        placeholder="type your message" 
                        required
                          onChange={(e)=>{set_message(e.target.value)
                            console.log(e.target.value)}
                        }
                    ></textarea>
                </div>

                {/* Submit */}
                <button  onClick={submit_handler}
                    className="p-3 mt-4 text-2xl rounded-md bg-teal-400 hover:bg-teal-500 transition"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}
