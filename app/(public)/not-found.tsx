export default function NotFound() {
  return (
    <div className="px-8">
      <div className="tc mx-auto mb-32 mt-32 max-w-prose">
        <h2 className="mb-1 block font-serif text-4xl font-bold leading-tight text-primary">
          Not Found
        </h2>
        <p className="mid-gray leading-tight">
          Could not find requested resource
        </p>
      </div>
    </div>
  );
}
