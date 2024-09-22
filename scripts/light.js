function lightTheBulb1() {
    const bulb1 = document.getElementById("bulb1");
    setInterval(() => {
        bulb1.style.backgroundColor = "rgba(255, 255, 255, 0.270)";
        bulb1.style.boxShadow = "0 0 80px 20px rgb(255, 255, 255)";
        setTimeout(() => {
            bulb1.style.backgroundColor = "";
            bulb1.style.boxShadow = ""; // Remove the shadow after a moment
            setTimeout(() => {
                bulb1.style.backgroundColor = "rgba(255, 255, 255, 0.270)";
                bulb1.style.boxShadow = "0 0 80px 20px rgb(255, 255, 255)"; // Remove the shadow after a moment
                setTimeout(() => {
                    bulb1.style.backgroundColor = "";
                    bulb1.style.boxShadow = ""; // Remove the shadow after a moment
                    setTimeout(() => {
                        bulb1.style.backgroundColor = "rgba(255, 255, 255, 0.270)";
                        bulb1.style.boxShadow = "0 0 80px 20px rgb(255, 255, 255)"; // Remove the shadow after a moment
                        setTimeout(() => {
                            bulb1.style.backgroundColor = "";
                            bulb1.style.boxShadow = ""; // Remove the shadow after a moment
                        }, 450);
                    }, 1050);
                }, 100);
            }, 100);
        }, 900); // Change this to control how long the shadow lasts
    }, 3000); // Repeat every 3 seconds
}

function lightTheBulb2() {
    const bulb2 = document.getElementById("bulb2");
    setInterval(() => {
        bulb2.style.backgroundColor = "rgba(255, 255, 255, 0.270)";
        bulb2.style.boxShadow = "0 0 80px 20px rgb(255, 255, 255)";
        setTimeout(() => {
            bulb2.style.backgroundColor = "";
            bulb2.style.boxShadow = ""; // Remove the shadow after a moment
        }, 1150); // Change this to control how long the shadow lasts
    }, 1500); // Repeat every 1.5 seconds
}

window.onload = function() {
    lightTheBulb1();
    lightTheBulb2();
};
