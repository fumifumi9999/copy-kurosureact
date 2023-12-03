"use client"
// 必要なフックとコンポーネントをインポート
import { useState } from 'react';
import Search from './Search';
import DisplayImages from './DisplayImages';
import Count from './Count';

// メインのHomeコンポーネント
export default function Home() {
  // フェッチしたデータを保存するためのステート
  const [fetchData, setFetchData] = useState([]);
  const [count, setCount] = useState(0);

  // 検索とデータのフェッチを処理する関数
  const handleSearch = async (keyword) => {
    // Pixabay APIのエンドポイントURL
    const endpointURL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${keyword}&image_type=photo`;

    // APIからデータをフェッチ
    const res = await fetch(endpointURL);
    // レスポンスをJSONにパース
    const data = await res.json();
    // 必要なデータを抽出
    const fetchData_raw = data.hits;

    // フェッチしたデータでステートを更新
    setFetchData(fetchData_raw);

    // カウントを増やす
    setCount((prev) => prev + 1)
  };

  // コンポーネントのレンダリング
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 w-1/2 mx-auto text-center">My pix</h1>
      <Count count={count} />
      <Search onSearch={handleSearch} />
      <DisplayImages images={fetchData} />
    </div>
  );
}
