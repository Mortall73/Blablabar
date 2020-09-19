<template>
    <div>
        <div class="page__header">
            <h1>Posts</h1>
        </div>
        <div class="page__actions">
            <button type="button" class="btn btn--add" @click.prevent="goToCreatePost">
                Add new
            </button>
        </div>
        <div v-if="!posts">
            Loading posts...
        </div>
        <div v-else>
            <div class="data-table">
                <div class="data-table__actions">
                
                </div>
                <div class="data-table__view">
                    <ul v-for="post in posts" :key="post._id" class="data-list">
                        <li class="data-list__item">
                            <router-link :to="{ name: 'post', params: { id: post._id} }">
                                {{post.title}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Post } from '../../../core/models';
import { PostsStore } from '../../../store/posts';


@Component
export default class PostsPage extends Vue {
    private posts: Array<Post> | null = [];

    async created() {
        try {
            PostsStore.getPosts ?
            this.posts = PostsStore.getPosts 
            :
            await PostsStore.fetchPosts();
            this.posts = PostsStore.getPosts;
        } catch(err) {
           console.log(`%c Error in creating fetchPosts: ${err}`, 'background: #ca0e00; color: #fff; padding: 5px');
        }
       
    }

    goToCreatePost() {
        this.$router.push({ name: 'postEdit' });
    }
}
</script>