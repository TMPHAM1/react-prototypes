import React from 'react';


export default (props) => {
    const tableRows = props.data.map((item, index) => { console.log(item); return; });
    console.log(tableRows);
  return  (<table className="table">
        <thead className="thead-inverse">
        <tr>
        <th>Name </th>
        <th>Course</th>
        <th>Grade </th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Naruto</td>
                <td>Genjutsu</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Sasuke</td>
                <td>Shuriken Jutsu</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Sakura</td>
                <td>Clone Jutsu</td>
                <td>100</td>
            </tr>
        </tbody>
        </table>)
       
}
