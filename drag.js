const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through boxes
for(const empty of boxes){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//drag functions

function dragStart(){
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

function dragEnd(){
    this.className = "fill";
}


//drag functions
function dragOver(e){
    e.preventDefault();

}
function dragEnter(e){
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave(){
   this.className = "empty";
}
function dragDrop(){
    this.className = "empty";
    this.append(fill);
}