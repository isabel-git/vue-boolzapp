
var app = new Vue({
    el: "#app",
    data: {
        usersIndex: 0,
        newInput: "",
        users: [{
            name: "Michele",
            image: "img/avatar_1.jpg",
            message: [

                {
                    status: "input",
                    text: "ciao"
                },

                {
                    status: "output",
                    text: "come stai?"
                },

                {
                    status: "input",
                    text: "tutto bene grazie?"
                },

                {
                    status: "input",
                    text: "invece tu?"
                },

                {
                    status: "output",
                    text: "mah non c'è male"
                }        
                
            ]
        },
        {
            name: "Fabio",
            image: "img/avatar_2.jpg",
            message: [

                {
                    status: "input",
                    text: "eilaaaa"
                },

                {
                    status: "output",
                    text: "beellaaa"
                },

                {
                    status: "input",
                    text: "vgkkkkkkkk"
                }

            ]

        },
        {
            name: "Samuele",
            image: "img/avatar_3.jpg",
            message: [

                {
                    status: "input",
                    text: "we we"
                },

                {
                    status: "input",
                    text: "che combini?"
                },

                {
                    status: "output",
                    text: "weee yfgcvtvt"
                },

                {
                    status: "input",
                    text: "anche io"
                }
                        
            ]

        },
        {
            name: "Mario",
            image: "img/avatar_4.jpg",
            message: [

                {
                    status: "output",
                    text: "ciaoh"
                },

                {
                    status: "output",
                    text: "mih piaccionoh ih pandah"
                }
                
            ]

        },
        {
            name: "Luigi",
            image: "img/avatar_5.jpg",
            message: [

                {
                    status: "input",
                    text: "shiao beloooo"
                },

                {
                    status: "output",
                    text: "oh"
                },

                {
                    status: "input",
                    text: "agdhfjdk"
                },

                {
                    status: "input",
                    text: "mexsaggio molto moltoo moltoooo lunho"
                },

                {
                    status: "output",
                    text: "bdwskskjdj lskaj"
                }    
                
            ]

        },
        {
            name: "Luisa",
            image: "img/avatar_6.jpg",
            message: [

                {
                    status: "output",
                    text: "heiiii ciao marioo"
                },

                {
                    status: "output",
                    text: "oh no, scusa ho sbagliato chat"
                },

                {
                    status: "input",
                    text: "ahah fa niente :)"
                },

                {
                    status: "output",
                    text: ";)"
                }

            ]

        },
        {
            name: "Claudio",
            image: "img/avatar_7.jpg",
            message: [

                {
                    status: "input",
                    text: "afagdh"
                },

                {
                    status: "input",
                    text: "jksdnlksn;sa"
                },

                {
                    status: "input",
                    text: "bskjcd aknflaj?"
                },

                {
                    status: "output",
                    text: "kmla klK tuD"
                },

                {
                    status: "input",
                    text: "jncnao jwbdybsO"
                }    
                
            ]

        },
        {
            name: "Gio",
            image: "img/avatar_8.jpg",
            message: [

                {
                    status: "output",
                    text: "domani a che ora?"
                },

                {
                    status: "input",
                    text: "alle 16:08 e 55 secondi"
                },

                {
                    status: "output",
                    text: "ci sarò!"
                },

                {
                    status: "input",
                    text: "ci conto!"
                }
                
            ]
        }],

    },
    methods: {
        userClick: function (i) { // estrae l'index relativo all'utente cliccato
            this.usersIndex = i
            // console.log(i);
            console.log(this.usersIndex);
        },
        send: function () {
            this.users[this.usersIndex].message.push({
                status: "input",
                text: this.newInput,
            })

            this.newInput = "";
        }
    }

})
