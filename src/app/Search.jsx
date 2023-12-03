import { useRef } from 'react'; // reactからuseRefをインポート

export default function Search({ onSearch }) { // Search関数をエクスポート
  const inputRef = useRef(); // useRefを使用してinputRefを定義

  const handleSubmit = (event) => { // handleSubmit関数を定義
    event.preventDefault(); // デフォルトのイベントを防止
    onSearch(inputRef.current.value); // onSearch関数を呼び出し、inputRefの現在の値を渡す
  };

  return (
    // form要素を返す、onSubmitにはhandleSubmit関数を指定
    <form onSubmit={handleSubmit} className="mb-8 w-1/2 mx-auto"> 
      {/* input要素を返す、refにはinputRefを指定 */}
      <input ref={inputRef} type="text" name="keyword" placeholder='画像を探す' className="input input-bordered w-full" />
      {/* submitボタンを返す */}
      <button type="submit" className="mt-4 btn btn-outline btn-success w-full"> 
        submit
      </button>
    </form>
  );
}