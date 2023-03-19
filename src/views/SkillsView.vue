<template>
    <div class="bg-gray-50">
  <Header />
  <h1 class="md:text-8xl text-left text-6xl text-black pb-5 md:pb-10">Skills</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 md:pt-10">
      <div v-for="competence in competences" :key="competence.id">
                  <Cardcompetence 
                  :carte="competence" 
                  :id="competence.id" 
                  :title="competence.title"
                  :description="competence.description"
                  :imgcard="competence.imgcard"  
                  :lien="competence.lien" 
                  :textecategorie="competence.textecategorie"
                  :textelien="competence.textelien"/>
                </div>
    </div>
    </div>
    <Footer />
</template>

<script>
import Cardcompetence from '../components/icones/cardcompetence.vue'
import Footer from '../components/layouts/footer.vue';
import Header from '../components/layouts/header.vue';

export default {
    data() {
        return {
            competences: [
            { id: 1, title: 'VueJs', categorie: 'frameworks', imgcard: 'images/outils/VueJS.webp', lien: '/', textecategorie: 'Frameworks' },
            { id: 2, title: 'Figma', categorie: 'maquettage', imgcard: 'images/outils/Figma.webp', lien: '/', textecategorie: 'Maquettage Web' },
            { id: 3, title: 'VS Code', categorie: 'outilsdev', imgcard: 'images/outils/VSCode.webp', lien: '/', textecategorie: 'Developpement Tools' },
            { id: 4, title: 'React', categorie: 'frameworks', imgcard: 'images/outils/React.webp', lien: '/', textecategorie: 'Frameworks' },
            { id: 5, title: 'Next JS', categorie: 'frameworks', imgcard: 'images/outils/Nextjs.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 6, title: 'Tailwind CSS', categorie: 'frameworks', imgcard: 'images/outils/TailwindCSS.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 7, title: 'Three JS', categorie: 'frameworks', imgcard: 'images/outils/Three.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 8, title: 'Chart JS', categorie: 'frameworks', imgcard: 'images/outils/ChartJS.png', lien: '/', textecategorie: 'Frameworks' },
            { id: 9, title: 'Illustrator', categorie: 'design', imgcard: 'images/outils/Illustrator.png', lien: '/', textecategorie: 'Design' },
            { id: 10, title: 'Photoshop', categorie: 'design', imgcard: 'images/outils/Photoshop.png', lien: '/', textecategorie: 'Design' },
            { id: 10, title: 'InDesign', categorie: 'design', imgcard: 'images/outils/InDesign.png', lien: '/', textecategorie: 'Design' },
            ],
            categorieSelectionnee: "toutes",
    }
    },

    components: { Cardcompetence, Header, Footer },
}
</script>