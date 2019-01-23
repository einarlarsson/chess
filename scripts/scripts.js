
var board = [[8],[8],[8],[8],[8],[8],[8],[8]];
const squareNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

init();

// Initialize the chess board with <div> for each mark and place chess pieces out
function init()
{

    for (let i = 8; i > 0; i--)
    {
        for (let k = 0; k < 8; k++) {

            let mark = squareNames[k] + i;
            let div = document.createElement("div");
            div.id = mark;

            div.style.width = "98px";
            div.style.height = "98px";
            div.style.cssFloat = 'left';
            div.style.border = 'solid 1px';
            div.addEventListener('click', boardClick);
            document.getElementById("canvas").appendChild(div);

            let boardMark = {

                mark: mark,
                chessPiece: "",
                theDiv: div,

            };

            board[i-1][k] = boardMark;
            document.getElementById(mark).style.backgroundImage = "url('images/chess/b_king.png')";
        }
    }






   // nodes.removeChild('')
    console.log(document.getElementById('a1'));
   // console.log(board);
    //initPieces();

}

function placePieces()
{
    // At start of game place chess pieces on correct <div>

}


function boardClick(evt)
{
    document.getElementById(evt.target.id).style.backgroundImage = null;

    console.log(evt.target.id);
}

