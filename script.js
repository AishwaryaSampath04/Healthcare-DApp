document.addEventListener("DOMContentLoaded", function () {
    const locationDetails = document.getElementById("locationDetails");
    const barcodeInput = document.getElementById("barcodeInput");
    const clock = document.getElementById("clock");

    // Initial location data (replace with your actual data)
    const initialLocationData = {
        location: "Presidency University",
        timestamp: getCurrentTimestamp(),
        employee: "Sukarna Jana",
        action: "Shipped",
    };

    displayLocationDetails(initialLocationData);

    barcodeInput.focus(); // Ensure autofocus

    barcodeInput.addEventListener("input", function () {
        const barcodeValue = this.value.trim();

        // Check if the barcode is not empty
        if (barcodeValue.length === 12) {
            // Simulate submitting to a dummy API (replace with your actual API endpoint)
            const locationData = {
                location: "Presidency University",
                timestamp: getCurrentTimestamp(),
                employee: "Sukarna Jana",
                action: "Shipped",
            };

            displayLocationDetails(locationData);
            submitToDummyAPI(barcodeValue, locationData);

            // Clear the input for the next scan
            this.value = "";
        }
    });

    function displayLocationDetails(data) {
        locationDetails.innerHTML = `
            <p><strong>Current Location:</strong> ${data.location}</p>
            <p><strong>Timestamp:</strong> ${data.timestamp}</p>
            <p><strong>Employee:</strong> ${data.employee}</p>
            <p><strong>Action:</strong> ${data.action}</p>
        `;
    }

    function submitToDummyAPI(barcode, locationData) {
        // Replace this with your actual API endpoint
        const dummyAPIEndpoint = "https://dummyapi.example.com";

        // Simulate API request (you may use fetch or other libraries for real API calls)
        console.log(`Submitting barcode ${barcode} with location data to: ${dummyAPIEndpoint}`, locationData);
    }

    function getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleString();
    }

    function updateClock() {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000); // Update clock every second
    updateClock(); // Initial update
});
