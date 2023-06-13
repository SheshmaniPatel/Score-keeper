let score=0;
let wicket=0;

const App =()=>(
    <>
    <h1>Score Keeper</h1>
    <h2>Score : {score}/{wicket}</h2>
    <div  >
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>Wicket</button>
    </div>
    </>
)

const scoreRoot=ReactDOM.createRoot(document.getElementById("root"));
scoreRoot.render(<App/>);