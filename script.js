document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // function openOrderPage() {
    //     window.open('order.html', 'Order Now', 'width=800,height=600');
    // }
    // function openOrderModal() {
    //     document.getElementById("orderModal").style.display = "block";
    // }
    
    // function closeOrderModal() {
    //     document.getElementById("orderModal").style.display = "none";
    // }
    
    // Form Validation
    document.querySelector("#contact").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        if (!/^[a-zA-Z ]+$/.test(name)) {
            alert("Invalid name format. Only letters and spaces allowed.");
            return;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert("Invalid email format.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Phone number must be 10 digits long.");
            return;
        }

        alert("Form submitted successfully!");
    });

    // Image Error Handling
    document.querySelectorAll("img").forEach(img => {
        img.onerror = function () {
            this.src = "default.jpg"; // Fallback image
        };
    });
});
