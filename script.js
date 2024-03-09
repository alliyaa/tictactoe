
const gameBoard = []


function createCounter() {
let count = 0;
const cellClick = document.querySelectorAll('.cell');

cellClick.forEach((cell) => {

    
    cell.addEventListener('click', () => {
    
        addSymbol(count,cell);

    });
});

  return {
      increment: function() {
          count++;
      },
      decrement: function() {
          count--;
      },
      getCount: function() {
          return count;
      },
      reset: function() {
          count = 0;
      }
  };
}

// Create a counter instance
const counter = createCounter();





// counter.reset();
// console.log(counter.getCount()); 


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
        document.querySelector('.warning').innerHTML += "That spot is already filled by your opponent! Pick another spot";
        counter.decrement();
        counter.decrement();
      }
     
    

    
    }


    function winner()
    {


    }




// function createBoard()
// {
// for(let i =1; i<size; i++)
// {
//     con
// }

// }