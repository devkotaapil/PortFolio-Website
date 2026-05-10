import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto my-10 rounded-xl bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold leading-none tracking-tight text-center">
          Contact Me
        </h3>
        <p className="text-sm text-muted-foreground text-center">
          Send a message and I'll get back to you.
        </p>
      </div>

      <form
        className="p-4 sm:p-6 sm:pt-0 flex flex-col gap-4"
        action="mailto:devkotaapil194@gmail.com"
        method="post"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Message
          </label>
          <textarea
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            id="message"
            name="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-black text-white hover:bg-black/90 h-10 py-2 px-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
