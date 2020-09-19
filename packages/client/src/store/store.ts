import Vue from 'vue'
import Vuex from 'vuex'

import { IPostState, PostsStore }  from './posts';

Vue.use(Vuex);

export interface IRootState {
    posts: IPostState
};

export default new Vuex.Store<IRootState>({})