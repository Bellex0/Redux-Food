import React, { Component } from 'react';

const Food = ({topping, removeFood }) => <li>{topping}
<button onClick={removeFood}>❌</button>

</li>





export default Food


