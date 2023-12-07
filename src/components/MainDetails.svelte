<script>
  export let name;
  export let address;
</script>

<section class="flex flex-col items-end justify-end">
  <h2 class="text-xl font-bold uppercase md:text-4xl">{$name}</h2>
  <p>{$address}</p>
</section>
