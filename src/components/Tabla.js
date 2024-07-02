import React from 'react';
import './Tabla.css';

const Tabla = () => {
  return (
    <div className="tabla-container">
      <table className="tabla">
        <thead>
          <tr>
            <th>Talla genérica</th>
            <th>Talla en centímetros</th>
            <th>Talla en pulgadas </th>
          </tr>
        </thead>

        <tbody>
              <td>XS</td>
              <td>46, 47, 48, 49</td>
              <td>14"</td>
              
        </tbody>


        <tbody>
              <td>S</td>
              <td>50, 51, 52, 53</td>
              <td>15", 16"</td>
              
        </tbody>
        <tbody>
              <td> M </td>
              <td>54, 55, 56</td>
              <td>17", 18"</td>
              
        </tbody>

        <tbody>
              <td>L </td>
              <td>57, 58 59</td>
              <td>19", 20"</td>
              
        </tbody>

        <tbody>
              <td>XL</td>
              <td>60, 61</td>
              <td>21", 22"</td>
              
        </tbody>

        <tbody>
              <td>XXL</td>
              <td>+62</td>
              <td>+23"</td>
              
        </tbody>

      </table>
    </div>
  );
};

export default Tabla;
