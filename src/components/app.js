import React from 'react';
import Table from './table';

const students = [{student: "Naruto",course: "Genjutsu", grade: 0,}, {student: "Sasuke",course: "SHuriken Jutsu", grade: 100}, {student: "Sakura" ,course: "Clone Jutsu", grade:100}]

export default () => ( 
<div className="container">
<h1>Student Grade Table </h1>
<Table data={students}/>
</div>);

