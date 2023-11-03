/* eslint-disable @next/next/no-img-element */
export function Design() {
  return (
    <section className="text-red  relative flex  justify-center overflow-hidden  py-8">
      <div className="w-4/5 overflow-x-hidden pb-40">
        <h2 className="my-14 text-center text-2xl font-bold text-blue-950 ">
          Designed for the future
        </h2>
        <ul>
          <li className="w-[700px]">
            <h3 className="text-xl font-bold text-blue-950">
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceeding intuitive interface whitch lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the look of a blog.
            </p>
            <h3 className="text-xl font-bold text-blue-950">
              Robust content management
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, amet consectetur adipisci fugit similique voluptate
              iste odit, perspiciatis dolorem vel labore, quae quis doloremque
              illo repellat atque quas saepe odio?
            </p>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="absolute left-[70%] top-[10%] hidden md:block"
          width={500}
          height={500}
          src="/images/illustration-editor-mobile.svg"
          alt="teste"
        />
      </div>
    </section>
  );
}
