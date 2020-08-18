function Person() {
  return(
    <div class="person">
      <h1>Little Tommy</h1>
      <p>Your Age: 7</p>
    </div>
  );
}

ReactDOM.render(<Person />,
   document.querySelector('#p1'));
