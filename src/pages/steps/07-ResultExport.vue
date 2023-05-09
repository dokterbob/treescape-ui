<template>
  <q-page padding class="export">
    <h2>Export & Share</h2>
    <p>Export your design as a report or share it with others:</p>

    <div class="q-pa-md q-gutter-md">
      <q-card>
        <q-card-section>
          <h4>Export Design</h4>
          <p>Select a file format to export your design:</p>
          <q-btn-dropdown
            color="primary"
            label="Export"
            icon="mdi-file-export"
            no-caret
          >
            <q-list>
              <q-item clickable v-close-popup @click="exportPdf">
                <q-item-section avatar>
                  <q-icon name="mdi-file-pdf" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>PDF</q-item-label>
                  <q-item-label caption
                    >Export your design as a PDF file</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="exportPng">
                <q-item-section avatar>
                  <q-icon name="mdi-image" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>PNG</q-item-label>
                  <q-item-label caption
                    >Export your design as a PNG image</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="exportJson">
                <q-item-section avatar>
                  <q-icon name="mdi-json" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>JSON</q-item-label>
                  <q-item-label caption
                    >Export your design as a JSON file</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-card-section>
      </q-card>

      <q-card class="mt-5">
        <q-card-section>
          <h4>Share Design</h4>
          <p>Select a sharing option:</p>
          <q-btn-dropdown
            color="primary"
            label="Share"
            icon="mdi-share-variant"
            no-caret
          >
            <q-list>
              <q-item
                clickable
                v-close-popup
                @click="showCommunityDialog = true"
              >
                <q-item-section avatar>
                  <q-icon name="mdi-account-group" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Community</q-item-label>
                  <q-item-label caption
                    >Share your design with the app's community to get feedback
                    and suggestions from other users</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="shareViaEmail">
                <q-item-section avatar>
                  <q-icon name="mdi-email" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Email</q-item-label>
                  <q-item-label caption
                    >Share your design via email</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="shareViaSocialMedia">
                <q-item-section avatar>
                  <q-icon name="mdi-share-variant" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Social Media</q-item-label>
                  <q-item-label caption
                    >Share your design on social media</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog>
      <q-card>
        <q-card-section>
          <h4>Share with Community</h4>
          <p>Enter a title and description for your design:</p>
          <q-input v-model="communityTitle" label="Title" />
          <q-input
            v-model="communityDescription"
            label="Description"
            type="textarea"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Cancel" color="secondary" v-close-popup />
          <q-btn label="Share" color="primary" @click="shareWithCommunity" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- <q-btn label="Finish" color="primary" :to="{ name: 'Landing' }" /> -->
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default defineComponent({
  name: 'ResultExport',
  setup() {
    const showCommunityDialog = ref(false);
    const communityTitle = ref('');
    const communityDescription = ref('');

    const exportPdf = () => {
      const design = {
        // Replace this with the actual design data
        name: 'My Agroforestry Design',
        description: 'This is my agroforestry design',
        ecologicalIndicators: [
          { name: 'Biodiversity', value: 85 },
          { name: 'Carbon Sequestration', value: 70 },
          { name: 'Soil Health', value: 90 },
        ],
        economicalIndicators: [
          { name: 'Cost', value: '$10,000' },
          { name: 'Gain', value: '$20,000' },
          { name: 'ROI/Year', value: '5%' },
          { name: 'Break-Even', value: '10 Years' },
        ],
      };

      const doc = new jsPDF();

      // Add title
      doc.setFontSize(24);
      doc.text(design.name, 20, 20);

      // Add description
      doc.setFontSize(12);
      doc.text(design.description, 20, 30);

      // Add ecological indicators table
      doc.autoTable({
        startY: 40,
        head: [['Ecological Indicator', 'Value']],
        body: design.ecologicalIndicators.map(({ name, value }) => [
          name,
          value,
        ]),
      });

      // Add economical indicators table
      doc.autoTable({
        startY: doc.lastAutoTable.finalY + 10,
        head: [['Economical Indicator', 'Value']],
        body: design.economicalIndicators.map(({ name, value }) => [
          name,
          value,
        ]),
      });

      // Save the PDF
      doc.save('agroforestry-design.pdf');
    };

    const exportPng = () => {
      // Code for exporting the design as a PNG
    };

    const exportJson = () => {
      // Code for exporting the design as a JSON file
    };

    const shareViaEmail = () => {
      // Code for sharing the design via email
    };

    const shareViaSocialMedia = () => {
      // Code for sharing the design via social media
    };

    const shareWithCommunity = () => {
      // Code for sharing the design with the app's community
    };

    return {
      showCommunityDialog,
      communityTitle,
      communityDescription,
      exportPdf,
      exportPng,
      exportJson,
      shareViaEmail,
      shareViaSocialMedia,
      shareWithCommunity,
    };
  },
});
</script>

<style lang="scss" scoped>
.export {
  .q-btn-dropdown {
    margin-top: 10px;
  }
}
</style>
