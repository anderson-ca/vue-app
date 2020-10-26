Vue.createApp({
    data() {
        return {
            text: "hello",
            items: [
                "first",
                "second",
                "third"
            ],
            message: "",
            modelinput: []
        }
    }
}).mount("#app");
