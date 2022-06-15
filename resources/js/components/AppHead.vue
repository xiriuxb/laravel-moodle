<template>
  <Head :title="title ? `${title} | ${$page.props.appName}` : `${$page.props.appName}`">
    <slot />
  </Head>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue'

export default {
  components: {
    Head,
  },
  props:
  {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>