export default function Syntax() {
  return (
    <section>
      <div className="grid w-4/5 grid-cols-2 items-center py-32">
        <div>
          <img
            width={576}
            height={464}
            src="/images/illustration-laptop-desktop.svg"
            alt=""
          />
        </div>
        <div className="w-full px-10 2xl:mx-40">
          <h2 className="text-3xl font-bold text-blue-950">
            Free, open, simple
          </h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntaxe highlighting. RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean is relatively easy to learn.
          </p>
          <h2 className="text-3xl font-bold text-blue-950">Powerful tooling</h2>
          <p>
            Batteries included. We buit a simple and straightforward CLI tool
            that makes customization and deploy a breeze, but capable of
            producing even most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}
