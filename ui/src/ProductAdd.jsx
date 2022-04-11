import React from 'react';
import PropTypes from 'prop-types';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      name: form.name.value, price: form.price.value ? form.price.value.substring(1) : '', category: form.category.value, imageURL: form.imageURL.value,
    };
      // eslint-disable-next-line react/destructuring-assignment
    const { createProduct } = this.props;
    createProduct(product);
    form.name.value = '';
    form.price.value = '$';
    form.category.value = '';
    form.imageURL.value = '';
  }
  
  render() {
    const subHead = {
      fontSize: 22,
      marginBottom: 15,
      borderBottom: '1px solid black',
      padding: 4,
    };
    const formFields = {
      width: '40%',
      float: 'left',
      margin: 20,
    };
    const pstyle = {
      padding: 0,
      margin: 0,
      fontSize: '14pt',
    };
    const fieldWidth = {
      width: '55%',
    };
    const btnStyle = {
      marginLeft: '20px', 
      height: 30, 
      marginTop: 10,
      width: 184,
      fontWeight: 70,
      backgroundColor: 'white'
    }
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <section>
          <div style={subHead}>
            <span>Add a new product to inventory</span>
          </div>
          <div>
            <div style={formFields}>
              <p style={pstyle}>Category</p>
              <select style={fieldWidth} id="list" name="category">
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets">Jackets</option>
                <option value="Sweaters">Sweaters</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div style={formFields}>
              <p style={pstyle}>Price Per Unit</p>
              <input style={fieldWidth} type="text" name="price" defaultValue="$" /> 
            </div>
            <div style={formFields}>
              <p style={pstyle}>Product Name</p>
              <input style={fieldWidth} type="text" name="name" />
            </div>
            <div style={formFields}>
              <p style={pstyle}>Image URL</p>
              <input style={fieldWidth} type="text" name="imageURL" />
            </div>
          </div>
        </section>
        <section>
          <button style={btnStyle} type="submit">Add Product</button>
        </section>
      </form>
    );
  }
}

  ProductAdd.propTypes = {
    createProduct: PropTypes.func.isRequired,
  };