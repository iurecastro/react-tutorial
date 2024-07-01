
const App = () => {

  const handleClick = () =>{
    alert("click");
  };

  const handleChange = (event) =>{
    console.log(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form was submitted');
  };

  return (
    <>
    <form onSubmit={handleSubmit}> 

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <button type="submit">Submit</button>

    </form>


    <input type="text" onChange={handleChange} />
    <button onClick={handleClick}>Click me</button>
    <button onClick={(event) => alert("test")}>Click me small event</button>
    </>

  );
};

export default App;