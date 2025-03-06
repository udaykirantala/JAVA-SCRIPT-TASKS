const unorderlist = document.getElementById("unorderlist-parent");
const taskname=document.getElementById("userinput");
console.log(taskname)

const addbtn=document.getElementById("addbtn");

addbtn.addEventListener('click',()=>{
    let taskvalue=taskname.value.trim();

    if (taskvalue==""){
        alert("The input is can not Empty");
        return;
    }

    let listitem = document.createElement('li')
    listitem.innerText=taskvalue;
    listitem.classList.add('List-item')

    let managebtn = document.createElement('button')
    managebtn.innerText='Mage the list'
    managebtn.classList.add('Mage-btn')


    let deletebtn = document.createElement('button')
    deletebtn.innerText='Dlete the list'
    deletebtn.classList.add('Delete-btn')

    listitem.appendChild(managebtn);
    listitem.appendChild(deletebtn);
    unorderlist.appendChild(listitem);

    taskname.value=""
})