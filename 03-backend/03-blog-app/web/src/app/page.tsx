"use client";

import { useState, useEffect } from "react";

interface Blog {
  id: number;
  userId: number;
  title: string;
  slug: string;
  category: string;
  content: string;
  description: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        getSearchResult(searchTerm);
      } else {
        setSearchResult(null);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  async function getSearchResult(text: string) {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
      const response = await fetch(
        `http://localhost:8000/blogs?search=${text}`
      );
      const { data } = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function renderContent() {
    if (isLoading) return <p>Loading...</p>;
    if (searchResult === null || !searchTerm.trim()) return null;
    if (searchResult.length === 0) return <p>Data not found</p>;

    return searchResult.map((item) => (
      <article key={item.id}>
        <h2>{item.title}</h2>
      </article>
    ));
  }

  return (
    <main>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {renderContent()}
    </main>
  );
}
