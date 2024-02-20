let arr = [1, 7, 3, 1, 0, 20, 77];
let updatedArrayEl=document.getElementById("updatedArray");
let startIndexInputEl=document.getElementById("startIndexInput");
let deleteCountInputEl=document.getElementById("deleteCountInput");
let spliceBtnEl=document.getElementById("spliceBtn");
let itemToAddInputEl=document.getElementById("itemToAddInput");


function convertArrtoJSONStringAndAppend(){
    const stringfiedArr=JSON.stringify(arr);
    updatedArrayEl.textContent=stringfiedArr;
}
convertArrtoJSONStringAndAppend();
spliceBtnEl.onclick=function spliceArray(){
    let startindex=startIndexInputEl.value;
    let deleteCount=deleteCountInputEl.value;
    let itemToAdd=itemToAddInputEl.value;
    
    if(startindex===""){
        alert("please enter the index");
        return;
    }
    if(deleteCount===""){
        deleteCount=0;
    }
    if (itemToAdd===""){
        arr.splice(parseInt(startindex),parseInt(deleteCount));

    }else{
        arr.splice(parseInt(startindex),parseInt(deleteCount),itemToAdd);
    }
    startIndexInputEl.value="";
    deleteCountInputEl.value="";
    itemToAddInputEl.value="";
    convertArrtoJSONStringAndAppend();
};
    

