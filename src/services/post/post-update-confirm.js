export default {
    data: () => ({
        valid: true,
        title:'',
        description: '',
        status : '',
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
    mounted() {
        this.title =this.$route.params.title
        this.description =this.$route.params.description
        this.status =this.$route.params.status
        
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
          updatePost(item){
            this.$axios
            .put("/api/posts/"+item , {
                title : this.title,
                description : this.description,
                status: this.status,
                updated_user_id : 1,

            })
            .then((response) => {
                console.log(response)
                this.$router.push({ name: "post-list" });
             
            })
          
    },
},
};
