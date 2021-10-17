/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented, amountAdded } from './features/counter/counter-slice';
import { useFetchProductsQuery } from './features/products/products-api-slice';
import { globalStyles } from './styles/global';

const titleStyle = css({
  color: '#000000',
  textTransform: 'capitalize',
  fontSize: '30px'
});

const customSelect = css({
  padding: '10px',
  borderRadius: '5px',
  display: 'inline-block',
  width: '100%',
  backgroundColor: '#fff',
  fontSize: '15px'
});

export default function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numProducts, setNumProducts] = useState(0);
  const { data = [], isFetching } = useFetchProductsQuery(numProducts);
  // const { data = [], isFetching } = useFetchProductsQuery();

  function handleClickOne() {
    dispatch(incremented());
  }

  function handleClickTwo() {
    dispatch(amountAdded(3));
  }

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <div className="text-center box box-color-1">
        <h3 css={titleStyle}>counter : {count}</h3>
        <button
          className="button-style blue"
          type="button"
          onClick={handleClickOne}
        >
          click counter first
        </button>
        <button
          className="button-style green"
          type="button"
          onClick={handleClickTwo}
        >
          click counter second
        </button>
      </div>

      <div className="box box-color-2">
        <select
          css={customSelect}
          value={numProducts}
          onChange={(e) => {
            setNumProducts(Number(e.target.value));
          }}
        >
          <option value={0}>-- Filter Product --</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <h3 className="text-center">List Products Fetched : {data.length}</h3>

        {isFetching && <div className="spinner" />}
        {!isFetching && (
          <table>
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Price</th>
                <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {data.map((product) => (
                <tr key={product.id}>
                  <td className="product-title">{product.title}</td>
                  <td className="text-left">{product.price}</td>
                  <td>
                    <img src={product.image} width={150} height={150} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </React.Fragment>
  );
}
