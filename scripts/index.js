document.querySelector("#registration_form").addEventListener("submit",userdetail)

var arr=JSON.parse(localStorage.getItem("userData")) || []

function userdetail(event){
    event.preventDefault()
    let id=document.querySelector(".user_id").value
    let name=document.querySelector(".user_name").value
    let age=document.querySelector(".user_age").value
    let from_station=document.querySelector(".from_station").value
    let to_station=document.querySelector(".to_station").value
    let date=document.querySelector(".date").value
    let seat_type=document.querySelector(".seat_type").value
    
   
    id=id+Date.now()
 
    if(name.length<4){
    alert("name should be morethen 4 character")
    }
    else if(from_station===to_station){
        alert("please choose differnt location")
    }
    else{
   let otp=Math.floor(1000 + Math.random() * 9000);
   let obj={
    id,
    name,
    age,
    from_station,
    to_station,
    date,
    seat_type,
    otp
   }
   arr.push(obj)
   localStorage.setItem("userData",JSON.stringify(arr))
   alert("you are registered")
    }

}