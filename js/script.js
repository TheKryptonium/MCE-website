/* RESPONSIVE DESIGN */

const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    console.log('Menu toggled');
});


/* BACKEND EMAILJS */

/* functions */
function fillForm(formData, email, description, phone, location) {
    formData.append("email", email);
    formData.append("description", description);
    formData.append("phone", phone);
    formData.append("location", location);
}

async function sendEmail(formData) {
    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id: "service_xg7p579",
                template_id: "template_6iaw5ci",
                user_id: "WrNa3GQzBNlciac1k",
                template_params: {
                    email: formData.get("email"),
                    description: formData.get("description"),
                    phone: formData.get("phone"),
                    location: formData.get("location"),
                },
            }),
        });

        if (response.ok) {
            console.log("Email sent successfully");
        } else {
            throw new Error("Erreur lors de l'envoi");
        }
    } catch (error) {
        console.error(error);
    }
}


async function autoReply(formData) {
    try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id: "service_xg7p579",
                template_id: "template_2pt1ly7",
                user_id: "WrNa3GQzBNlciac1k",
                template_params: {
                    email: formData.get("email"),
                },
            }),
        });

        if (response.ok) {
            console.log("Email sent successfully");
        } else {
            throw new Error("Erreur lors de l'envoi");
        }
    } catch (error) {
        console.error(error);
    }
}


const form = document.querySelector("#devis");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const description = document.querySelector("#description").value;
    const phone = document.querySelector("#phone").value;
    const locate = document.querySelector("#location").value;

    const formData = new FormData(form)

    fillForm(formData, email, description, phone, locate);

    console.log(formData.get("email"));
    console.log(formData.get("description"));

    sendEmail(formData);
    autoReply(formData);
    form.reset()
});
