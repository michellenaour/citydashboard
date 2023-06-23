<template>
  <div class="padding-wrapper" style="background-color: rgb(191, 233, 244);">
    <v-row>
      <v-col cols="4">
        <div class="category-list">
          <div
            class="category"
            v-for="category in categories"
            :key="category.id"
            :style="{ backgroundColor: category.color }"
          >
            <div class="category-header" @click="toggleSubtopics(category)">
              <i :class="[category.icon, 'white--text']"></i>
              <span class="category-title white--text">{{
                category.title
              }}</span>
              <i
                :class="{
                  'mdi mdi-chevron-down white--text': category.showSubtopics,
                  'mdi mdi-chevron-up white--text': !category.showSubtopics,
                }"
              ></i>
            </div>
            <div class="subtopics" v-if="category.showSubtopics">
              <div
                class="subtopic padding-wrapper "
                v-for="subtopic in category.subtopics"
                :key="subtopic.id"
                
                @click="selectSubtopic(category, subtopic)"
                :class="{ 'selected-subtopic': subtopic === selectedSubtopic }"
              >
                <span
                  class="subtopic-title white--text"
                  :style="{
                    fontWeight:
                      subtopic === selectedSubtopic ? 'bold' : 'normal',
                  }"
                  >{{ subtopic.title }}</span
                >
                <v-progress-linear
                  height="10"
                  :value="subtopic.total_value"
                  :color="'rgba(250, 250, 250, 0.8)'"
                  rounded
                >
                </v-progress-linear>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <v-card>
          <category-details
            :category="selectedCategory"
            :subtopic="selectedSubtopic"
          ></category-details>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import CategoryDetails from "./CategoryDetails.vue";
import { categories } from "./categoryData.js";
import { simulateDataChanges } from "./simulator.js";

export default {
  components: {
    CategoryDetails,
  },
  data() {
    return {
      selectedCategory: null,
      selectedSubtopic: null,
      categories: categories,
    };
  },
  methods: {
    toggleSubtopics(category) {
      if (category.showSubtopics) {
        // Do nothing if the clicked category is already expanded
        return;
      }

      // Close subtopics of other categories
      this.categories.forEach((cat) => {
        if (cat !== category) {
          cat.showSubtopics = false;
        }
      });

      category.showSubtopics = true;
      const activeSubtopic = category.subtopics[0];
      this.selectSubtopic(category, activeSubtopic);
    },

    selectSubtopic(category, subtopic) {
      this.selectedCategory = category;
      if (subtopic) {
        this.selectedSubtopic = subtopic;
      } else if (category.subtopics.length > 0) {
        this.selectedSubtopic = category.subtopics[0]; // Select the first subtopic if none is provided
      } else {
        this.selectedSubtopic = null; // No subtopics available
      }
      this.$emit(
        "categorySelected",
        this.selectedCategory,
        this.selectedSubtopic
      );
    },
  },

  mounted() {
  
  simulateDataChanges(2); // Ejecutar la simulación cada 5 segundos (puedes ajustar el intervalo según tu preferencia)

    if (this.categories.length > 0) {
      const initialCategory = this.categories[0];
      this.toggleSubtopics(initialCategory);
    }
  },
};
</script>
  <style scoped>
.category-list {
  display: flex;
  flex-direction: column;

  padding: 16px;
}

.category {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.category-header {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.category-header i {
  font-size: 24px;
  margin-right: 10px;
}

.category-title {
  font-size: 16px;
  font-weight: bold;
  margin-right: auto;
}

.subtopics {
  padding: 10px;
}

.subtopic {
  margin-bottom: 10px;
}

.subtopic-title {
  font-size: 14px;
}
.padding-wrapper {
  padding: 16px;
  border-radius: 5px;
}
.progress-label {
  font-size: 10px;
  font-weight: bold;
}
.subtopic.selected-subtopic {
  background-color: rgba(250, 250, 250, 0.2); /* Adjust the alpha value as needed (0.0 to 1.0) */
}
</style>
  