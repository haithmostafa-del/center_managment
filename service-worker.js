const CACHE_NAME = "center-management-v3";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",

    "./css/style.css",
    "./js/app.js",

    "./pages/attendance.html",
    "./pages/fees.html",
    "./pages/groups.html",
    "./pages/reports.html",
    "./pages/sessions.html",
    "./pages/settings.html",
    "./pages/students.html",
    "./pages/teachers.html"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
