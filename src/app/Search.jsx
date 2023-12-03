import { useState } from 'react';

// Search関数コンポーネントをエクスポートします。onSearchは親コンポーネントからのpropsです。
export default function Search({ onSearch }) {
  // keywordの初期値を空文字列に設定し、setKeyword関数で更新します。
  const [keyword, setKeyword] = useState('');

  // フォームの送信を処理する関数です。
  const handleSubmit = (event) => {
    // フォームのデフォルトの送信動作を防ぎます。
    event.preventDefault();
    // onSearch関数を呼び出し、keywordを引数として渡します。
    onSearch(keyword);
  };

  // keywordの値を更新する関数です。
  const handleKeywordChange = (event) => {
    // イベントのターゲットから値を取得し、setKeyword関数でkeywordを更新します。
    setKeyword(event.target.value);
  };

  // フォームをレンダリングします。
  return (
    // フォームの送信時にhandleSubmit関数を呼び出します。
    <form onSubmit={handleSubmit} className="mb-8 w-1/2 mx-auto">
      // テキスト入力フィールドの値が変更されたときにhandleKeywordChange関数を呼び出します。
      <input type="text" name="keyword" placeholder='画像を探す' onChange={handleKeywordChange} className="input input-bordered w-full" />
      // 送信ボタンをレンダリングします。
      <button type="submit" className="mt-4 btn btn-outline btn-success w-full">
        submit
      </button>
    </form>
  );
}