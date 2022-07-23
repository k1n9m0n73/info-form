export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
      Please fill in your details below
      </p>

      /**<p>
        You can find the code for this project on GitHub at{" "}
        <a href="https://github.com/netlify-templates/nextjs-toolbox">
          https://github.com/netlify-templates/nextjs-toolbox
        </a>
        ! Happy coding!
      </p>*/
    </>
  );
}
