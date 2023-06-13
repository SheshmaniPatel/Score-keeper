var score=0;
var wicket=0;

 
function clickscore(num){
    score +=num;
    scoreRoot.render(<App/>);
}
 
function clickwicket(){
    wicket +=1;
    scoreRoot.render(<App/>);
}

const App =()=>(
    <>
    <h1>Score Keeper</h1>
    <h2>Score : {score}/{wicket}</h2>
    <div  >
        <button onClick={ ()=>clickscore(1)} >1</button>
        <button onClick={()=>clickscore(2)}>2</button>
        <button  onClick={()=>clickscore(3)}>3</button>
        <button onClick={()=>clickscore(4)}>4</button>
        <button  onClick={()=>clickscore(5)}>5</button>
        <button onClick={()=>clickscore(6)}>6</button>
        <button onClick={clickwicket}>Wicket</button>
    </div>
    </>
)

const scoreRoot=ReactDOM.createRoot(document.getElementById("root"));
scoreRoot.render(<App/>);