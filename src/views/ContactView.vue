<template>
    <div class="contact-form">
        <h1>Contáctanos</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="form.name" placeholder="Tu nombre" required />
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" v-model="form.email" placeholder="Tu correo electrónico" required />
            </div>
            <div class="form-group">
                <label for="message">Mensaje:</label>
                <textarea id="message" v-model="form.message" placeholder="Escribe tu mensaje aquí..." required>
          </textarea>
            </div>
            <button type="submit" class="submit-button">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        submitForm() {
            console.log("Formulario enviado:", this.form);
            alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
            // Restablecer el formulario después de enviar
            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
        },
    },
};
</script>

<style scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.form-group textarea {
    resize: vertical;
    height: 120px;
}

.submit-button {
    display: block;
    width: 100%;
    padding: 10px 15px;
    background: #007bff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-button:hover {
    background: #0056b3;
}
</style>