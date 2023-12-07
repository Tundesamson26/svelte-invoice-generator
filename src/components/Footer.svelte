<script>
  export let name;
  export let email;
  export let address;
  export let website;
  export let phone;
  export let bankName;
  export let bankAccount;
</script>

<!-- Footer sections -->
<footer class="footer border-t-2 botder-gray-300 pt-5">
  <ul class="flex flex-wrap items-center justify-center">
    <li><span class="font-bold">Your name:</span>{$name}</li>
    <li><span class="font-bold">Your email:</span>{$email}</li>
    <li><span class="font-bold">Address:</span>{$address}</li>
    <li><span class="font-bold">Phone number:</span>{$phone}</li>
    <li><span class="font-bold">Bank:</span>{$bankName}</li>
    <li><span class="font-bold">Account holder name</span>{$name}</li>
    <li><span class="font-bold">Account number:</span>{$bankAccount}</li>
    <li>
      <span class="font-bold">Website:</span><a
        href={$website}
        target="_blank"
        rel="noopenner noreferrer">{$website}</a
      >
    </li>
  </ul>
</footer>
<style>
  .footer li{
    margin: 0.5rem 0.2rem;
  }
</style>
