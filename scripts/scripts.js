
//var board = [[8],[8],[8],[8],[8],[8],[8],[8]];
var board = {};
const squareNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


// const piecesPicDict = {};
// ["w_pawn"] =  "url('images/chess/w_pawn.png')";
// ["w_rook"] =  "url('images/chess/w_rook.png')";
// ["w_knight"] =  "url('images/chess/w_knight.png')";
// ["w_bishop"] =  "url('images/chess/w_bishop.png')";
// ["w_king"] =  "url('images/chess/w_king.png')";
// ["w_queen"] =  "url('images/chess/w_queen.png')";

// ["b_pawn"] =  "url('images/chess/b_pawn.png')";
// ["b_rook"] =  "url('images/chess/b_rook.png')";
// ["b_knight"] =  "url('images/chess/b_knight.png')";
// ["b_bishop"] =  "url('images/chess/b_bishop.png')";
// ["b_king"] =  "url('images/chess/b_king.png')";
// ["b_queen"] =  "url('images/chess/b_queen.png')";

init();

// Initialize the chess board with <div> for each mark and place chess pieces out
function init()
{
    for (let i = 8; i > 0; i--)
    {
        for (let k = 0; k < 8; k++) 
        {
            let mark = squareNames[k] + i;
            let div = document.createElement("div");
            div.id = mark;
            
            div.style.width = "98px";
            div.style.height = "98px";
            div.style.cssFloat = 'left';
            div.style.border = 'solid 1px';
            
            //div.addEventListener('ondrop', drop_handler);
            document.getElementById("canvas").appendChild(div);
            let piece = {
                mark: mark,
                chessPiece: "",
                pieceDiv: div,
            };
          
            initPiece(mark, piece);

            //board[i-1][k] = piece;
            board[mark] = piece;
        }
    }
}



function initPiece(mark, piece)
{
    switch(mark)
    {
        // White pieces
        case 'a2':  case 'b2':  case 'c2':
        case 'd2':  case 'e2':  case 'f2':
        case 'g2':  case 'h2':     
        let div = document.createElement("backgroundImage");
        div.draggable = true;
        div.id = "w_pawn";
        div.backgroundImage = "url('images/chess/w_pawn.png')";

        document.getElementById(mark).style.backgroundImage = div.backgroundImage;
        piece.pieceDiv = div;
        //document.getElementById(mark).style.backgroundImage = "url('images/chess/w_pawn.png')";
        piece.chessPiece = "w_pawn";
        break;
        case 'a1': case 'h1':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/w_rook.png')";
        piece.chessPiece = "w_rook";
        break;
        case 'b1': case 'g1':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/w_knight.png')";
        piece.chessPiece = "w_knight";
        break;
        case 'c1': case 'f1':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/w_bishop.png')";
        piece.chessPiece = "w_bishop";
        break;
        case 'd1':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/w_king.png')";
        piece.chessPiece = "w_king";
        break;
        case 'e1':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/w_queen.png')";
        piece.chessPiece = "w_queen";
        break;
        // Black pieces
        case 'a7': case 'b7': case 'c7': 
        case 'd7': case 'e7': case 'f7':
        case 'g7': case 'h7':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_pawn.png')";
        piece.chessPiece = "b_pawn";
        break;  
        case 'a8': case 'h8':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_rook.png')";
        piece.chessPiece = "b_rook";
        break;
        case 'b8': case 'g8':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_knight.png')";
        piece.chessPiece = "b_knight";
        break;
        case 'c8': case 'f8':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_bishop.png')";
        piece.chessPiece = "b_bishop";
        break;
        case 'd8':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_king.png')";
        piece.chessPiece = "b_king";
        break;
        case 'e8':
        document.getElementById(mark).style.backgroundImage = "url('images/chess/b_queen.png')";
        piece.chessPiece = "b_queen";
        break;
    }
}


// function drop_handler(ev)
// {
//     console.log('here');
//     console.log(ev);
//     ev.preventDefault();
//     document.getElementById(ev.target.id).style.backgroundImage = null;


//     var data = ev.dataTransfer.getData(evt.target.id);
//     ev.target.appendChild(document.getElementById(data));

//     console.log(evt.target.id);
// }

document.addEventListener("drop", function(event) {
    event.preventDefault();

    event.target.style.backgroundImage = "url('images/chess/w_rook.png')";
  // var data = event.dataTransfer.getData("Text");
    //event.target.appendChild(document.getElementById(data));
    
  });

