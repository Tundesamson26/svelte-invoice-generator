<svelte:options accessors />

<script>
  import { v4 as uuidv4 } from "uuid";

  export let description;
  export let quantity;
  export let price;
  export let amount;
  export let list;

//   submit function
  const handleSubmit = async () => {
    amount.update((item) => (item = $quantity * $price));

    const newItem = {
      id: uuidv4(),
      description: $description,
      price: $price,
      quantity: $quantity,
      amount: $amount,
    };

    list.update((items) => {
      items.push(newItem);
      console.log(items);
      return items;
    });

    description.update((item) => (item = ""));
    quantity.update((item) => (item = ""));
    price.update((item) => (item = ""));
    amount.update((item) => (item = ""));
  };

//   edit function here

// delete function here
const deleteButton = (id) => {
    list.update(list.filter((row)=> row.id !== id))
}
</script>

<section>
  <form action="" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col md:mt-16">
      <label for="description">Item Description</label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Item description"
        bind:value={$description}
      />
    </div>
    <div class="md:grid grid-cols-3 gap-10">
      <div class="flex flex-col">
        <label for="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
          bind:value={$quantity}
        />
      </div>
      <div class="flex flex-col">
        <label for="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price"
          bind:value={$price}
        />
      </div>
      <div class="flex flex-col">
        <label for="amount">Amount</label>
        <p>{$quantity * $price}</p>
      </div>
    </div>
    <button
      type="submit"
      class="mb-5 bg-blue-500 py-2 px-8 text-white font-bold shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
      >Add Item</button
    >
  </form>
  <!-- table sections here -->
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
            <td><button type="button" on:click={(id)=> deleteButton(id)}>Delete</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
