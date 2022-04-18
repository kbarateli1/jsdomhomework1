
// // 1.
// const firstButton = document.getElementById("myButton");
// myButton.addEventListener("click", () => {
//     myButton.remove();
// });

2.

// function addImage() {
//     const img = document.createElement("img");
//     img.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";
//     document.body.appendChild(img);
// }

// addImage();



//3. 
//  const users = [
//      {
//         avatar: "https://reqres.in/img/faces/10-image.jpg",
//          first_name: "John", 
//          last_name: "Doe",
//          recyclebin:"delete",
//          information:"info",
//         email: "johndoe@gmail.com",
//      },
//      {
//          avatar: "https://reqres.in/img/faces/10-image.jpg",
//          first_name: "John", 
//          last_name: "Doe",
//          recyclebin:"delete",
//          information:"info",
//          email: "johndoe@gmail.com",
//      },
//      {
//          avatar: "https://reqres.in/img/faces/10-image.jpg",
//          first_name: "John", 
//          last_name: "Doe",
//          recyclebin:"delete",
//          information:"info",
//          email: "johndoe@gmail.com",
//      },
//      {
//          avatar: "https://reqres.in/img/faces/10-image.jpg",
//          first_name: "John", 
//          last_name: "Doe",
//          recyclebin:"delete",
//          information:"info",
//          email: "johndoe@gmail.com",
//      },
//    ];
  
//    const renderUsers = () => {
//      const userListContainer = document.querySelector('#user-list');
//      let userNodeString = "";
//      users.forEach(user => {
//        userNodeString += `<div class="user-item">
//        <span><img class="profilephoto" src="${user.avatar}" /></span> 
//        <p class="name">${user.first_name} ${user.last_name} </p>
//        <section id="bottonpart">
//        <button id="recyclebin" type="button">${user.recyclebin}</button> 
//        <button id="information" type="button">${user.information}</button> 
//        </section>
//          </div>`;
//        // userNodeString = userNodeString + 'a'
//      });
//      userListContainer.innerHTML = userNodeString;
  
//      console.log(userNodeString);
//    }
  
//    renderUsers();

// //5.
//   ვერ გავაკეთე

//  const deleteCards = document.getElementById("bottonpart");
//     bottonpart.addEventListener("click", () => {
//     bottonpart.remove();
//  });


  
  
//  6. 
 
const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candles) {  
    let max = Math.max(...candles);
    console.log(max);
}

birthdayCakeCandles(candles);

let count = 0;
candles.forEach(element => {
  if (element === 90) {
    count += 1;
  }
});

console.log(count); 



