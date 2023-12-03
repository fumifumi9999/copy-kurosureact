import { useState } from 'react';

export default function Search({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(keyword);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-1/2 mx-auto">
      <input type="text" name="keyword" placeholder='画像を探す' onChange={handleKeywordChange} className="input input-bordered w-full" />
      <button type="submit" className="mt-4 btn btn-outline btn-success w-full">
        submit
      </button>
    </form>
  );
}