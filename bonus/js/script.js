var app = new Vue({
    el: "#app",
    data: {
        userIndex: 0,
        newInput: "",
        bot: ["ok", "Devo andare. A domani!", "davvero??", "che fai?", "woow!", "interessante", ":)"],
        userSerach: "",
        users: [{
            name: "Michele",
            image: "img/avatar_1.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "ciao"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "come stai?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "tutto bene grazie?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "invece tu?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "mah non c'è male"
                }

            ]
        },
        {
            name: "Fabio",
            image: "img/avatar_2.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "eilaaaa"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "beellaaa"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni atque eveniet. Explicabo sapiente repudiandae voluptatum tenetur voluptas quod, commodi animi sequi, laborum fugiat laudantium labore eaque repellat eius molestiae."
                }

            ]

        },
        {
            name: "Samuele",
            image: "img/avatar_3.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "we we"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "che combini?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "yfgcvtsghdhrseazfagsdhdhsgafagagaghsshvt"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "anche io"
                }

            ]

        },
        {
            name: "Mario",
            image: "img/avatar_4.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "ciaoh ciaoooooooh ciah ciah ciaah"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "mih piaccionoh ih pandaaaaaah"
                }

            ]

        },
        {
            name: "Luigi",
            image: "img/avatar_5.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "shiao beloooo"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "oh"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "agdhfjdk"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "mexsaggio molto moltoo moltoooo lunho"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "bdwskskjdj lskaj"
                }

            ]

        },
        {
            name: "Luisa",
            image: "img/avatar_6.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "heiiii ciao marioo"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "oh no, scusa ho sbagliato chat"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "ahah fa niente :)"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: ";)"
                }

            ]

        },
        {
            name: "Claudio",
            image: "img/avatar_7.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "afagdh"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "jksdnlksn;sa"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "bskjcd aknflaj?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "kmla klK tuD"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "jncnao jwbdybsO"
                }

            ]

        },
        {
            name: "Gio",
            image: "img/avatar_8.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "domani a che ora?"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "alle 16:08 e 55 secondi"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: "ci sarò!"
                },

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    text: "ci conto!"
                }

            ]
        }],

    },
    methods: {
        userClick: function (i) { // estrae l'index relativo all'utente cliccato
            this.userIndex = i
            console.log(this.userIndex);
        },
        find: function (item) { // filtro di ricerca
            return item.name.toLowerCase().includes(this.userSerach);
        },
        send: function () { // invio
            this.users[this.userIndex].message.push({
                dateMsg: new Date().toLocaleString(),
                status: "input",
                text: this.newInput,
            })

            this.newInput = "";

            setTimeout(() => { // risposta
                this.users[this.userIndex].message.push({
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    text: this.bot[Math.floor(Math.random() * this.bot.length)]
                })
            }, 1000);

        },
        remove: function (item, i) { // rimuovere il mess
            this.users[this.userIndex].message.splice(i, 1);
            // console.log(item);
            // if (item.length === 0 ) {
            //     this.users[this.userIndex].message.push({
            //         dateMsg: "",
            //         status: "",
            //         text: ""
            //     })
            // }
        },
        scrollToEnd() { //scrollo
            let container = document.querySelector(".chat");
            let scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        }

    },
    mounted() {
        this.scrollToEnd();
    },
    updated() {
        this.scrollToEnd();

    }

});
