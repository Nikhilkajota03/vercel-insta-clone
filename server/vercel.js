{
   "version": 2,
   "name": "music-album",
   "builds": [
      { "src": "app.js", "use": "@vercel/node" }
   ],
   "routes": [
      { "src": "/server/(.*)", "dest": "/app.js" }
   ]
}



