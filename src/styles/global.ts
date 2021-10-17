import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');

  body {
    margin: 20px auto;
    max-width: 1000px;
    font-family: 'Noto Sans Mono', monospace;
    background-color: #2196f3;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .button-style {
    border: none;
    border-radius: 5px;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    text-transform: capitalize;
    font-family: 'Noto Sans Mono', monospace;
  }

  .blue {
    background-color: #03a9f4;
  }

  .green {
    background-color: #2bce32;
  }

  .red {
    background-color: #f44336;
  }

  .box {
    border: 8px;
    padding: 20px;
    border-radius: 7px;
    max-width: 900px;
    margin: auto;
    margin-bottom: 20px;
    background-color: #fff;
  }

  .box-color-1 {
    border-color: #bbc1c3;
    border-style: dotted;
  }

  .box-color-2 {
    border-color: #dcdcdc;
    border-style: dashed;
  }

  .product-title {
    font-size: 18px;
  }

  .spinner {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #16d47b;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
