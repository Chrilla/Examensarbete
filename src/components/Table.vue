<template>

  <div class="mt-5 pt-5">

      <div class="table-heading text-center px-3">Premier League Table 2020/2021</div>
      
      <div class="table">

          <div class="d-flex justify-content-between pr-4 pb-2 pt-4">
            <span class="pl-4">Club</span>
            <div>
                <span class="pr-3">P</span>
                <span class="pr-3">W</span>
                <span class="pr-3">D</span>
                <span class="pr-3">L</span>
                <span class="pr-3">GD</span>
                <span class="pr-3">Pt</span>
            </div>
        </div>
        <hr class="mt-1">

        <div class="d-flex pr-4 pb-2">
            <span class="pl-4">1</span>
            <img class="pl-3" src="@/assets/manutd-badge-mini.svg" alt="">
            <span class="pl-2">Man Utd</span>
            <div class="team-stats">
                <span class="pr-3">3</span>
                <span class="pl-1 pr-3">3</span>
                <span class="pl-1 pr-3">0</span>
                <span class="pr-3">0</span>
                <span class="pl-1 pr-3">10</span>
                <span class="pl-1">9</span>
            </div>
        </div>
        <hr class="mt-1 hr-between">

      </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.table-heading {
    background-color: var(--red-theme);
    border-left: 8px solid var(--white);
    color: var(--white);
    padding: 18.4px 0px 18.4px 0px;
    font-weight: 600;
    font-size: 1.2rem;
}

.table {
    background-color: var(--main-purple-theme);
    height: 1200px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: var(--white);
}

hr {
    height: 1px;
    background-color: var(--white);
    opacity: 0.6;
    width: 87%;
}

.hr-between {
    opacity: 0.4;
}

.team-stats {
    padding-left: 20px;
}

</style>