<script>
import { mapGetters } from 'vuex';
import { ref, computed } from 'vue';
import { useAccount } from 'dashboard/composables/useAccount';
import MacroItem from './MacroItem.vue';

export default {
  components: {
    MacroItem,
  },
  props: {
    conversationId: {
      type: [Number, String],
      required: true,
    },
  },
  setup() {
    const { accountScopedUrl } = useAccount();
    const searchTerm = ref('');

    return {
      accountScopedUrl,
      searchTerm,
    };
  },
  computed: {
    ...mapGetters({
      macros: 'macros/getMacros',
      uiFlags: 'macros/getUIFlags',
    }),
    filteredMacros() {
      if (!this.searchTerm) {
        return this.macros;
      }
      return this.macros.filter(macro =>
        macro.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  mounted() {
    this.$store.dispatch('macros/get');
  },
};
</script>
<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Pesquisar Macros"
      class="macros-search-input"
    />
    <div
      v-if="!uiFlags.isFetching && !filteredMacros.length"
      class="macros_list--empty-state"
    >
      <p class="flex flex-col items-center justify-center h-full">
        {{ $t('MACROS.LIST.404') }}
      </p>
      <router-link :to="accountScopedUrl('settings/macros')">
        <woot-button
          variant="smooth"
          icon="add"
          size="tiny"
          class="macros_add-button"
        >
          {{ $t('MACROS.HEADER_BTN_TXT') }}
        </woot-button>
      </router-link>
    </div>
    <woot-loading-state
      v-if="uiFlags.isFetching"
      :message="$t('MACROS.LOADING')"
    />
    <div v-if="!uiFlags.isFetching && filteredMacros.length" class="macros-list">
      <MacroItem
        v-for="macro in filteredMacros"
        :key="macro.id"
        :macro="macro"
        :conversation-id="conversationId"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.macros-list {
  padding: var(--space-smaller);
}
.macros_list--empty-state {
  padding: var(--space-slab);
  p {
    margin: 0;
  }
}
.macros_add-button {
  margin: var(--space-small) auto 0;
}
.macros-search-input {
  width: 100%;
  padding: var(--space-small);
  margin-bottom: var(--space-small);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
</style>