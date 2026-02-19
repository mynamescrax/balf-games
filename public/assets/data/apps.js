var apps = [
    {
      'id': 'customapp',
      'title': 'Add custom app',
      'image': 'assets/images/add.png'
    },
    {
       id: 'poki',
       title: 'Poki unblocked games',
       url: 'https://poki.com/',
       image: 'https://play-lh.googleusercontent.com/FBwBJqAv2KjTXRDRaEkrY3r2PJUWZbru1Y-6VyQY4Sku776mLJ2fIh1nMqzsmGdXUPI=w600-h300-pc0xffffff-pd'
    },
    {
       id: 'helios',
       title: 'Helios Browser',
       html: 'assets/games/helios.html',
       image: 'assets/images/helios.png'
    },
    {
       id: 'soundboard',
       title: 'Soundboard',
       html: 'assets/games/Soundboard.html',
       image: 'https://play-lh.googleusercontent.com/v_5LsSgLe8lMcmmKc1uYMPkaOkM3JVVkl_IvQ8m9iim5Z8Pw80MgvMyA_zc2QvVs6zA=w240-h480-rw'
    },
    {
       id: 'crazygames',
       title: 'Crazygames unblocked games',
       url: 'https://www.crazygames.com/',
       image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Crazygames_jpg_logo.jpg'
    },
    {
      'id': 'neal',
      'title': 'Neal.fun',
      'description': 'some games',
      'url': 'https://neal.fun',
      'image': 'https://images.seeklogo.com/logo-png/52/1/neal-fun-logo-png_seeklogo-528485.png'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
      
    },
    {
      "id": "discord",
      "title": "Discord",
      "description": "most likely wont work unless discord updates their website and it suddenly works",
      "url": "https://discord.com/app",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png'
    }, 
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://reddit.com",
      'image': 'https://static.vecteezy.com/system/resources/previews/018/930/582/non_2x/reddit-logo-reddit-icon-transparent-free-png.png'
    },
    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://youtube.com",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
    },
    {
      'id': 'palyra',
      'title': 'Palyra (Discord alternative)',
      'description': 'Please dont have any personal information or use a personal password on this website',
      'url': 'https://palyra.vercel.app',
      'image': 'https://palyra.vercel.app/assets/icon-gU33obAG.png'
    }
  ]

  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
