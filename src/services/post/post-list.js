import axios from "axios";
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
            search_data: ''

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
        this.getAllPosts();
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
            this.$router.push({
                name: 'post-update',
                params: {
                    id: item.id,
                }
            })
        },
        deletePost(item) {

            this.$axios
                .delete("/api/posts/" + item.id)
                .then((response) => {
                    console.log(response);
                    this.getAllPosts();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getAllPosts() {
            this.$axios
                .get("/api/posts")
                .then((response) => {
                    this.postList = response.data.data;
                    this.showList = this.postList;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        findPost() {
            console.log(this.search_data)
            this.$axios
                .get("/api/posts/search", {
                    params: {
                        'search_data': this.search_data
                    }
                })
                .then((response) => {
                    this.postList = response.data.data;
                    this.showList = this.postList;
                    console.log(response.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        excelDownload() {
            axios.post("/api/exportExcel", {
                    responseType: 'blob'
                })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'post.xlsx');
                    document.body.appendChild(link);
                    link.click();
                });
        },
        excelUploadPage() {
            this.$router.push({
                name: "upload_post"
            });
        }
    }
}
