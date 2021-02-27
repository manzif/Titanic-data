<template>
  <client-only placeholder="loading...">
    <chartjs-line
      :beginzero="beginZero"
      :datalabel="datalabel"
      :labels="labels"
      :data="data"
      :backgroundColor="backgroundColor"
      :borderColor="borderColor"
      :fill="fill"
    />
  </client-only>
</template>

<script>
export default {
  props: {
    beginZero: {
      type: Boolean,
      required: true
    },
    datalabel: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    fill: {
      type: Boolean,
      required: false
    },
    // eslint-disable-next-line vue/require-default-prop
    backgroundColor: {
      type: String,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    borderColor: {
      type: String,
      required: true
    }
  }
}
</script>
