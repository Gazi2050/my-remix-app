import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Log In</h1>
        <Form method="post">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 p-3 transition duration-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 p-3 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 p-3 transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}