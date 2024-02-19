
function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1dd100]','text-white','hover:bg-[#1dd100]');        //text-white
    
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1dd100]','text-white','hover:bg-[#1dd100]');
    
}
function handelSelect() {
    // console.log('button');
    
 
    
}

let count=0;
let totalSeat=16;
const addBtn = document.getElementsByClassName("add");
for(const btn of addBtn){
    btn.addEventListener('click',function(event)
    {
        count = count+1;
        setInnerText('seat-count',count)
        totalSeat = totalSeat-1;
        setInnerText('seat-available',totalSeat);

        const seatName = event.target.parentNode.childNodes[1].innerText;
        const seatClass='Economy';
        const seatPrice = 550 ;
        
    // console.log(seatName,seatClass,seatPrice);
    const selectedSeatContainer = document.getElementById('selected-seat-container');
    const li = document.createElement('li');

    const p =document.createElement('p');
    p.innerText = seatName;
    const p2 =document.createElement('p');
    p2.innerText = seatClass;
    const p3 =document.createElement('p');
    p3.innerText = seatPrice;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    selectedSeatContainer .appendChild(li);


    });

    
}

function setInnerText(elementId,value)
{
    document.getElementById(elementId,value).innerText= value;
}
