<svelte:options accessors />

<script>
  export let list;
  console.log($list);
</script>

<section>
  <div class="my-5">
    <table width="100%" class="mb-10">
      <thead>
        <tr class="bg-gray-100 p-1">
          <td class="font-bold">Description</td>
          <td class="font-bold">Quantity</td>
          <td class="font-bold">Price</td>
          <td class="font-bold">Amount</td>
        </tr>
      </thead>
      <tbody>
        {#each $list as listed}
          <tr>
            <td>{listed.description}</td>
            <td>{listed.quantity}</td>
            <td>{listed.price}</td>
            <td>{listed.amount}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
