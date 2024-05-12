export default function Search({ searchOnChange }) {
  return (
    <>
      <form action="" method="get" className="">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="input input-bordered rounded-lg text-sky-700 w-40"
          onChange={(event) => searchOnChange(event)}
        />
      </form>
    </>
  );
}
