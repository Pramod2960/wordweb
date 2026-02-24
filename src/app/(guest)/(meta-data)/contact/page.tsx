// "use client";

// import { sendEmail } from "@/actions/send-mail";
// import toast from "react-hot-toast";
// import SubmitButton from "./sumbit-btn";
// import InputForm from "./input";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className=" mb-20 mt-10 sm:mb-28 px-10 mx-auto 
//        text-center justify-center 
//        md:w-[50rem]"
//     >
//       <h2 className="text-2xl items-center">Contact Us</h2>

//       <form
//         className="flex flex-col mt-10"
//         action={async (formData) => {
//           //server actions
//           const {error} = await sendEmail(formData);
//           if(error) {
//             toast.error("Something went wrong");
//             return;
//          }
//          toast.success("Email sent successfully");
//         }}     
//       >
//         <InputForm />
//         <SubmitButton />

//       </form>
//     </section>
//   );
// };

// export default Contact;

import React from 'react'

function Contact() {
  return (
    <div>Contact</div>
  )
}

export default Contact
