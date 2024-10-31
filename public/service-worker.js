const CACHE_NAME = 'kianoush-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/profile.jpg',
  '/Project1-th.png',
  '/person.svg',
  '/blog1.png',
  '/dist/assets/index-CwOKACNn.js',
  '/dist/assets/index-CbPON0f7.css',
];

// نصب و کش کردن فایل‌های اولیه
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// فعال‌سازی و پاکسازی کش‌های قدیمی
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// مدیریت درخواست‌ها با ترکیب کش پویا و پیش‌کش
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/posts')) {
    // کش کردن درخواست‌های API
    event.respondWith(
      caches.open('dynamic-content').then(cache => {
        return fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => {
          return caches.match(event.request);
        });
      })
    );
  } else {
    // برای سایر درخواست‌ها
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // اگر کش نشده، بگیر و ذخیره کن
        return caches.open('dynamic-pages').then(cache => {
          return fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
