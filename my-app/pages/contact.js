'use client'
export default function Contact() {
    return(
        <div className="flex  flex-col content-center justify-center gap-10  ">
            <h1 className="text-4xl text-center m-4"> This is the sample Form</h1>
        <form className=" flex flex-col text-2xl gap-9 content-evenly mt-10" >
<div className="flex justify-evenly text-3xl gap-10">
    <label htmlFor="Name" >Name-</label>
<input type="text" name="name" placeholder="type your name" required></input>
</div>
<div className="flex justify-evenly text-3xl gap-10">
    <label htmlFor="email">Email-</label>
<input type="email" name="email" placeholder="type your email" required></input>
</div>
<div className="flex justify-evenly text-3xl gap-9">
    <label htmlFor="message">Message-</label>
<textarea type="text" name="message"  placeholder="type your message" required></textarea>
</div>
<div className="flex justify-evenly text-3xl">
    <button  className="p-2 m-2 text-2xl h-22 w-50 rounded-md bg-teal-300">SUBMIT</button></div>


        </form>
        </div>
    )
    
}