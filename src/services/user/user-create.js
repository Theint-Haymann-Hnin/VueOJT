import { mapGetters } from "vuex";
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
        dob: "",
        profile: "",
        items: ['Admin', 'User'],
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
            value =>  /^(?:(?=.*\d)(?=.*[A-Z]).*){8}$/.test(value) || "Password must be valid."
        ],

        //validation rules for confirm password.
        confirm_pwdRules:  [
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

    //    validation rules for profile.
    //      profileRules: [
    //         value => !!value || "Profile is required."
    //     ],



       
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
         clear () {
             this.name = ''
             this.email = ''
             this.password = ''
             this.confirm_password = ''
             this.type = ''
             this.phone = ''
             this.address = ''
             this.dob = ''
          
        },

        //   confirmPage(){
        //     this.$router.push({ name: "user_create_confirm" });
        // }

        confirmPage(event) {
            // let data = new FormData();
            // data.append('file', this.profile);

            event.preventDefault()
            this.$router.push({ 
                name: 'user_create_confirm',
                params: { 
                     name: this.name ,
                     email : this.email ,
                     password: this.password ,
                     confirm_password: this.confirm_password,
                     type : this.type,
                     phone : this.phone ,
                     address : this.address ,
                     dob : this.dob ,
                     profile: this.profile,
               }
              })

        },
        selectType(){
            if(this._data.type == 'Admin'){
                this.type = 0;
            }
            else{
                this.type =1;
            }
            console.log(this.type) 
        },
        onChange(e){
            this.profile = e.target.files[0];
        },
    },
};
