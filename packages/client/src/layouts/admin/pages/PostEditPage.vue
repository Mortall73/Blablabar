<template>
    <div>
        Edit post
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { Post } from '../../../core/models';
import { PostsStore } from '../../../store/posts';

@Component
export default class PostEditPage extends Vue {
    
}
</script>