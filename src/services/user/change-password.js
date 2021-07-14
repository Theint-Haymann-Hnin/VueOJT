import { mapGetters } from "vuex";
export default {
  
    data: () => ({
        valid: true,
        id:'',
        password: "",
        new_password: "",
        confirm_password: "",
        loginUserID:"",
        error: "",

         // validation rules for user name.
        passwordRules: [
            value => !!value || "The password field is required."
        ],

        new_passwordRules: [
            value => !!value || "The new password field is required."
        ],

        confirm_passwordRules: [
            value => !!value || "The confirm password field is required."
        ],



       
    }),
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.loginUserID = this.$store.getters.userId
        this.id = this.$store.getters.userId
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
         updatePassword() {
            this.$axios
                .post("/api/change_password/" + this.loginUserID, {
                    id: this.id,
                    password: this.password,
                    new_password: this.new_password,
                    login_user_id : this.loginUserID,
                })
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: "user-list"
                    });

                })
        }
    },
};

