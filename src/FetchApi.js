import React from "react";
import { useState, useEffect } from "react";

function FetchApi() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="product-list">
      <div className="product-preview">
        <h2 id="title">LIST OF CRYPTO</h2>
        <input
          type="text"
          placeholder="Search coin name or symbol here . . ."
          className="search-box"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <table>
          <thead>
            <tr>
              <th>
                <h2>SYMBOL</h2>
              </th>
              <th>
                <h2>NAME</h2>
              </th>
            </tr>
          </thead>
          {products
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => (
              <tbody>
                <tr>
                  <td>
                    <p>{product.symbol}</p>
                  </td>
                  <td>
                    <p>{product.name}</p>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export default FetchApi;
