import React from 'react'

export const fetchProducts = () => {
  try {
    const products = fetch(
      'https://api.wizybot.com/products/demo-product-list',
    ).then((response) => response.json())
    return products
  } catch (error) {
    console.error('Error fetching products', error)
  }
}
