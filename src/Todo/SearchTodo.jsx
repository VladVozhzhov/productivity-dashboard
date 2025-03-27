const SearchTodo = ({ search, setSearch }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="text-xl mx-auto w-96 border-2 p-2 m-4 rounded-2xl"
    >
        <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 flex items-center px-3 mx-auto"
        />
    </form>
  )
}

export default SearchTodo
