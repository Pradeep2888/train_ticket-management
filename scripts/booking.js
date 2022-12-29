var arr=JSON.parse(localStorage.getItem("booked")) || []


showData(arr)

function showData(arr){
    let area=document.getElementById("user_Data")
    arr.forEach((el,index)=>{
       let card=document.createElement("div")
        
       let name=document.createElement("h1")
       name.innerText="Name:"+el.name
       let id=document.createElement("h3")
       id.innerText="ID:"+el.id
       let age=document.createElement("p")
       age.innerText="Age:"+el.age
       let from=document.createElement("p")
       from.innerText="From Station:"+el.from_station
       let to=document.createElement("p")
       to.innerText="To Station:"+el.to_station
       let date=document.createElement("p")
       date.innerText="Date:"+el.date
       let seat=document.createElement("p")
       seat.innerText="Seat:"+el.seat_type
       let otp=document.createElement("p")
       otp.innerText="OTP:"+el.otp
       
       card.append(name,id,age,from,to,date,seat,otp)
       area.append(card)

    })
}



// filter

document.getElementById("filter_dashboard").addEventListener("submit",handlefilter)

function handlefilter(e){
    e.preventDefault()
  let seat=document.querySelector(".seat_type").value
  let age=document.querySelector(".age").value
  let date=document.querySelector(".date").value

  let area=document.getElementById("user_Data")
  area.innerHTML=""

  if(seat){
    let data=arr.filter((item)=>{
        return item.seat_type===seat
    })
    
    showData(data)
  }
  if(age){
    let data=arr.filter((item)=>{
        return Number(item.age)===Number(age)
    })
    
    showData(data)
  }
  if(date){
    let data=arr.filter((item)=>{
        return Number(item.date)===Number(date)
    })
    
    showData(data)
  }
}