export function AddTask() {
  let input = "";

  const addTask = (e) => {
    e.preventDefault();

    console.log(input.value);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
