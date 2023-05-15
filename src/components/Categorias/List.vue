<template>
  <div class="padding-wrapper">
    <v-row>
      <v-col>
        <div class="category-list">
          <div
            class="category"
            v-for="category in categories"
            :key="category.id"
            :style="{ backgroundColor: category.color }"
          >
            <div class="category-header" @click="toggleSubtopics(category)">
              <i :class="category.icon"></i>
              <span class="category-title">{{ category.title }}</span>
              <i
                :class="{
                  'mdi mdi-chevron-down': category.showSubtopics,
                  'mdi mdi-chevron-up': !category.showSubtopics,
                }"
              ></i>
            </div>
            <div class="subtopics" v-if="category.showSubtopics">
              <div
                class="subtopic"
                v-for="subtopic in category.subtopics"
                :key="subtopic.id"
                :style="{ backgroundColor: category.color }"
                @click="selectSubtopic(category, subtopic)"
              >
                <span class="subtopic-title">{{ subtopic.title }}</span>
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
          ></category-details
        ></v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import CategoryDetails from "./CategoryDetails.vue";
export default {
  components: {
    CategoryDetails,
  },
  data() {
    return {
      selectedCategory: null,
      selectedSubtopic: null,
      categories: [
        {
          id: 1,
          title: "Salud",
          icon: "mdi mdi-hospital-building",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Salud Primaria",
              pob_value: 20,
              grid: [
                ["green", "green", "green", "green", "red", "red"],
                ["green", "red", "red", "red", "green", "red"],
                ["green", "red", "red", "green", "red", "red"],
                ["red", "red", "green", "red", "green", "red"],
                ["green", "red", "red", "red", "red", "red"],
              ],
            },
          ],
          color: "#F44336",
        },
        {
          id: 2,
          title: "Educación",
          icon: "mdi mdi-school",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Educación Básica",
              pob_value: 80,
              grid: [
                ["red", "red", "green", "red", "green", "red"],
                ["red", "green", "red", "green", "red", "green"],
                ["green", "green", "red", "red", "red", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "red", "red"],
              ],
            },
            {
              id: 2,
              title: "Educación Media",
              pob_value: 75,
              grid: [
                ["red", "green", "red", "green", "red", "green"],
                ["green", "red", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "green", "green"],
                ["green", "green", "red", "red", "red", "red"],
                ["red", "red", "green", "red", "red", "green"],
              ],
            },
          ],
          color: "#673AB7",
        },
        {
          id: 3,
          title: "Cultura",
          icon: "mdi mdi-theater",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Bibliotecas",
              pob_value: 50,
              grid: [
                ["green", "green", "green", "green", "red", "green"],
                ["red", "red", "green", "green", "red", "red"],
                ["green", "red", "green", "red", "green", "green"],
                ["red", "green", "red", "red", "red", "red"],
                ["green", "green", "red", "green", "red", "red"],
              ],
            },
            {
              id: 2,
              title: "Sedes Sociales",
              pob_value: 65,
              grid: [
                ["red", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "green", "red"],
              ],
            },
          ],
          color: "#3F51B5",
        },
        {
          id: 4,
          title: "Deporte",
          icon: "mdi mdi-football",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Gimnasios",
              pob_value: 30,
              grid: [
                ["red", "green", "red", "red", "green", "red"],
                ["green", "red", "red", "green", "red", "green"],
                ["green", "green", "red", "red", "red", "red"],
                ["green", "green", "red", "green", "green", "green"],
                ["red", "green", "red", "red", "green", "green"],
              ],
            },
            {
              id: 2,
              title: "Multicanchas",
              pob_value: 40,
              grid: [
                ["red", "red", "green", "red", "red", "red"],
                ["red", "green", "red", "green", "red", "green"],
                ["green", "green", "green", "red", "green", "red"],
                ["red", "red", "green", "green", "green", "red"],
                ["green", "red", "red", "red", "green", "red"],
              ],
            },
            {
              id: 3,
              title: "Canchas de Fútbol",
              pob_value: 75,
              grid: [
                ["red", "green", "red", "green", "green", "red"],
                ["red", "red", "green", "green", "red", "green"],
                ["green", "green", "red", "red", "red", "red"],
                ["green", "green", "red", "red", "red", "red"],
                ["red", "red", "red", "green", "green", "green"],
              ],
            },
          ],
          color: "#2196F3",
        },
        {
          id: 5,
          title: "Áreas Verdes",
          icon: "mdi mdi-forest",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Áreas Verdes",
              pob_value: 75,
              grid: [
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "green", "red"],
              ],
            },
            {
              id: 2,
              title: "Parques",
              pob_value: 75,
              grid: [
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "green", "red"],
              ],
            },
          ],
          color: "#4CAF50",
        },
        {
          id: 6,
          title: "Movilidad",
          icon: "mdi mdi-bike",
          showSubtopics: false,
          subtopics: [
            {
              id: 1,
              title: "Subtopic 6.1",
              pob_value: 75,
              grid: [
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "yellow", "green", "red", "green"],
                ["green", "red", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["red", "red", "green", "red", "green", "red"],
              ],
            },
            {
              id: 2,
              title: "Subtopic 6.2",
              pob_value: 75,
              grid: [
                ["green", "green", "green", "red", "green", "red"],
                ["green", "green", "red", "green", "red", "green"],
                ["green", "red", "green", "red", "green", "red"],
                ["green", "red", "green", "red", "green", "red"],
                ["red", "red", "green", "red", "green", "red"],
              ],
            },
          ],
          color: "#FF9800",
        },
      ],
    };
  },
  methods: {
    toggleSubtopics(category) {
      category.showSubtopics = !category.showSubtopics;

      // Close subtopics of other categories
      this.categories.forEach((cat) => {
        if (cat !== category) {
          cat.showSubtopics = false;
        }
      });

      if (category.showSubtopics) {
        const activeSubtopic = category.subtopics[0];
        this.selectSubtopic(category, activeSubtopic);
      } else {
        this.selectSubtopic(category, null); // Deselect subtopic when collapsing category
      }
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
}
</style>
  