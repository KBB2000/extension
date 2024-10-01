// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchData") {
        fetchDataFromAPI().then((data) => {
            sendResponse({ success: true, data });
        }).catch((error) => {
            sendResponse({ success: false, error: error.message });
        });
        return true; // Keep the messaging channel open for the async response
    }
});

// Example of an asynchronous function to fetch data
function fetchDataFromAPI() {
    return new Promise((resolve) => {
        // Simulate an API call
        setTimeout(() => {
            resolve("Fetched Data from API"); // Example data
        }, 2000);
    });
}
