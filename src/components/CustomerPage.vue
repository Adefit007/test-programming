<template>
    <div class="container-fluid ">

  <div class="text-center mx-5 mt-5">
    <div>
    <H1>Customer</H1>
    </div>
    <table class="table border">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama</th>
          <th scope="col">Contact</th>
          <th scope="col">Email</th>
          <th scope="col">Alamat</th>
          <th scope="col">Diskon</th>
          <th scope="col">Tipe Diskon</th>
          <th scope="col">Ktp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in customer" :key="item">
          <th scope="row">{{ item.id }}</th>
          <td>{{  item.nama}}</td>
          <td>{{  item.contact}}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.alamat }}</td>
          <td>{{ item.discount }}</td>
          <td>{{ item.tipeDiscount }}</td>
          <td>{{ item.ktp }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'HomeCustomer',
    data(){
      return{
        customer: {}
      }
    },
    async mounted() {
      let result = await axios.get('http://localhost:5000/api/v1/customers').then(response => (this.customer = response.data.customer))
      console.log(result);
}
};

</script>