<script>
  export let invoiceNumber;
  export let invoiceDate;
  export let dueDate;
</script>

<article class="my-5 flex items-end justify-end">
  <ul>
    <li class="p-1"><span class="font-bold">Invoice Number:</span>{$invoiceNumber}</li>
    <li class="p-1 bg-gray-100"><span class="font-bold">Invoice date:</span>{$invoiceDate}</li>
    <li class="p-1"><span class="font-bold">Due date:</span>{$dueDate}</li>
  </ul>
</article>
