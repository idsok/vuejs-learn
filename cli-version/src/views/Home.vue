<template>
  <div>
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }} ! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
        v-for="item in simpleMenu"
				:name="item.name"
				:image="item.image"
        :price="item.price"
				:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
      />
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat: {{ totalPanier }} articles</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
import { mapState, mapGetters } from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapState(['restaurantName', 'totalPanier', 'simpleMenu']),
    ...mapGetters(['copyright'])
  },
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss">
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>
