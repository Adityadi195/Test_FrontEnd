<template>
  <div class="px-1 py-3 text-center">
    <h4 class="display">Diari Jajan Februari 2021</h4>
    <div class="col-lg-2 mx-auto">
      <p>Pengeluaran Bulan Ini</p>
      <div class="d-grid gap-1 d-sm-flex justify-content-sm-center">
        <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">TAMBAH ITEM</a>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- Button trigger modal -->
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="tambahEntri"
      tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="tambahEntri">Tambah Entri</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="nama" class="form-label">nama</label>
          <input type="text" class="form-control" id="nama" placeholder="Enter nama">
              </div>
              <div class="mb-3">
                <label class="form-label">Harga</label>
                <input type="number" min="2" max="10" step="0.2" class="form-control" id="pengeluaraan" placeholder="Enter pengeluaraan" >
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-secondary" type="button" data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal" data-bs-dismiss="modal">Batal</button>
                <button class="btn btn-primary" type="button" data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal" data-bs-dismiss="modal">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  props: ['item']
};
</script>

<style>
</style>