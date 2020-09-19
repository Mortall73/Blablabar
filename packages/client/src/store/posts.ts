import { Module, VuexModule, Action, Mutation, getModule } from 'vuex-module-decorators';

import $http from '../utils/http';
import config from '../config';
import store from './store';

import { Post } from '../core/models';

export interface IPostState {
    posts: Array<Post>
}

@Module({
    namespaced: true,
    name: 'posts',
    store,
    dynamic: true,
})
class Posts extends VuexModule implements IPostState {
  posts: Array<Post> = [];

  singlePost: Post | null = null;

  get getPosts(): Array<Post> | null {
    return this.posts.length ? this.posts : null;
  }

  get getPost(): Post | null {
    return this.singlePost;
  }

  @Mutation
  SET_POST(post: Post) {
    this.singlePost = post;
  }
  @Mutation
  CLEAR_POST() {
    this.singlePost = null;
  }

  @Mutation
  SET_POSTS(posts: Array<Post>) {
    this.posts = posts
  }



  @Action
  async fetchPosts() {
    const respose: Response  = await $http.get(`${config.API_URL}/posts`);
    const posts = await respose.json();

    this.SET_POSTS(posts);
  }

  @Action
  async getPostById(id: string) {
    const respose: Response  = await $http.get(`${config.API_URL}/posts/${id}`);
    const post = await respose.json();

    this.SET_POST(post);
  }

  @Action
  clearSinglePost() {
    this.CLEAR_POST();
  }
};

const PostsStore = getModule(Posts);

export { PostsStore };