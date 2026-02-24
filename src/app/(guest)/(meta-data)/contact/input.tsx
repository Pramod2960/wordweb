import { useFormStatus } from "react-dom";

const InputForm   = () => {

    const status = useFormStatus();
    return ( 
        <>
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="px-4 h-14 rounded-lg border border-black/10"
          disabled={status.pending}
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
          disabled={status.pending}
       />
        </>
     );
}
 
export default InputForm  ;