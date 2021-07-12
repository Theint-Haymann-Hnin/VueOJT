import {
    mapGetters
} from "vuex";
export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "created_user",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
            title: '',
            description: '',
            status: '',
            
        };
    },
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
        this.findPost();
            
            
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.includes(this.keyword) ||
                    post.description.includes(this.keyword) ||
                    post.created_user.includes(this.keyword)
                );
            });
        },
        postCreate() {
            this.$router.push({
                name: "post-create"
            });
        },
        update(item) {
            // this.$router.push({name: 'post-update',item.id})
            

            this.$router.push({ 
                name: 'post-update',
                params: { 
                    id: item.id,
               }
            })

        },
        deletePost(item) {
            // alert('yes')
            // this.$router.push({ 
            //     params: { 
            //         id: item.id,
            //    }
            // })

            this.$axios
            .delete("/api/posts/"+item.id)
            .then((response) => {
                console.log(response);
                this.findPost();
            })
            .catch((err) => {
                console.log(err);
            });
        },
        findPost(){
            this.$axios
            .get("/api/posts")
            .then((response) => {
                // console.log(response.data.data)
                this.postList = response.data.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },
};
