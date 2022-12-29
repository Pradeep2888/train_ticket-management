let arr=JSON.parse(localStorage.getItem("userData"))
let index=JSON.parse(localStorage.getItem("index"))
let booked=JSON.parse(localStorage.getItem("booked")) || []
var bag=[0,0,0,0]
function appotp(first,last,i){
    if(last==="stop_input"){
        // bag=bag+first.value
        bag[i]=(first.value)
    }
    else if(first.value){
        // bag=bag+first.value
        bag[i]=(first.value)
        document.getElementById(last).focus()
    }
   
}
function deleteotp(e,first){
    let a=document.getElementById("forth_input").value=""
    if(e.code=="Backspace"){
        bag.pop()
        document.getElementById(first).focus()
        if(first==="second_input"){
            bag.pop()
        }
    }
}
document.getElementById("submit_input").addEventListener("click",showOtp)
function showOtp(){
    let val=Number(bag.join(""))
    if(val===Number(arr[Number(index)].otp)){
       
        alert(`${arr[Number(index)].name} added to waiting list`)

       setTimeout(timOutOne1,5000)
       setTimeout(timOutOne2,10000)
       function timOutOne1(){
        alert(`Booking ticket from ${arr[Number(index)].from_station} to ${arr[Number(index)].to_station}`)
       }
       function timOutOne2(){
        alert(`Ticket booked for  ${arr[Number(index)].date}`)
        let a=arr.splice(Number(index),1)
        localStorage.setItem("userData",JSON.stringify(arr))
        booked.push(a[0])
        localStorage.setItem("booked",JSON.stringify(booked))
        // window.location.href="index.html"
       }

    }
    else{
        alert("Incorrect OTP")
    }
}