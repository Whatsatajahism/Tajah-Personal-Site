



function hello() {
    var answer = prompt("Hi Stranger! You're about to find out my name, but first can you tell me yours?");
    
    if (answer === null || answer === "") {
        return "Stranger";
    } else {
        answer = answer.charAt(0).toUpperCase() + answer.slice(1);
        alert("Thanks for telling me your name, " + answer + ". Welcome to my website!");
        return answer;
    }
}

window.onload = function() {
    const userName = hello();
    const userNameSpan = document.getElementById('user-name');
    userNameSpan.textContent = userName;

    const secondPara = document.getElementById('second-para').querySelector('#user-name');
    secondPara.textContent = userName;

    console.log('Window has loaded.');
};
