Vue.createApp({
    data() {
        return {
            text: "hello",
            items: [
                "first",
                "second",
                "third",
                "and another one"
            ],
            message: "",
            modelinput: [],
            tacos: "",
            a: 0,
            b: 0
        }
    }
}).mount("#app");
