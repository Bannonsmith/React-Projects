function Person(props) {
  return(
    <div class="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Tommy" age="7" />
    <Person name="Jim Bob" age="9" />
   </div>

);

ReactDOM.render(app,
   document.getElementById('#app'));
