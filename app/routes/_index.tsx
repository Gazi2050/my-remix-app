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
    <div>
      <div>
        <h1>LogIn</h1>
        <Form method="post">
          <div>
            <label htmlFor="name">Name</label>
          </div>
        </Form>
      </div>
    </div>
  );
}
