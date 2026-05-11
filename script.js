const navLinks = document.querySelectorAll(".nav");

/* ACTIVE NAV */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* FAKE LIVE PRICES */
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updatePrices() {
  document.getElementById("btc").innerText = "$" + rand(60000, 70000);
  document.getElementById("eth").innerText = "$" + rand(2500, 4000);
  document.getElementById("sol").innerText = "$" + rand(100, 200);
  document.getElementById("wallet").innerText = "$" + rand(90000, 150000);
}

setInterval(updatePrices, 3000);
updatePrices();

/* TRANSACTIONS */
const txTable = document.getElementById("txTable");

function addTx() {
  const hash = "0x" + Math.random().toString(16).substr(2, 8);

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${hash}</td>
    <td>BTC</td>
    <td>${(Math.random() * 2).toFixed(2)}</td>
    <td style="color:#22c55e">Confirmed</td>
  `;

  txTable.prepend(row);

  if (txTable.children.length > 6) {
    txTable.removeChild(txTable.lastChild);
  }
}

setInterval(addTx, 3000);

/* CHART */
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Market Trend",
      data: [62000, 64000, 63000, 66000, 67000, 69000, 70000],
      borderColor: "#8b5cf6",
      backgroundColor: "rgba(139,92,246,0.2)",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      }
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } }
    }
  }
});