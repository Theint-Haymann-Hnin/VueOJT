import {
    mapGetters
} from "vuex";
export default {
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
        ...mapGetters(["userId"]),
    },

    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        store() {
            this.$axios
                .post("/api/posts", {
                    title: this.$route.params.title,
                    description: this.$route.params.description,
                    created_user_id: this.userId,

                })
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: "post-list"
                    });

                })
                .catch((err) => {
                    console.log(err);
                });
        }

    },
};