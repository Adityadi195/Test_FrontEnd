<template>
  <div class="album">
    <div class="container">
      <div class="row">
        <div class="col ">
          <div class="card col-ml-2 mr-2 mb-4 shadow">
            <div class="card-body px-3">
                <p class="list-group-item"><b>{{ item.tanggal }}</b></p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="row row-cols-auto">
                    <div class="col">
                      <h1 style="font-size:70%">{{ item.jam }}</h1>
                    </div>
                    <div class="col">
                      <h1 style="font-size:70%">{{ item.nama }}</h1>
                    </div>
                    <div class="col">
                      <h1 style="font-size:70%">{{ item.pengeluaraan }}</h1>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-sm">
                    </div>
                    <div class="col-sm text-bold">
                      <b>Total</b>
                    </div>
                    <div class="col-sm">
                      <b>Rp.</b>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
    name: "App",
    props: ["item"]
}
</script>
<style>
</style>