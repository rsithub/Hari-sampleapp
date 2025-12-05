import {connectDB} from "../lib/connectDB"
  import Contact from "../model/user"
export default async function handler(req, res) {
     await connectDB();
  if (req.method === "POST") {
    try {
      const data =await  req.body; 
      console.log("Received data:"+data);
const contact = await Contact.create({ name:data.name, email:data.email, message:data.message });
      res.status(201).json(contact);
      return res.status(200).json({
        success: true,
        message: "Data received successfully",
        data,
      });
    } catch (error) {
      console.error("API error:", error);
      return res.status(500).json({ success: false, error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

