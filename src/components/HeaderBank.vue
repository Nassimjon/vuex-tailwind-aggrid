<template>
  <div class="relative flex min-h-screen">
    <div class="bg-cyan-600
		 text-cyan-100 
		 w-64 space-y-6 
		 px-2 py-4 
		 absolute 
		 inset-y-0
		 left-0
		 transform
		 -translate-x-full
		 transition
		 duration-500
		 ease-in-out"
		 :class="{'relative -translate-x-0': show, }">
      <a href="" class="flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          /></svg
        ><span class="text-2xl font-extrabold text-white"> AdminLite</span>
				</a>
        <nav>
				

						<router-link :to="{ name: 'ClientBank'}">
          <a href="#" class="
					group
					flex 
					items-center 
					space-x-2 
					py-3 
					px-4
					hover:bg-cyan-700 
					rounded 
					tranistion 
					duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="text-white group-hover:text-cyan-300">Dashboard</span>
          </a>
						</router-link>
          <a href="#" class="
					group
					flex 
					items-center 
					space-x-2 
					py-3 
					px-4
					hover:bg-cyan-700 
					rounded 
					tranistion 
					duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="text-white group-hover:text-cyan-300">Team</span>
          </a>
          <a href="" class="
					group
					flex 
					items-center 
					space-x-2 
					py-3 
					px-4
			  	hover:bg-cyan-700 
					rounded 
					hover: text-cyan-300 
					tranistion 
					duration-300"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span class="text-white group-hover:text-cyan-300">Projects</span></a
          >
          <a href="" class="
					group
					flex 
					items-center 
					space-x-2 
					py-3 
					px-4
					hover:bg-cyan-700 
					rounded 
					hover: text-cyan-300 
					tranistion 
					duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="text-white group-hover:text-cyan-300">Calendar</span>
          </a>
        </nav>
        <!-- nav -->
      
    </div>
    <!-- sidebar -->

		

    <div
		class="
		group
		p-1
    flex-1
		transition-[width]
		overflow-hidden	
		easy-in
		"
	:class="{'width-128 ': show}">
      <div class="bg-white shadow px-2 py-4 flex  items-center">
        <button @click="openSide" class="text-cyan-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
				<a href="#"><span class="ml-2 text-[wh]">Header</span> </a>
      </div>
      <!-- header -->



      <div class="p-4 duration-1000 text-cyan-700  font-extrabold">

					<router-view></router-view>	
				</div>
      <!-- Content -->
			
    </div>
    <!-- Main content -->
		
  </div>
</template>

<script>
//import ClientBank from '@/components/ClientBank.vue'
name: "HeaderBank";
export default {
	components: {
		//ClientBank
	},
	data() {
		return {
			show: false
		}
	},
	methods: {
		openSide() {
			this.show = !this.show;
			console.log('it works')
		},
		
	},
mounted() {
		
}
}
</script>

<style scoped></style>
