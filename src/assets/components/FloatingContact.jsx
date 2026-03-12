import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaArrowUp, FaPlus } from "react-icons/fa";

function FloatingContact() {

const [open, setOpen] = useState(false);

const phone = "918595650016";

const whatsappURL =
`https://wa.me/${phone}?text=${encodeURIComponent(
"Hello, I want to book Uttarakhand tour package"
)}`;

const scrollTop = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

return (

<div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

{open && (

<a href={whatsappURL}
target="_blank"
className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition">

<FaWhatsapp/>

</a>

)}

{open && (

<a href="tel:+918595650016"
className="bg-blue-500 text-white p-3 rounded-full hover:scale-110 transition">

<FaPhone/>

</a>

)}

{open && (

<button
onClick={scrollTop}
className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition">

<FaArrowUp/>

</button>

)}

<button
onClick={()=>setOpen(!open)}
className="bg-black text-white p-4 rounded-full shadow-xl hover:rotate-90 transition">

<FaPlus/>

</button>

</div>

);

}

export default FloatingContact;
