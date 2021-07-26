import {
    mapGetters
} from "vuex";
export default {

    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        type: 1,
        phone: "",
        address: "",
        profile: "",
        dob: "",
        error: "",

        // validation rules for user name.
        nameRules: [
            value => !!value || "The name field is required."
        ],

        // validation rules for user email.
        emailRules: [
            value => !!value || "The email field is required.",
            value => /.+@.+\..+/.test(value) || "E-mail must be valid."
        ],
        // validation rules for password.
        passwordRules: [
            value => !!value || "The password field is required.",
            value => /^(?:(?=.*\d)(?=.*[A-Z]).*){8}$/.test(value) || "Password must be valid."
        ],

        //validation rules for confirm password.
        confirm_pwdRules: [
            value => !!value || "The confirm password field is required.",
            // value =>  same:password.test(value) || "new Password and new confirm password must be same"
        ],

        // validation rules for phone.
        phoneRules: [
            value => !!value || "Phone is required."
        ],

        // validation rules for address.
        addressRules: [
            value => !!value || "Address is required."
        ],

        // validation rules for dob.
        dobRules: [
            value => !!value || "Date of birth is required."
        ],

    }),
    computed: {
        ...mapGetters(["userId"]),
    },
    mounted() {
        console.log(this.$route.params.data)
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        clear() {
            this.name = ''
            this.email = ''
            this.password = ''
            this.confirm_password = ''
            this.type = ''
            this.phone = ''
            this.address = ''
            this.dob = ''
            this.profile = ''
        },
        store() {
            this.$axios
                .post("/api/users",
                    this.$route.params.data, {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    }
                )
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: "user-list"
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
};
