'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ProductType, getProducts } from './service';
import ReactStars from 'react-rating-stars-component';

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  console.log('products', products);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Shopping</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>

      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">Shopping</h1>
        </div>
      </header>

      <main className="container mx-auto mt-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-500">
                {product.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <div className="w-80 h-10">
                <ReactStars
                  value={product.rating}
                  activeColor="#ffd700"
                  isHalf={true}
                  size={30}
                  edit={false}
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded float-right">
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
