import { mapGetters } from "vuex";
export default {
    // data() {
    //     return {
    //         title: '',
    //         description: '',
    //     }
    // },
    data: () => ({
        valid: true,
        title: "",
        description: "",
        error: "",

         // validation rules for title
         titleRules: [
            value => !!value || "The title field is required."
        ],
         // validation rules for title
         descriptionRules: [
            value => !!value || "The description field is required."
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
         clear () {
             this.title = ''
             this.description = ''
          },
          confirmPage(event) {
              event.preventDefault()
              this.$router.push({ 
                  name: 'post_create_confirm',
                  params: { 
                       title: this.title ,
                       description : this.description
                 }
                })

          },
        //   postCreate(){
        //     this.$router.push({ name: "post_create_confirm" });
        // }
    },
};
