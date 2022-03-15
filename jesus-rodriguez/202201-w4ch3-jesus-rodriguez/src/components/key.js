export function Key({ addNum, nums }) {
  const handleClick = (num) => {
    // setNums({ ...newTask, name: ev.target.value });
    console.log(num);
  };
  return (
    <>
      <li>
        <button onClick={() => handleClick(nums[1])} class="key">
          {nums[1]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[2])} class="key">
          {nums[2]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[2])} class="key">
          {nums[3]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[3])} class="key">
          {nums[4]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[4])} class="key">
          {nums[5]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[5])} class="key">
          {nums[6]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[6])} class="key">
          {nums[7]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[7])} class="key">
          {nums[8]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[8])} class="key">
          {nums[9]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick(nums[9])} class="key">
          {nums[0]}
        </button>
      </li>
      <li>
        <button onClick={() => handleClick('delete')} class="key big">
          delete
        </button>
      </li>
    </>
  );
}
