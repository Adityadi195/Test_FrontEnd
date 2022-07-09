<template>

    <div class="container">
        <!-- Button trigger modal -->
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="tambahEntri" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="tambahEntri">Tambah Entri</h5>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="save">
                            <div class="mb-3">
                                <label for="nama" class="form-label">nama</label>
                                <input type="text" class="form-control" id="nama" placeholder="Enter nama">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Harga</label>
                                <input type="number" min="2" max="10" step="0.2" class="form-control" id="pengeluaraan"
                                    placeholder="Enter pengeluaraan">
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" class="btn btn-secondary" v-on:click="closeModal">Batal</button>
                                <button type="button" class="btn btn-primary">Kirim</button>
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
    name: 'CreateView',

    data() {
        return {
            items: [],
        };
    },
    methods: {

        getItems() {
            this.axios.get("http://localhost:3000")
                .then((response) => this.nama = response.data)
        },

        save() {
            this.axios.post("http://localhost:3000/detail", this.item)
                .then(() => {

                    this.item = {
                        nama: '',
                        pengeluaraan: ''
                    }
                })
                .catch(err => console.log(err));
        }
    },

    created() {
        this.getItems()
    }
}

</script>
