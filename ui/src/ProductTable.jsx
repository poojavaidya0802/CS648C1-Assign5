import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} index={product.id} />);
  const borderedStyle = { border: '1px solid black', padding: 6 };
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={borderedStyle}>Name</th>
          <th style={borderedStyle}>Price</th>
          <th style={borderedStyle}>Category</th>
          <th style={borderedStyle}>ImageURL</th>
          <th style={borderedStyle}>Action</th>
          <th style={borderedStyle}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
function ProductRow({ product, deleteProduct, index }) {
  const borderedStyle = { border: '1px solid black', padding: 4 };
  let link;
  if (product.imageURL) {
    link = <Link to={`/image/${encodeURIComponent(product.imageURL)}`}>View</Link>;
  } else {
    link = <span>No Image Url added</span>;
  }
  return (
    <tr>
      <td style={borderedStyle}>{product.name}</td>
      <td style={borderedStyle}>
        $
        {product.price}
      </td>
      <td style={borderedStyle}>{product.category}</td>
      <td style={borderedStyle}>{link}</td>
      <td style={borderedStyle}><Link to={`/edit/${product.id}`}>Edit</Link></td>
      <td style={borderedStyle}><button type="button" onClick={() => { deleteProduct(index); }}>Delete</button></td>
    </tr>
  );
}