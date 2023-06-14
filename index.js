var score = 0;
var wicket = 0;
var ballwiseResult = [];
var hit = 0;
var inputRef = React.createRef();

function clickscore(num) {
  hit = num;
  scoreRoot.render(<App />);
}

function clickwicket() {
  hit = "W";
  scoreRoot.render(<App />);
}

const AllButtons = () => (
  <div>
    <button onClick={() => clickscore(0)}>0</button>
    <button onClick={() => clickscore(1)}>1</button>
    <button onClick={() => clickscore(2)}>2</button>
    <button onClick={() => clickscore(3)}>3</button>
    <button onClick={() => clickscore(4)}>4</button>
    <button onClick={() => clickscore(5)}>5</button>
    <button onClick={() => clickscore(6)}>6</button>
    <button onClick={clickwicket}>Wicket</button>
  </div>
);

const Overballs = () => (
  <div>
    {ballwiseResult.map((result, i) => (
      <>
        {i % 6 === 0 ? <br /> : null}
        <span key={i}>{result === 0 ? <strong>.</strong> : result}</span>
        &nbsp; &nbsp; &nbsp;
      </>
    ))}
  </div>
);

function handelEvent(event) {
  event.preventDefault();
  if (hit == "W") {
    wicket += 1;
  } else {
    score += hit;
  }
  ballwiseResult.unshift(<span>{`${hit} : ${inputRef.current.value}`}</span>);
  // console.log(inputRef.current.value)

  inputRef.current.value = "";
  hit = 0;
  scoreRoot.render(<App />);
}

const Formdata = () => (
  <form onSubmit={handelEvent}>
    <input value={hit} />
    <input placeholder="Add a comment here" ref={inputRef} />
    <button>Submit</button>
  </form>
);

const App = () => (
  <>
    <h1>Score Keeper</h1>
    <h2>
      Score : {score}/{wicket}
    </h2>
    <AllButtons />
    <br />
    <Formdata />
    <hr />

    {ballwiseResult.map((res, index) => (
      <p key={index}>{res} </p>
    ))}
  </>
);

const scoreRoot = ReactDOM.createRoot(document.getElementById("root"));
scoreRoot.render(<App />);
