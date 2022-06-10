<template>
  <div class="container mb-5" id="FindUs">
    <div class="row justify-content-center">
      <h2 class="title text-center mb-5">Nous Trouver</h2>
    </div>
    <div class="row">
      <div class="col-md-6" id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22492.91610254688!2d5.277209870470906!3d45.19489906230752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ac7e5a37aec45%3A0x7a4acdf8b72b8f8d!2s38160%20Chevri%C3%A8res!5e0!3m2!1sfr!2sfr!4v1652327375294!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="col-md-6 border-5" id="findUs">
        <form @submit.prevent="validate" id="contactForm" class="find-us-form">
          <div class="form-group">
            <input
              type="text"
              class="form-control p-4"
              v-bind:class="{ 'is-invalid': nameError }"
              id="name"
              placeholder="Your Name"
              v-model="name"
              autocomplete="off"
            />
            <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
              {{ errors[0].message }}
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control p-4"
              v-bind:class="{ 'is-invalid': emailError }"
              id="email"
              placeholder="Your Email"
              v-model="email"
              autocomplete="off"
            />
            <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
              {{ errors[1].message }}
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control p-4"
              v-bind:class="{ 'is-invalid': subjectError }"
              id="subject"
              placeholder="Your Subject"
              v-model="subject"
              autocomplete="off"
            />
            <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
              {{ errors[2].message }}
            </div>
          </div>
          <div class="form-group">
            <textarea
              class="form-control pl-4 pt-3"
              v-bind:class="{ 'is-invalid': messageError }"
              id="message"
              placeholder="Your Message"
              v-model="message"
              rows="10"
            ></textarea>
            <div class="invalid-feedback" id="feedback-4" v-if="errors[3]">
              {{ errors[3].message }}
            </div>
          </div>
          <div class="send-message text-center">
            <button class="btn btn-dark text-white" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, push, set } from "firebase/database";
import database from "@/config/firebase";
const userListRef = ref(database, "users");
export default {
  name: "FindUs",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      messageError: false,
      errors: [],
    };
  },

  methods: {
    validate() {
      this.errors = [];
      // name validate
      var len = this.name.length;
      if (len < 5 || len > 20) {
        this.nameError = true;
        this.errors.push({
          message: "Name must be between 5 to 20 characters long.",
        });
      } else {
        document.getElementById("name").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-1").className = "valid-feedback";
      }
      // email validate
      if (this.email.length < 10 || this.email.search("@") == -1) {
        this.emailError = true;
        this.errors.push({
          message: "Please provide a valid email address.",
        });
      } else {
        document.getElementById("email").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-2").className = "valid-feedback";
      }

      var subLength = this.subject.length;
      if (subLength < 5 || subLength > 20) {
        this.subjectError = true;
        this.errors.push({
          message: "Subject must be between 5 to 20 characters long.",
        });
      } else {
        document.getElementById("subject").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-3").className = "valid-feedback";
      }
      // message validate
      var regex = /^[a-zA-Z0-9 .-]+$/;
      if (this.message.length < 20 || this.message.match(regex) == null) {
        this.messageError = true;
        this.errors.push({
          field: "message",
          message:
            "Message must be of 20 characters or more and use of special characters except . and - are restricted",
        });
      } else {
        document.getElementById("message").className = "form-control is-valid";
        this.errors.push({
          message: "",
        });
        document.getElementById("feedback-4").className = "valid-feedback";

        if (
          this.nameError != false &&
          this.emailError != false &&
          this.subjectError != false &&
          this.messageError != false
        ) {
          ///if all value valid, store on firebase realtime database
          const newuserRef = push(userListRef);
          set(newuserRef, {
            name: this.name,
            email: this.email,
            suject: this.subject,
            message: this.message,
          });
        }

        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
   
        location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 3em;
  font-weight: 700;
  color: #1b2127;
}
.contact {
  width: 45%;
  border: 1px solid red;
}
.find-us {
  width: 50%;
}

@media screen and (max-width: 1024px) {
  #location {
    margin-bottom: 20px !important;
  }
}
</style>