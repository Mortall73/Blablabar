<template>
    <div>
        Post page
        <div v-if="!post">
            Loading ...
        </div>
        <div v-else>
            {{post.title}}
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Post } from '../../../core/models';
import { PostsStore } from '../../../store/posts';

@Component
export default class PostPage extends Vue {
    private postId: string = this.$route.params.id;

    private post: Post | null = null;

    created() {
        this.getPost();
    }

    async getPost() {
        try {
            await PostsStore.getPostById(this.postId);
            this.post = PostsStore.getPost;
        } catch (error) {
            console.log(`%c Error in creating fetchPosts: ${error}`, 'background: #ca0e00; color: #fff; padding: 5px');
        }
    }

    destroyed() {
        PostsStore.clearSinglePost();
    }
}
</script>