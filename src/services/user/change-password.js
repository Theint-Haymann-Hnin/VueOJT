import { mapGetters } from "vuex";
export default {
    // data() {
    //     return {
    //         name: '',
    //         email: '',
    //         password: '',
    //         confirm_password: '',
    //         type: '',
    //         phone: '',
    //         address: '',
    //         dob: '',
    //         profile: '',
    //     }
    // },
    data: () => ({
        valid: true,
        password: "",
        new_password: "",
        confirm_password: "",
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
        
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
          submit() {

          },
         
        
    },
};
