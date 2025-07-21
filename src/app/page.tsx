import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Welcome to my blog!</h1>
      <p className="text-[16px]">This is a Next.js blog.</p>
      <div className="mt-8">
        <LoginLink className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Login</LoginLink>
        <RegisterLink className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</RegisterLink>
      </div>
    </div>
  );
}

// after proper login the user will be having the access token (JWT) in the browser cookies



// 1. Client - client components - these are the components that run in the browser
// 2. Middleware - we can run something before we do other things
// 3. Server - server components - these are the components that run on the server (server components, server actions, route handlers(API)))