{
   "version": 2,
   "name": "music-album",
   "builds": [
      { "src": "server/app.js", "use": "@vercel/node" }
   ],
   "routes": [
      { "src": "/server/(.*)", "dest": "/server/app.js" }
   ]
}



