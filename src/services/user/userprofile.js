import { mapGetters } from "vuex";
export default {
   
    data: () => ({
        user: null,


       
    }),
    computed: {
        ...mapGetters(["isLoggedIn"]),
    },

    mounted() {
        this.user = this.$store.getters.user
        console.log(this.user)
        
    },
    methods: {
        update(item) {
            this.$router.push({ 
                name: 'user-update',
                params: { 
                    id: item.id,
               }
            })

        },

    },
};
