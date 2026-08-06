const form = document.getElementById("trackingForm");
const result = document.getElementById("trackingResult");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const trackingNumber =
        document.getElementById("trackingNumber").value.trim();

    result.innerHTML = `
        <div class="result-card">
            <h3>${trackingNumber}</h3>
            <p>Status: Awaiting backend integration.</p>
            <p>Your parcel information will appear here once the tracking system is connected.</p>
        </div>
    `;
});