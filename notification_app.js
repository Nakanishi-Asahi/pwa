new Vue({
    el: "#app",
    data(){
        return {
            notifications: []
        }
    },
    methods: {
        get_permission(){
            Push.Permission.request(onGranted, onDenied);
        },
        create_push(){
            Push.Create("これは通知のテストです");
        }
    },
    created(){

    }
});

function onGranted(){
    console.log("Granted");
}

function onDenied(){
    console.log("Denied");
}