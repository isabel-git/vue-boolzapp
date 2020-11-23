
var app = new Vue({
    el: "#app",
    data: {
        usersIndex: 0,
        // input: "",
        // output: "",
        users: [{
            name: "Michele",
            image: "img/avatar_1.jpg",
            input: ["rooooooooo"],
            output: ["come stai?"]
        },
        {
            name: "Fabio",
            image: "img/avatar_2.jpg",
            input: ["rooooooooo"],
            output: ["come stai?"]

        },
        {
            name: "Samuele",
            image: "img/avatar_3.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        },
        {
            name: "Mario",
            image: "img/avatar_4.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        },
        {
            name: "Luigi",
            image: "img/avatar_5.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        },
        {
            name: "Luisa",
            image: "img/avatar_6.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        },
        {
            name: "Claudio",
            image: "img/avatar_7.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        },
        {
            name: "Gio",
            image: "img/avatar_8.jpg",
            input: ["ciao"],
            output: ["come stai?"]

        }],

    },
    methods: {
        userClick: function (i) { // estrae l'index relativo all'utente cliccato
            this.usersIndex = i
            console.log(i);
        }

    }

})
