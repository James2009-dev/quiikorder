import { Button, TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

//there should always be a one line gap between import and  export default function and 
export default function Login () {
           return (
          <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-6 lg:py-12 lg:px-16">
            <div className="w-full md:w-[350px] max-h-[400px] flex flex-col gap-8 rounded md:shadow-md 
            md:px-3 md:py-4">
               <div>
                <h1 className="text-3xl font-semobold text-center">Log In</h1>
                <p className="text-blue-300 text-center">Create an Account or Sign in</p>
               </div>
               <form className="justify-items-center">
                <div className="w-full mb-2">
                  <TextField 
                  placeholder="@Emmanuel.com"
                  type="email"
                  className="w-full"/>
                  <button className="text-white bg-blue-400 rounded-md w-full hover:opacity-40 p-3 mt-2">Continue</button>
                </div>
               </form>
               <form>
                <p className="text-center text-gray-400" >Or sign in with</p>
               </form>
               <form>
                <button type="submit" className="w-full h-[45px] rounded-md shadow-md hover:shadow-blue-300 cursor-pointer
                 flex justify-center items-center gap-3 md:w-full md:hover:shadow-md md:rounded-md ">
                  <FcGoogle className="text-2xl"/>
                  <span className="text-gray-500 font-semibold">Sign in with Google</span>
                </button>
               </form>
            </div>
          </main>
    )
}
// checkout chakra and shadcn ui for coding easy