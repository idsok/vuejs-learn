<script>
import BaseButton from "./BaseButton.vue"
import { mapActions } from 'vuex'

export default {
  name: "MenuItem",
  components: {
    BaseButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      onSale: false,
    };
  },
  computed: {
    generatePrice: function () {
      // 10%  de reduction quand c'est un jour pair
      return this.onSale ? (this.price * 0.9).toFixed(2) : this.price;
    },
  },
  methods: {
    ...mapActions(['updateShoppingCart'])
  },
  beforeMount: function () {
    const today = new Date().getDate();
    if (today % 2 === 0) {
      this.onSale = true;
    }
  },
};
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p>Prix : {{ generatePrice }}</p>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <label for="add-item-quantity">Quantité : {{ quantity }}</label>
        <input id="add-item-quantity" type="number" v-model.number="quantity" />
        <BaseButton @click="updateShoppingCart(quantity)">
          Ajouter au panier
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
  &__image {
    max-width: 300px;
  }
}
</style>
