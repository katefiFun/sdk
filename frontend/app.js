async function earn() {
  const user = document.getElementById("user").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch("http://localhost:3000/api/rewards/earn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, amount: Number(amount) })
  });

  const data = await res.json();
  document.getElementById("result").innerText = JSON.stringify(data);
}
