import {
    mapGetters
} from "vuex";
import constants from "../../constants";

export default {
    data() {
        return {
            title: constants.APP_TITLE,
            id: "",
            name: "",
            email: "",
            phone: "",
            dob: "",
            address: "",
        };

    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userName"]),
    },
    methods: {
        /**
         * This is to log out from system.
         * @returns void
         */
        logout() {
            this.$store
                .dispatch("logout")
                .then(() => {
                    this.$router.push({
                        name: "login"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        /**
         * This is to route profile page.
         * @returns void
         */
        showProfile() {
            this.$router.push({
                name: 'userprofile',
                params: {
                    id: this.$store.getters.userId
                }
            })
        },
        passwordChangeScreen() {
            this.$router.push({
                name: "change_password"
            });
        },
        userList() {
            this.$router.push({
                name: "user-list",
            })
        },
        postList() {
            this.$router.push({
                name: "post-list",
            })
        },
    },

};