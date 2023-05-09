<template>
  <q-page padding class="interactive-design">
    <h2>Interactive Design</h2>
    <p>
      Create your custom agroforestry system using our interactive design tool:
    </p>
    <div id="mapid" style="height: 400px; width: 100%"></div>
    <div class="navigation-buttons">
      <q-btn
        label="Previous"
        color="primary"
        outline
        :to="{ name: 'AiAssistance' }"
      />
      <q-btn
        label="Next"
        color="primary"
        :to="{ name: 'PerformanceEvaluation' }"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import L from 'leaflet';
import treeLayerData from '../../assets/trees.geo.json';
import shrubLayerData from '../../assets/shrubs.geo.json';

import 'leaflet/dist/leaflet.css';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

export default defineComponent({
  name: 'InteractiveDesign',
  setup() {
    onMounted(async () => {
      const map = L.map('mapid').setView([54.2812, -2.2145], 18);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      map.pm.addControls({
        position: 'topleft',
        drawCircle: false,
        drawMarker: true,
        drawPolyline: false,
        drawRectangle: false,
        drawCircleMarker: false,
        cutPolygon: false,
      });

      // Define a polygon for a forest area
      const forestArea = [
        [54.2818, -2.2152],
        [54.2812, -2.2152],
        [54.2812, -2.2148],
        [54.2818, -2.2148],
      ];
      L.polygon(forestArea, { color: 'green' })
        .addTo(map)
        .bindPopup('Forest Area');

      L.geoJSON(treeLayerData, {
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.common_name) {
            layer.bindPopup(feature.properties.common_name);
          }
        },
      }).addTo(map);

      L.geoJSON(shrubLayerData, {
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.common_name) {
            layer.bindPopup(feature.properties.common_name);
          }
        },
      }).addTo(map);

      // Add some markers for trees
      const treeLocations = [
        [54.2815, -2.215],
        [54.2816, -2.2151],
        [54.2817, -2.215],
      ];
      treeLocations.forEach((location) => {
        L.marker(location).addTo(map).bindPopup('Tree');
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.interactive-design {
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
}
</style>
