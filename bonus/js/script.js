var app = new Vue({
    el: "#app",
    data: {
        userIndex: 0,
        newInput: "",
        userSerach: "",
        hidden: true,
        bot: ["ok", "Devo andare. A domani!", "davvero??", "che fai?", "woow!", "interessante", ":)"],
        emoji: [
            "img/emoji/agree.png",
            "img/emoji/angry.png",
            "img/emoji/fearful.png",
            "img/emoji/heart_eyes.png",
            "img/emoji/bowtie.png",
            "img/emoji/blush.png",
            "img/emoji/expressionless.png",
            "img/emoji/fearful.png",
            "img/emoji/ghost.png",
            "img/emoji/hankey.png",
            "img/emoji/heart.png",
            "img/emoji/hushed.png",
            "img/emoji/innocent.png",
            "img/emoji/kissing_face.png",
            "img/emoji/kissing_heart.png",
            "img/emoji/kissing_smiling_eyes.png",
            "img/emoji/stuck_out_tongue_closed_eyes.png",
            "img/emoji/stuck_out_tongue_winking_eye.png",
            "img/emoji/sunglasses.png",
            "img/emoji/sweat.png",
            "img/emoji/sweat_smile.png",
            "img/emoji/thumbsdown.png",
            "img/emoji/tired_face.png",
            "img/emoji/tongue.png",
            "img/emoji/triumph.png",
            "img/emoji/unamused.png",
            "img/emoji/v.png",
            "img/emoji/wave.png",
            "img/emoji/wink.png",
            "img/emoji/worried.png",
            "img/emoji/yum.png"
        ],
        users: [{
            name: "Michele",
            image: "img/avatar_1.jpg",
            ultimoAcc: new Date().toLocaleString(),
            message: [

                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "ciao"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "come stai?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "tutto bene grazie?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "invece tu?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "eilaaaa"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "beellaaa"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "we we"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "che combini?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "yfgcvtsghdhrseazfagsdhdhsgafagagaghsshvt"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "ciaoh ciaoooooooh ciah ciah ciaah"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "shiao beloooo"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "oh"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "agdhfjdk"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "mexsaggio molto moltoo moltoooo lunho"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",    
                    text: "fyktgclov"
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
                    imgEmoji: "",   
                    text: "heiiii ciao marioo"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "oh no, scusa ho sbagliato chat"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "ahah fa niente :)"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "afagdh"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "jksdnlksn;sa"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "bskjcd aknflaj?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "kmla klK tuD"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",    
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
                    imgEmoji: "",   
                    text: "domani a che ora?"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",   
                    text: "alle 16:08 e 55 secondi"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "output",
                    imgEmoji: "",   
                    text: "ci sarò!"
                },


                {
                    dateMsg: new Date().toLocaleString(),
                    status: "input",
                    imgEmoji: "",    
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
                text: this.newInput
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
        showEmoticons: function () { // mostara/non mostra emoticons
            this.hidden = !this.hidden;
        },
        emojiClick: function (index) {
            // console.log(index);
            // this.users[this.userIndex].message.push({
            //     dateMsg: new Date().toLocaleString(),
            //     status: "input",
            //     text: this.newInput,
            //     imgEmoji: this.emoji[index]
            // })
            this.newInput = this.emoji[index]
        },
        remove: function (item, i) { // rimuovere il mess
            this.users[this.userIndex].message.splice(i, 1);
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
