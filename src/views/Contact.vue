<template>
    <div class="contact">
        <HeaderComponent :showBackButton="true" />
        <div class="form-content">
            <form id="contact" @submit.prevent="sendEmail">
                <div class="fields">
                    <h3>What's on your mind?</h3>
                    <input
                        @input="validateForm"
                        type="text"
                        v-model="name"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        @input="validateForm"
                        type="email"
                        v-model="email"
                        name="email"
                        placeholder="Email address"
                    />
                    <textarea
                        @input="validateForm"
                        v-model="message"
                        name="message"
                        rows="7"
                        placeholder="Message"
                    ></textarea>
                    <input type="submit" value="Send" :disabled="!isValidForm" />
                </div>
            </form>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import emailjs from "emailjs-com"
import FooterComponent from "@/components/Footer.vue"
import HeaderComponent from "@/components/Header.vue"

export default {
    name: "ContactPage",
    components: {
        FooterComponent,
        HeaderComponent,
    },
    data() {
        return {
            name: null,
            email: null,
            message: null,
            isValidForm: false,
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm(process.env.VUE_APP_ZOHO_SERVICE_ID, process.env.VUE_APP_ZOHO_TEMPLATE_ID, e.target, process.env.VUE_APP_ZOHO_USER_ID, {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                })

                this.name = null
                this.email = null
                this.message = null
                this.isValidForm = false

                alert("Your message has been sent!")
            } catch (error) {
                alert(error)
            }
        },
        validateForm() {
            if (!this.name || !this.message) {
                this.isValidForm = false
                return
            }

            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (regex.test(this.email)) {
                this.isValidForm = true
            } else {
                this.isValidForm = false
            }
        },
    },
}
</script>

<style scoped>
.form-content {
  display: flex;
  justify-content: space-between;
}

.contact,
.fields {
    display: flex;
}

.contact {
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
}

.fields {
    flex-direction: column;
    margin: 0 auto;
    width: 90vw;
}

form {
    margin: 0 auto;
}

h3 {
    color: black;
    margin-bottom: 30px;
}

input,
textarea {
    background-color: #f2f2f2;
    border: none;
    margin-bottom: 10px;
    padding-left: 20px;
}

input,
input::placeholder,
textarea,
textarea::placeholder {
    font-family: "Roboto Mono", sans-serif;
}

input {
    height: 50px;
}

textarea {
    padding-top: 20px;
    resize: vertical;
}

input[type="submit"] {
    background-color: #27ae60;
    color: white;
    font-size: 1.1em;
    font-weight: 600;
    -webkit-appearance: none;
}

input[type="submit"]:disabled {
    background-color: #f2f2f2;
    color: #999;
}

@media only screen and (min-width: 600px) {
    .fields {
        margin: 0;
        width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .fields {
        width: 40vw;
    }
}
</style>