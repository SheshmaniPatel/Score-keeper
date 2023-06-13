var score = 0;
var wicket = 0;
var ballwiseResult=[];

function clickscore(num) {
  if (wicket === 10) {
    return;
  }
  ballwiseResult.push(num);
  score += num;
  scoreRoot.render(<App />);
  console.log(ballwiseResult)
}

function clickwicket() {
  if (wicket === 10) {
    return;
  }
  ballwiseResult.push("W");
  wicket += 1;
  scoreRoot.render(<App />);
  console.log(ballwiseResult)
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

const App = () => (
  <>
    <h1>Score Keeper</h1>
    <h2>
      Score : {score}/{wicket}
    </h2>
    <AllButtons />
  </>
);

const scoreRoot = ReactDOM.createRoot(document.getElementById("root"));
scoreRoot.render(<App />);
