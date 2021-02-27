<template>
  <div>
    <chartjs-bar
      :beginzero="beginZero"
      :datalabel="datalabel"
      :labels="labels"
      :data="data"
      :backgroundcolor="backgroundcolor"
      :bordercolor="borderColor"
      :fill="fill"
    />
  </div>
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
    backgroundcolor: {
      type: String,
      required: false
    },
    // eslint-disable-next-line vue/require-default-prop
    borderColor: {
      type: String,
      required: false
    }
  }
}
</script>
