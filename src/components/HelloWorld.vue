<template>
  
  <div class="container-fluid ">

  <div class="text-center mx-5 mt-5">
    <div>
    <H1>Sales</H1>
    </div>
    <table class="table border">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Kode Transaksi</th>
          <th scope="col">Tanggal Transaksi</th>
          <th scope="col">Customer</th>
          <th scope="col">Item</th>
          <th scope="col">Kuantiti</th>
          <th scope="col">Total Diskon</th>
          <th scope="col">Total Harga</th>
          <th scope="col">Total Bayar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
