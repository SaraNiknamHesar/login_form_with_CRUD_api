const userContainer = document.getElementById("wrap-users");
window.addEventListener("DOMContentLoaded", () => {
    fetch("https://js-project-20b4c-default-rtdb.firebaseio.com/users.json")
        .then(res => res.json())
        .then(data => {
            let userData = Object.entries(data);
            userData.forEach((user) => {
                userContainer.insertAdjacentHTML('beforeend', `
                    <div class="user">
                    <div class="user-profile-wrap">
                        <img class="user-profile" src="assets/img/noimg.png" alt="default-image">
                        <div class="user-profile-description">
                            <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
                            <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn">delete</button>
                        <button class="edit-user-btn">edit</button>
                    </div>
                </div>`);

            });
        })
});