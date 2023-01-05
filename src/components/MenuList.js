import React from 'react'

import Table from 'react-bootstrap/Table'

const MenuList = () => {
  return (
    <div>
      <Table responsive='sm' className='table'>
        <thead>
          <tr>
            <th scope='row'>Day of the Week</th>
            <th scope='col'>Date</th>
            <th scope='col'>Entre</th>
            <th scope='col'>Vegetable</th>
            <th scope='col'>Starch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Sunday</th>
            <td>3/21/2021</td>
            <td>Roast</td>
            <td>Honey Glazed Carrot</td>
            <td>Potatos</td>
          </tr>
          <tr>
            <th scope='row'>Monday</th>
            <td>3/22/2021</td>
            <td>Out</td>
            <td>Chris' Last Dinner</td>
            <td> at Home</td>
          </tr>
          <tr>
            <th scope='row'>Tuesday</th>
            <td>3/23/2021</td>
            <td>Chicken and Wine Sauce</td>
            <td>Green Beans</td>
            <td>Baghette</td>
          </tr>

          <tr>
            <th scope='row'>Wednesday</th>
            <td>3/24/2021</td>
            <td>Baked Pork</td>
            <td>Apple Sauce</td>
            <td>Noodles</td>
          </tr>
          <tr>
            <th scope='row'>Thursday</th>
            <td>3/25/2021</td>
            <td>Chicken Stir Fry</td>
            <td>Pepper and Pineapple</td>
            <td>Ramen Noodles</td>
          </tr>
          <tr>
            <th scope='row'>Friday</th>
            <td>3/26/2021</td>
            <td>Pizza</td>
          </tr>
          <tr>
            <th scope='row'>Saturday</th>
            <td>3/27/2021</td>
            <td>Out for Dinner</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default MenuList
