const output = document.getElementById('output');

// --- Callback Example ---
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { name: "Shifat", age: 18 };
        callback(data);
    }, 1000);
}

document.getElementById('callbackBtn').addEventListener('click', () => {
    output.innerHTML = "Loading data with callback...";
    fetchDataWithCallback((data) => {
        output.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
    });
});

// --- Promise Example ---
function fetchDataWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { name: "Shifat", age: 18 };
            resolve(data);
        }, 1000);
    });
}

// --- Async/Await Example ---
document.getElementById('asyncBtn').addEventListener('click', async () => {
    output.innerHTML = "Loading data with async/await...";
    const data = await fetchDataWithPromise();
    output.innerHTML = `Name: ${data.name}, Age: ${data.age}`;
});

