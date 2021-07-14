export default {

    data: () => ({
        valid: true,
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        loginUserID: '',
        type: 1,
        phone: "",
        address: "",
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

        // validation rules for profile.
        profileRules: [
            value => !!value || "Profile is required."
        ],




    }),

    mounted() {
        this.id = this.$route.params.id
        this.name = this.$route.params.name
        this.email = this.$route.params.email
        this.password = this.$route.params.password
        this.type = this.$route.params.type
        this.phone = this.$route.params.phone
        this.address = this.$route.params.address
        this.dob = this.$route.params.dob
        this.loginUserID = this.$store.getters.userId
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        clear() {
            this.name = ''
            this.email = ''
            this.type = ''
            this.phone = ''
            this.address = ''
            this.dob = ''
            this.profile = ''
        },

        submit() {

        },

        updateUser() {
            this.$axios
                .put("/api/users/" + this.id, {
                    id: this.id,
                    name: this.name,
                    email: this.email,
                    type: this.type,
                    phone: this.phone,
                    address: this.address,
                    dob: this.dob,
                    updated_user_id: this.loginUserID
                })
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: "user-list"
                    });

                })
        }
    },
}