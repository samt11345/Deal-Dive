console.log('Vue.js is currently working');

const vuePage = Vue.createApp({
    // Adding template
    template: '<h2>I am the template</h2>'

    // here can be data()

    // here can be methods

methods: {
    toggleShowInfo() {
        this.showInfo = !this.showInfo
    },
    handleEvent() {
        console.log('The handle event function is working')
    }
}

computed: {}
    filteredInfo() {
        return this.info.filter((info) => info.isFav)
    }
});


vuePage.mount('#vue')

// might want to consider the double handlebar implementation. adds on click event: video 2 16:07
// Also if statement in HTML 23:00

// Use this video to instll Vue : https://www.youtube.com/watch?v=tsDGFUiNZog&ab_channel=Devtamin

// make sure to credit : https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3&ab_channel=NetNinja

