const gameBoard=[];
const cellClick = document.querySelectorAll('.cell');


function createCounter() {
let count = 0;
cellClick.forEach((cell) => {

    cell.addEventListener('click', () => {
        addSymbol(count,cell);

    });
});

  return {
      increment() {
          count++;
      },
      decrement() {
          count--;
      },
      getCount() {
          return count;
      },
      reset() {
          count = 0;
      }
  };
}
const counter = createCounter();


function addSymbol(count,cell) {
  
       let index=Number(cell.id);
 
        document.querySelector('.warning').innerHTML="";
        if(cell.innerHTML=="")
      {
        counter.increment();
       
        if(count%2==0)
        {
        cell.innerHTML += "X";
       
        gameBoard[index]="X";
       
        }
        else
        {
            cell.innerHTML+="O"
            gameBoard[index]="O";
        }
      }
         
      else
      {
        document.querySelector('.warning').innerHTML += "That spot is already filled! Pick another spot";
        document.querySelector('.warning').classList.add('winclass');
     
      }  

    winner()
    }


    function winner()
    {

        const winnerdiv = document.querySelector('.winner');
        winnerdiv.innerHTML="";
        winnerdiv.classList.add('winclass');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        let Full=false;
      
        for (const combination of winningCombinations) {
            
            const [a, b, c] = combination;
            const cellA = gameBoard[a];
            const cellB = gameBoard[b];
            const cellC = gameBoard[c];
          
            if (cellA && cellB && cellC && cellA === cellB && cellA === cellC && cellB===cellC && winnerdiv.innerHTML==="") {
                console.log(winnerdiv.innerHTML);
                winnerdiv.innerHTML += cellA + " is the winner";  
                Full=true;
                console.log(winnerdiv.innerHTML);
            }
           
            }

       
    let gameBoardFill=true;
    for(let i=0; i<9; i++)
    {
      if(gameBoard[i]===undefined)
      {
          gameBoardFill=false;         
      }

    }
 
    if(gameBoardFill && Full===false)
    {
     winnerdiv.innerHTML+="It's a draw!";
    
    }
   
}



function clearBoard()
{
    counter.increment();
    counter.increment();
    document.querySelector('.winner').innerHTML="";
    gameBoard.fill(undefined);
    cellClick.forEach((cell) => {
        cell.innerHTML="";
      
          });
        
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    clearBoard();
});


