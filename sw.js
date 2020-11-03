/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-attestation-deplacement-derogatoire-q4-2020/sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/certificate.1e3570bc.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/confidentialite.85b1cbcd.css",
    "revision": "f8736a4178670ac4d64faa9ec250a6a8"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/confidentialite.8702a507.js",
    "revision": "ad932ce34327b5be7508fd6613047eb2"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/confidentialite.html",
    "revision": "d80322648f708edd9b5fecea504cf456"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "174f4c8290e4222a3a0a8db6c5a95e44"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/main.822256ac.js",
    "revision": "6db80818736a7a1eeac778cc9093fadb"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/main.85b1cbcd.css",
    "revision": "039ac5b2a078f5e3c231d51d5e964997"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/main.c59835da.js",
    "revision": "7d1373ce5d650aa482c4f29d2ba7758b"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "attestation-deplacement-derogatoire-q4-2020/safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "b44146850dce59b10e8535da15cf62d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
