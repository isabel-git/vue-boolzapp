
var app = new Vue({
    el: "#app",
    data: {
        usersIndex: 0,
        users: [{
            name: "Michele",
            image: "img/avatar_1.jpg",
            input: ["ciao", "kooooooo", "kkkk+"],
            output: ["come stai?", "joooooo ooooooooooooooo ooooooooo oooooooooooooooo ggggggggggg"],
            // message: [
            //     {
            //         stato: "input",
            //         text: "ciao"
            //     },

            //     {
            //         stato: "output",
            //         text: "come stai?"
            //     },
            //     0}
            //         stato: "input",
            //         text: "tutto bene dai tu?"
            //     },
            // ]
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
            output: ["bffffffff"]

        },
        {
            name: "Mario",
            image: "img/avatar_4.jpg",
            input: ["ciao", "ciao", "ciao"],
            output: ["cfdtg?"]

        },
        {
            name: "Luigi",
            image: "img/avatar_5.jpg",
            input: ["bla bla"],
            output: ["come stai?"]

        },
        {
            name: "Luisa",
            image: "img/avatar_6.jpg",
            input: ["lorem ipsum"],
            output: ["tutto apposto??"]

        },
        {
            name: "Claudio",
            image: "img/avatar_7.jpg",
            input: ["eiillaa"],
            output: ["come stai?", "come stai?", "come stai?", "come stai?"]

        },
        {
            name: "Gio",
            image: "img/avatar_8.jpg",
            input: ["shiao beloooo"],
            output: ["come stai?"],
        }],

    },
    methods: {
        userClick: function (i) { // estrae l'index relativo all'utente cliccato
            this.usersIndex = i
            console.log(i);
        }

    }

})
